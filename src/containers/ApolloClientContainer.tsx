import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import setLogout from '@hooks/auth/helpers/setLogout';
import getToken from '@hooks/auth/helpers/getToken';
import getTokenSession from '@hooks/auth/helpers/getTokenSession';

const ApolloClientContainer = ({ children }: { children: any }) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    //Client side render
    const GRAPHQL_ENDPOINT = 'https://ok-studio-api.herokuapp.com/graphql';

    const cache = new InMemoryCache();

    const getAuthHeaders = () => {
      const token = getToken() || getTokenSession();
      return {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    };

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError && networkError.name === 'ServerError') {
        setLogout();
        console.log(`[Network error]: ${networkError}`);
        window.location.href = '/';
      }
    });

    const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT, headers: getAuthHeaders() });

    const link = ApolloLink.from([errorLink, httpLink, new RetryLink()]);

    const currentClient = new ApolloClient({
      link,
      cache,
      uri: GRAPHQL_ENDPOINT,
      name: 'react-web-client',
      version: '1.3',
      queryDeduplication: false,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
      },
    });
    setClient(currentClient);
  }, []);

  if (!client) {
    return null;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloClientContainer;

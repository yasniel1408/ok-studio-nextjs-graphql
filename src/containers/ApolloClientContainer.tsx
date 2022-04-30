import React from 'react';
import { ApolloClient, ApolloProvider, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const GRAPHQL_ENDPOINT = 'https://ok-studio-api.herokuapp.com/graphql';

const cache = new InMemoryCache();

const authMiddleware = setContext(async (_, { headers }) => {
  const token = localStorage.getItem('USER_TOKEN');
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${JSON.parse(token)}`,
      },
    };
  }
  return {
    headers,
  };
});

const resetToken = onError(({ networkError }: any) => {
  if (networkError && networkError.name === 'ServerError' && networkError?.statusCode === 401) {
    localStorage.removeItem('USER_TOKEN');
    window.location.href = '/';
  }
});

const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT });

const link = ApolloLink.from([authMiddleware.concat(resetToken), httpLink]);

const client = new ApolloClient({
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

const ApolloClientContainer = ({ children }: { children: any }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloClientContainer;

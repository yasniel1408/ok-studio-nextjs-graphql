import App from 'next/app';
import Head from 'next/head';
import '../assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/nextjs-argon-dashboard.min.css';
import { GlobalStyle } from '@components/GlobalStyles';
import LoadingPage from '@components/LoadingPage';
import { ReactChild } from 'react';
import ApolloClientContainer from '@containers/ApolloClientContainer';

export default class MyApp extends App {
  render() {
    const { Component, pageProps }: { Component: any; pageProps: any } = this.props;

    const Layout =
      Component.layout ||
      (({ children }: { children: ReactChild }) => {
        return <>{children}</>;
      });

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Ok-Studio</title>
        </Head>
        <ApolloClientContainer>
          <Layout>
            <GlobalStyle />
            <LoadingPage />
            <Component {...pageProps} />
          </Layout>
        </ApolloClientContainer>
      </>
    );
  }
}

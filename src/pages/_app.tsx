import ReactDOM from 'react-dom';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import '../assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/nextjs-argon-dashboard.min.css';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import PageChange from '../components/PageChange/PageChange';
import { GlobalStyle } from '../components/GlobalStyles';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add('body-page-transition');
  ReactDOM.render(<PageChange path={url} />, document.getElementById('page-transition'));
});
Router.events.on('routeChangeComplete', () => {
  const pageTransition = document.getElementById('page-transition');
  pageTransition && ReactDOM.unmountComponentAtNode(pageTransition);
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  const pageTransition = document.getElementById('page-transition');
  pageTransition && ReactDOM.unmountComponentAtNode(pageTransition);
  document.body.classList.remove('body-page-transition');
});

export default class MyApp extends App {
  componentDidMount() {
    const comment = document.createComment(`Loading....`);
    document.insertBefore(comment, document.documentElement);
  }

  static async getInitialProps({
    Component,
    router,
    ctx,
  }: {
    Component: any;
    router: any;
    ctx: any;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps }: { Component: any; pageProps: any } = this.props;

    // eslint-disable-next-line react/jsx-no-useless-fragment
    const Layout = Component.layout || (({ children }: { children: any }) => <>{children}</>);

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Ok-Studio</title>
        </Head>
        <Layout>
          <GlobalStyle />
          <AuthProvider session={pageProps.session}>
            <Component {...pageProps} />
          </AuthProvider>
        </Layout>
      </>
    );
  }
}

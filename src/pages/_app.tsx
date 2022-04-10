import ReactDOM from 'react-dom';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from 'react';
import PageChange from '../components/PageChange/PageChange';

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
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

import Router from 'next/router';
import { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import PageChange from '@components/PageChange/PageChange';

const LoadingPage = () => {
  useLayoutEffect(() => {
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
  }, []);

  return null;
};

export default LoadingPage;

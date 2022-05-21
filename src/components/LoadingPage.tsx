import Router from 'next/router';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PageChange from '@components/PageChange/PageChange';

const LoadingPage = () => {
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      document.body.classList.add('body-page-transition');
      ReactDOM.render(<PageChange path={url} />, document.getElementById('page-transition'));
    });
    const pageTransition = document.getElementById('page-transition');
    Router.events.on('routeChangeComplete', () => {
      pageTransition && ReactDOM.unmountComponentAtNode(pageTransition);
      document.body.classList.remove('body-page-transition');
    });
    Router.events.on('routeChangeError', () => {
      pageTransition && ReactDOM.unmountComponentAtNode(pageTransition);
      document.body.classList.remove('body-page-transition');
    });
  }, []);

  return null;
};

export default LoadingPage;

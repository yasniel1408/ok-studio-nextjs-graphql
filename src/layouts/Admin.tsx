/* eslint-disable react/destructuring-assignment */
import React, { createRef, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Container } from 'reactstrap';
import routes from '../utils/routes';
import Sidebar from '../components/Sidebar/Sidebar';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import AdminFooter from '../components/Footers/AdminFooter';

function Admin(props: any) {
  const router: NextRouter = useRouter();
  const mainContentRef: any = createRef();

  useEffect(() => {
    if (document && document.scrollingElement) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContentRef.current.scrollTop = 0;
    }
  }, [mainContentRef]);

  const getBrandText = () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const element of routes) {
      if (router.route.indexOf(element.layout + element.path) !== -1) {
        return element.name;
      }
    }
    return 'Brand';
  };
  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: '/',
          imgSrc: './vercel.svg',
          imgAlt: '...',
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar {...props} brandText={getBrandText()} />
        {props.children}
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

export default Admin;

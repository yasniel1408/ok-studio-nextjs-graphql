import React, { createRef, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Container } from 'reactstrap';
import Sidebar from '@components/Sidebar/Sidebar';
import AdminNavbar from '@components/Navbars/AdminNavbar';
import AdminFooter from '@components/Footers/AdminFooter';
import useVerifyToken from '@hooks/auth/useVerifyToken';
import useLogout from '@hooks/auth/useLogout';
import routes from '../utils/routes';
import nextjsArgonBlack from '../assets/img/brand/nextjs_argon_black.png';
import useAuth from '../context/hooks/useAuth';

function Admin(props: any) {
  const router: NextRouter = useRouter();
  const mainContentRef: any = createRef();
  const { setAuth } = useAuth();

  const { verifyToken } = useVerifyToken();
  const { logout } = useLogout();

  useEffect(() => {
    const load = async () => {
      if (await verifyToken()) {
        setAuth(true);
      } else {
        router.push('/auth/login');
        logout();
      }
    };
    load();
  }, [logout, router, verifyToken]);

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
          imgSrc: nextjsArgonBlack,
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

export default React.memo(Admin);

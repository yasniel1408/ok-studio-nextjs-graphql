import Image from 'next/image';
import Link from 'next/link';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

import nextjsArgonWhite from '../../assets/img/brand/nextjs_argon_white.png';
import nextjsArgonBlack from '../../assets/img/brand/nextjs_argon_black.png';

function AuthNavbar() {
  return (
    <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
      <Container className="px-4">
        <Link href="/admin/dashboard" passHref>
          <span>
            <NavbarBrand href="#pablo">
              <Image width="170rem" height="50rem" alt="..." src={nextjsArgonWhite} />
            </NavbarBrand>
          </span>
        </Link>
        <button type="button" className="navbar-toggler" id="navbar-collapse-main">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link href="/admin/dashboard" passHref>
                  <Image width="170rem" height="50rem" alt="..." src={nextjsArgonBlack} />
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button type="button" className="navbar-toggler" id="navbar-collapse-main">
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/admin/dashboard" passHref>
                <NavLink href="#pablo" className="nav-link-icon">
                  <i className="ni ni-planet" />
                  <span className="nav-link-inner--text">Dashboard</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/auth/register" passHref>
                <NavLink href="#pablo" className="nav-link-icon">
                  <i className="ni ni-circle-08" />
                  <span className="nav-link-inner--text">Register</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/auth/login" passHref>
                <NavLink href="#pablo" className="nav-link-icon">
                  <i className="ni ni-key-25" />
                  <span className="nav-link-inner--text">Login</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/admin/profile" passHref>
                <NavLink href="#pablo" className="nav-link-icon">
                  <i className="ni ni-single-02" />
                  <span className="nav-link-inner--text">Profile</span>
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  );
}

export default AuthNavbar;

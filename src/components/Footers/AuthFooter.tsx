import React from 'react';
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

function AuthFooter() {
  return (
    <footer className="py-5">
      <Container>
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © {new Date().getFullYear()}{' '}
              <a
                className="font-weight-bold ml-1"
                href="https://infsoft.home.blog/"
                target="_blank"
                rel="noreferrer"
              >
                Inf-Soft
              </a>
            </div>
          </Col>
          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink href="https://infsoft.home.blog/" target="_blank">
                  Inf-Soft
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://yasniel.vercel.app/" target="_blank">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://infsoft.home.blog/" target="_blank">
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AuthFooter;

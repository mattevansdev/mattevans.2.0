import React, { Component } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Container>
        <Navbar>
          <img
            src="/assets/images/logo100x100.png"
            alt="logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top"
          />
          <div className="d-grid gap-2 d-md-block">
            <NavbarBrand>
              <Nav>
                <NavItem>
                  <NavLink className="link" href="#">
                    <i className="fa fa-user"> </i><span>About</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="link" href="/workspace">
                    <i className="fa fa-desktop"> </i><span>Office</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="link" href="/blog">
                    <i className="fa fa-pencil"> </i><span>Blog</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </NavbarBrand>
          </div>
        </Navbar>
      </Container>
    );
  }
}

export default Header;

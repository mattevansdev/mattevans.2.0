import React, { Component } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <Container>
        <div>
          <Navbar>
            <NavLink href="/">
              <img
                src="/assets/images/logo100x100.png"
                alt="logo"
                width="60"
                height="60"
                className="d-inline-block align-text-top"
              />
            </NavLink>
            <div className="d-grid gap-2 d-md">
              <NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav>
                    <NavItem>
                      <NavLink className="link" href="#">
                        <i className="fa fa-user"> </i><span>About</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="link" href="/blog">
                        <i className="fa fa-pencil"> </i><span>Blog</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="link" href="/projects">
                        <i className="fa fa-star"> </i><span>Projects</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </NavbarBrand>
            </div>
          </Navbar>
        </div>

      </Container >
    );
  }
}

export default Header;

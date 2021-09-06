import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Workspace extends Component {
  render() {
    return (
      <div className="row-content">
        <Container>
          <Row>
            <h1 className="title">My Workspace</h1>
            <img
              className="img"
              src="/assets/images/workspace.jpg"
              alt="My Office"
            ></img>
            <ul>
              <li>MacBook Pro 15” (2016) & M1 Mac Mini</li>
              <li>
                <b>Monitors:</b> LG LED 34" Curved UltraWide WQHD & LG LED 27”
              </li>
              <li>
                <b>Monitor Stand:</b> VIVO Dual Monitor Articulating Desk Mount
                Stand
              </li>
              <li>
                <b>Speakers:</b> Bose Bose Companion 2 Series III
              </li>
              <li>
                <b>Keyboards:</b> Logitech MX Keys and Keychron K2
              </li>
              <li>
                <b>Mouse:</b> Logitech MX Master 3 Wirless Mouse
              </li>
              <li>
                <b>Standing Desk:</b> FEZIBO Dual Motor Sit Stand Desk
              </li>
              <li>
                <b>Cable Management:</b> Signum Cable Management System
              </li>
              <li>
                <b>Desk Mat:</b> Orbitkey Desk Mat
              </li>
            </ul>
            <p className="text-center">
              If you have any questions about my Workspace feel free to shoot
              me an email. You can also follow me on instagram.
            </p>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Workspace;

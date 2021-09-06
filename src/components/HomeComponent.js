import React, { Component } from "react";
import { Container, Row } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="home row-content mx-auto d-block">
              <div className="text-center">
                <img
                  className="profile"
                  src="/assets/images/profile.jpg"
                  alt="Matthew Evans"
                ></img>
                <h1 className="title">Hi there, I'm Matt Evans</h1>
                <p className="lead sub-title">
                  In a galaxy far, far away, I write beautiful code.
                </p>
                <a
                  className="btn btn-social-icon btn-twitter social-links"
                  href="http://twitter.com/matthewevansdev"
                >
                  <i class="fa fa-lg fa-twitter"></i>{" "}
                </a>
                <a
                  className="btn btn-social-icon btn-facebook social-links"
                  href="http://facebook.com/matthew.evans"
                >
                  <i class="fa fa-lg fa-facebook"></i>{" "}
                </a>
                <a
                  className="btn btn-social-icon btn-instagram social-links"
                  href="http://instagram.com/matthew.evans"
                >
                  <i class="fa fa-lg fa-instagram"></i>{" "}
                </a>
                <a
                  className="btn btn-social-icon btn-github social-links"
                  href="http://github.com/mattevansdev"
                >
                  <i class="fa fa-lg fa-github"></i>{" "}
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
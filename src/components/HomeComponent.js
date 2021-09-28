import React, { Component } from "react";
import { Container, Row } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div className="bg-gray-50">
        <Container>
          <Row>
            <div className="min-h-screen">
              <div className="text-center">
                <img
                  className="profile"
                  src="/assets/images/profile.jpg"
                  alt="Matthew Evans"
                ></img>
                <h1 className="text-2xl mb-12 xl:text-5xl">Hi there, I'm Matt Evans</h1>
                <p className="mb-12 sm:text-base md:text-xl xl:text-2xl">
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
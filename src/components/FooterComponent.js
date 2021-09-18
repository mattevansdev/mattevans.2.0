import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
          <div class="container">
            <div className="row row-content">
              <img
                src="/assets/images/me-white.png"
                class="footer-logo"
                alt="Logo"
              />
            </div>
            
            <div className="text-center social-links">
              <a className="btn btn-social-icon" href="http://instagram.com/">
                <i className="fa fa-instagram"></i>
              </a>
              <a className="btn btn-social-icon" href="http://facebook.com/">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="btn btn-social-icon" href="http://twitter.com/">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="btn btn-social-icon" href="http://youtube.com/">
                <i className="fa fa-youtube"></i>
              </a>
              <div>
              <p className="mx-auto">
                Matthew Evans, Full Stack & Mobile Application Developer
              </p>
            </div>
              <p>
                <small>
                  Handcrafted by me and developered with{" "}
                  <a href="https://reactjs.com/">React</a>
                </small>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Work extends Component {
  render() {
    return (
      <div className="row-content">
        <Container>
          <Row>
            <h3 className="title">My Recent Work</h3>
            <p className="text-center">
              Here are a few design projects I've worked on recently. Want to
              see more? Email me.
            </p>
          </Row>
          <Row>
            <Col>
              <div class="media">
                <img
                  class="rounded mx-auto d-block"
                  src="/assets/images/placeholder.jpg"
                  alt="Web Design"
                  width="250"
                  height="250"
                />
              </div>
            </Col>
            <Col>
              <div class="media">
                <img
                  class="rounded mx-auto d-block"
                  src="/assets/images/placeholder.jpg"
                  alt="Web Design"
                  width="250"
                  height="250"
                />
              </div>
            </Col>
            <Col>
              <div class="media">
                <img
                  class="rounded mx-auto d-block"
                  src="/assets/images/placeholder.jpg"
                  alt="Web Design"
                  width="250"
                  height="250"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Work;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../App.scss";

const FourOhFour = props => {
  return (
    <div className="fourohfour-wrapper">
      <Container>
        <Row>
          <Col className="text-center">
            <h3 className="fourohfour-heading mt-5">
              Uh oh. There's nothing here. Try heading <Link to={"/"}>home</Link> instead!
            </h3>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default FourOhFour;

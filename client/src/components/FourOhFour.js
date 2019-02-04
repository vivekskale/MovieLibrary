import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

const FourOhFour = props => {
  return (
    <div className="fourohfour-wrapper">
      <p>
        Try heading <Link to={"/"}>home</Link>
      </p>
    </div>
  )
}

export default FourOhFour;

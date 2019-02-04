import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../App.scss";

const Popular = props => {
    return (
        <div className="popular-wrapper">
            <p>
                Popular products go here
      </p>
        </div>
    )
}

export default Popular;
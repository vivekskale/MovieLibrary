import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../App.scss";

const Header = props => {
    return (
        <header className="App-header">
            <p>
                Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
        </header>
    )
}

export default Header;



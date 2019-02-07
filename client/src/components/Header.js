import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"
import { Container, Row, Col } from "reactstrap";
import "../App.scss";

const Header = props => {
    return (
        <header className="App-header">
            <Container>
                <Row className="header-wrapper">
                    <Col className="logo-col">
                        <img src={logo} alt="The Move Database Logo" />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;



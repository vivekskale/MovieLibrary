import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"
import { Container, Row, Col } from "reactstrap";
import "../App.scss";

const MovieThumb = props => {

    const posterImg = props.baseUrl + props.smPosterSize + props.posterPath;

    return (
        <Col xs={6} lg={3}>
            <img src={posterImg} alt={props.name + " Poster"} className="img-fluid" />
        </Col>
    )
}

export default MovieThumb;
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../Spinner.scss";

const Spinner = props => {
    return (
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    )
}

export default Spinner;
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../App.scss";
class Search extends Component {
    state = {
        searchQuery: ""
    };

    componentDidMount() {
    }

    render() {
        return (
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
        )
    }
}
export default Search;
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import MovieThumb from "./MovieThumb";
import searchIcon from "../img/search.png";

import "../App.scss";
class Search extends Component {
    state = {
        searchQuery: "",
        searchResults: []
    };

    getMoviesSearch = async (query) => {
        const response = await fetch(`/api/getMoviesSearch/?query=${query}`)
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    handleChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        }, () => {
            this.getMoviesSearch(this.state.searchQuery)
                .then(res => {
                    this.setState({
                        searchResults: res.response.results,
                    })
                })
                .catch(err => console.log(err));
        })
    }

    render() {

        return (
            <section className="search-wrapper">
                <Container >
                    <Row>
                        <Col>
                            <div className="search-bar">
                                <input type="text" placeholder="Search" className="search-input" value={this.state.searchQuery} onChange={this.handleChange} />
                                <img src={searchIcon} alt="search icon" className="search-icon" />
                            </div>
                        </Col>
                    </Row>
                    {(this.state.searchQuery && this.state.searchResults) && (this.state.searchQuery.length > 0 && this.state.searchResults.length === 0) &&
                        <Row className="search-prefix">
                            <Col><h2 className="text-left">No results found for "{this.state.searchQuery}"</h2></Col>
                        </Row>
                    }
                    {(this.state.searchQuery && this.state.searchResults) && (this.state.searchQuery.length > 0 && this.state.searchResults.length !== 0) &&
                        <Row className="search-prefix">
                            <Col><h2 className="text-left">Search results for "{this.state.searchQuery}"</h2></Col>
                        </Row>
                    }
                    {this.state.searchResults && this.state.searchQuery.length > 0 &&
                        <Row className="search-results">
                            {this.state.searchResults.map((movie) => {
                                return <MovieThumb key={movie.id} id={movie.id} name={movie.original_title} voteRating={movie.vote_average} date={movie.release_date} baseUrl={this.props.baseUrl} smPosterSize={this.props.smPosterSize} posterPath={movie.poster_path} goToPage={this.props.goToPage} />
                            })}
                        </Row>
                    }
                </Container>
            </section>
        )
    }
}
export default Search;
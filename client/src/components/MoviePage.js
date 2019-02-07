import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import backArrow from "../img/back-arrow.png";
import { format } from "date-fns";
import "../App.scss";
class MoviePage extends Component {
    state = {
        configuration: "",
        movieInfo: ""
    };

    componentDidMount() {
        const movieId = this.props.match.params.movieid;
        this.getConfiguration()
            .then(res => {
                this.setState({
                    configuration: res.response
                }, () => {
                    this.getSingleMovie(movieId)
                        .then(res => {
                            this.setState({
                                movieInfo: res.response
                            })
                        })
                })
            })
    }

    getConfiguration = async () => {
        const response = await fetch(`/api/getConfiguration`)
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    getSingleMovie = async (id) => {
        const response = await fetch(`/api/getSingleMovie/?id=${id}`)
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    RuntimeHoursMins = (mins) => {
        const hours = Math.floor(parseInt(mins) / 60);
        const minsRemaining = (mins - (hours * 60));
        return <span>{hours}hr {minsRemaining} mins</span>
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        const movieId = this.props.match.params.movieid;

        if (this.state.movieInfo === "") {
            //Loading screen until API has finished fetching movie data
            return (<div className="movie-page-wrapper">
                <p>Loading Animation here</p>
            </div>)
        } else {
            //Display Movie Information

            const baseUrl = this.state.configuration.images.base_url;
            const title = this.state.movieInfo.original_title;
            const movieOverview = this.state.movieInfo.overview;
            const releaseYear = this.state.movieInfo.release_date;
            const releaseYearFormatted = format(releaseYear.replace("-", "/"), "YYYY");
            const ratingPercent = this.state.movieInfo.vote_average * 10;
            const runtimeMins = this.state.movieInfo.runtime;
            const RuntimeHoursMins = () => this.RuntimeHoursMins(runtimeMins);


            // All Common Background and Poster sizes
            const smBgSize = this.state.configuration.images.backdrop_sizes[0];
            const mdBgSize = this.state.configuration.images.backdrop_sizes[1];
            const lgBgSize = this.state.configuration.images.backdrop_sizes[2];
            const smPosterSize = this.state.configuration.images.poster_sizes[2];
            const mdPosterSize = this.state.configuration.images.poster_sizes[3];
            const lgPosterSize = this.state.configuration.images.poster_sizes[4];
            const xlPosterSize = this.state.configuration.images.poster_sizes[5];

            // Define Background Size
            const bgUrl = this.state.movieInfo.backdrop_path;
            const bgImage = baseUrl + lgBgSize + bgUrl;
            const movieBg = {
                backgroundImage: `url(${bgImage})`,
            }

            //Define Poster Size
            const posterUrl = this.state.movieInfo.poster_path;
            const posterImg = baseUrl + mdPosterSize + posterUrl;

            return (
                <div className="movie-page-wrapper">
                    <div className="movie-header-wrapper" style={movieBg}>
                        <img src={backArrow} alt="Back to Homepage" className="movie-back-arrow" onClick={() => { this.goBack() }} />
                    </div>
                    <Container>
                        <Row>
                            <Col xs={5}>
                                <img src={posterImg} alt={title + " poster image"} className="img-fluid movie-pg-poster pointer" />
                            </Col>
                            <Col xs={7}>
                                <h2 className="movie-pg-title">{title}</h2>
                                <div className="movie-details">
                                    <p>{releaseYearFormatted} • {ratingPercent}% User Score</p>
                                    <p><RuntimeHoursMins /></p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr className="movie-pg-section-divider" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3 className="movie-overview-title">Overview</h3>
                                <p className="movie-description">
                                    {movieOverview}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

            )
        }
    }
}
export default MoviePage;
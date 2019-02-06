import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
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

    render() {
        const movieId = this.props.match.params.movieid;

        if (this.state.movieInfo === "") {
            return <p>Loading Animation here</p>
        } else {
            return (
                <p>MOVIE PAGE - {movieId}</p>
            )
        }
    }
}
export default MoviePage;
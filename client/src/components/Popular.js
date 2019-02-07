import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../App.scss";
import MovieThumb from "./MovieThumb";
import Spinner from "./Spinner";
class Popular extends Component {
    state = {
        movies: [],
        page: 1
    };
    componentDidMount() {
        this.getPopularProducts("1")
            .then(res => {
                console.log(res);
                this.setState({
                    movies: res.response.results,
                    page: res.response.page
                })
            })
            .catch(err => console.log(err));
    }

    getPopularProducts = async (pagenum) => {
        const response = await fetch(`/api/getPopularMovies/?pagenum=${pagenum}`)
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    render() {
        if (this.state.movies.length === 0) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Spinner />
                            <p className="text-center">Loading Popular Movies</p>
                        </Col>
                    </Row>
                </Container>
            )
        } else {
            return (
                <div className="popular-wrapper">
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="section-title">Popular Movies</h2>
                            </Col>
                        </Row>
                        <Row>
                            {this.state.movies.map((movie => {
                                return <MovieThumb key={movie.id} id={movie.id} name={movie.original_title} voteRating={movie.vote_average} date={movie.release_date} baseUrl={this.props.baseUrl} smPosterSize={this.props.smPosterSize} posterPath={movie.poster_path} goToPage={this.props.goToPage} />
                            }))}
                        </Row>
                    </Container>
                </div>
            )
        }
    }
}
export default Popular;
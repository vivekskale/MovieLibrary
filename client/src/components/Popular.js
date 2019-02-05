import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../App.scss";
import MovieThumb from "./MovieThumb";
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
        return (
            <div className="popular-wrapper">
                <Container>
                    <Row>
                        <Col>
                            <h2>Popular Movies</h2>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.movies.map((movie => {
                            return <MovieThumb key={movie.id} name={movie.original_title} baseUrl={this.props.baseUrl} smPosterSize={this.props.smPosterSize} posterPath={movie.poster_path} />
                        }))}
                    </Row>
                </Container>

            </div>
        )
    }
}
export default Popular;
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import Popular from "./components/Popular";
import Header from "./components/Header"
import "./App.scss";
class App extends Component {
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
      <BrowserRouter>
        <div className="App">
          <Header />
          <Popular />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

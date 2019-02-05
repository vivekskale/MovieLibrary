import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Popular from "./components/Popular";
import Header from "./components/Header";
import Search from "./components/Search";
import "./App.scss";
class App extends Component {
  state = {
    movies: [],
    page: 1,
    configuration: null
  };
  componentDidMount() {
    this.getConfiguration()
      .then(res => {
        console.log(res);
        this.setState({
          configuration: res.response
        })
      })
      .catch(err => console.log(err));
  }

  getConfiguration = async () => {
    const response = await fetch(`/api/getConfiguration`)
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Search />
          {this.state.configuration !== null &&
            <Popular baseUrl={this.state.configuration.images.secure_base_url} smPosterSize={this.state.configuration.images.poster_sizes[3]} />
          }
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

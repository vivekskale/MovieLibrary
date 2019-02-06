import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import MoviePage from "./MoviePage";
import FourOhFour from "./FourOhFour";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/movie/*/:movieid" component={MoviePage} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default Router;

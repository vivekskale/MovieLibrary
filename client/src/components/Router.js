import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import FourOhFour from "./FourOhFour";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default Router;

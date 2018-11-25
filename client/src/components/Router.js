import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import App from "./App";
import NotFound from "./NotFound";
import { Provider } from "react-redux";
import store from "../store";

const Router = () => (
  <Provider store={store} key="provider">
    <BrowserRouter>
      <Switch>
        <Route exact="exact" path="/" component={Login} />
        <Route exact="exact" path="/App" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Router;

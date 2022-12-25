import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>

  );
}
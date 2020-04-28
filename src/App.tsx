import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

const App = () => (
  <Switch>
    <Route path="/">
      <Main />
    </Route>
  </Switch>
);

export default App;

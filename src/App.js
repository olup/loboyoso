import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";

import "./assets/main.css";
import StyleddApp from "./StyledApp.js";

const App = () => (
  <Router>
    <StyleddApp>
      <Routes />
    </StyleddApp>
  </Router>
);

export default hot(module)(App);

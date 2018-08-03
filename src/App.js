import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import logo from "./assets/logo.svg";
//
import Routes from "react-static-routes";

import Typography from "./utils/typography";
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

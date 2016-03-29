import React from "react";
import { Route, IndexRoute } from "react-router";

// Components
import App from "./components/app";
import Home from "./screens/home/index";
import Docs from "./screens/docs/index";

// Analytics
// import ga from "react-ga";
// ga.initialize("UA-43290258-1");

// TODO:
// <Route path="docs/:component" component={ComponentDocs} />

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/docs" component={Docs}/>
    <Route path="/docs/:component" component={Docs} />
  </Route>
);

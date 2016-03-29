import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute } from "react-router";

// Components
import App from "./components/app";
import Docs from "./screens/docs/index";
import Root from "./components/styleroot";

// Analytics
import ga from "react-ga";

// TODO:
// <Route path="docs/:component" component={ComponentDocs} />

const routes = (
  <Route path="/" component={Root}>
    <IndexRoute component={App} />
    <Route path="docs" component={Docs} />
  </Route>
);

export default {

  routes,

  run: (el) => {
    const history = useBasename(createHistory)({
      basename: "/"
    });
    const router = (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        {routes}
      </Router>
    );
    ga.initialize("UA-43290258-1");
    render(router, el);
  }

};

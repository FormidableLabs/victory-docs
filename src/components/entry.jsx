import React from "react";
import { render } from "react-dom";
import { Router, applyRouterMiddleware, browserHistory } from "react-router";
import useScroll from "react-router-scroll";
// import routes and pass them into <Router/>
import routes from "../routes";

render(
  <Router
    history={browserHistory}
    routes={routes}
    render={applyRouterMiddleware(useScroll())}
  />,
  document.getElementById("content")
);

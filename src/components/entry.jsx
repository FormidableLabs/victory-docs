import React from "react";
import { render } from "react-dom";
import { Router, useRouterHistory } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";
import useScroll from "scroll-behavior/lib/useStandardScroll";
// import routes and pass them into <Router/>
import routes from "../routes";

const appHistory = useScroll(useRouterHistory(createBrowserHistory))();

render(
  <Router
    history={appHistory}
    routes={routes}
  />,
  document.getElementById("content")
);

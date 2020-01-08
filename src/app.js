import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { Router, Route, withRouter } from "react-static";
/* "react-static-routes" is generated at runtime https://github.com/nozzle/react-static/issues/52 */
// eslint-disable-next-line import/no-unresolved
import Routes from "react-static-routes";
import { ThemeProvider } from "styled-components";
import { animateScroll as scroll } from "react-scroll";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Analytics from "./google-analytics";

const HEADER_PIXEL_HEIGHT = theme.layout.headerHeight.split("rem")[0] * 10;
const SCROLL_PIXEL_OFFSET = 25;
const SIDEBAR_CONTAINER_ID = "sidebar-sections";

const scrollContent = async ({ hash }, contentPaneClass = ".Page-content") => {
  const item = document.querySelector(`${contentPaneClass} ${hash}`);
  console.log("SCROLL CONTENT ITEM: ", item);
  if (item) {
    const rect = item.getBoundingClientRect();
    const truePosition =
      (rect.top + window.pageYOffset || document.documentElement.scrollTop) -
      HEADER_PIXEL_HEIGHT -
      SCROLL_PIXEL_OFFSET;

    scroll.scrollTo(truePosition, {
      duration: 500,
      delay: 0,
      smooth: "easeOutQuad"
    });
  }
};

const scrollSidebar = async (activeItemClass = ".is-active") => {
  const item = document.querySelector(activeItemClass);
  if (item) {
    const rect = item.getBoundingClientRect();
    const truePosition =
      rect.top + window.pageYOffset || document.documentElement.scrollTop;

    const itemClassName = activeItemClass.split(".")[1];

    scroll.scrollTo(itemClassName, {
      duration: 200,
      delay: 500,
      smooth: "easeOutQuad",
      containerId: SIDEBAR_CONTAINER_ID
    });
    // );
  }
};

const checkScrollRoutes = (pathname, routes = ["docs", "faq", "guides"]) =>
  routes.some(r => pathname.includes(r));

function ScrollToTop({ location, children }) {
  useEffect(() => {
    if (typeof window !== "undefined" && checkScrollRoutes(location.pathname)) {
      scrollContent(location).then(() => scrollSidebar());
    }
  }, [location]);

  return children;
}

ScrollToTop.propTypes = {
  children: PropTypes.array,
  location: PropTypes.object
};

const WrappedScrollToTop = withRouter(ScrollToTop);

// eslint-disable-next-line react/no-multi-comp
const RenderRoutes = ({ getComponentForPath }) => (
  // use a catch all route to receive the pathname
  <Route
    path="*"
    render={props => {
      // The pathname is used to retrieve the component for that path
      const comp = getComponentForPath(props.location.pathname);
      // The component is rendered w/ the possibility of remaining mounted if it passes component reconciliation
      return comp && comp(props);
    }}
  />
);

RenderRoutes.propTypes = {
  getComponentForPath: PropTypes.func,
  location: PropTypes.object
};

let history;

if (typeof window !== "undefined") {
  const createBrowserHistory = require("history").createBrowserHistory;
  const { stage, landerBasePath } = require("../static-config-parts/constants");
  history =
    stage === "development"
      ? createBrowserHistory()
      : createBrowserHistory({ basename: `/${landerBasePath}` });
}

// eslint-disable-next-line react/no-multi-comp
const App = () => (
  <Router
    showErrorsInProduction={false}
    autoScrollToHash={false}
    scrollToHashDuration={100}
    autoScrollToTop
    history={history}
  >
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WrappedScrollToTop>
        <Analytics id="UA-43290258-1">
          <Routes>{RenderRoutes}</Routes>
        </Analytics>
      </WrappedScrollToTop>
    </ThemeProvider>
  </Router>
);

export default App;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router, Route, withRouter } from "react-static";
import VictoryHeader from "./partials/header";
/* "react-static-routes" is generated at runtime https://github.com/nozzle/react-static/issues/52 */
// eslint-disable-next-line import/no-unresolved
import Routes from "react-static-routes";
import Analytics from "./google-analytics";
import "./app.css";
//  If none of the base prism js themes are quite what we want for our site's aesthetic, we can use/extend any of these:
// https://github.com/PrismJS/prism-themes
// Note that themes also manage code block dimensions -- currently we don't use any theme, unclear if the current
// look is by design, though. To bring in a theme, uncomment out the line below:
// import "prismjs/themes/prism-coy.css"

const scrollContent = async ({ hash }, contentPaneClass = ".Page-content") => {
  const item = document.querySelector(contentPaneClass + " " + hash);
  if (item) {
    item.scrollIntoView();
  }
};

const scrollSidebar = async (location, activeItemClass = ".is-active") => {
  const item = document.querySelector(activeItemClass);
  if (item) {
    item.scrollIntoView();
  }
};

const checkScrollRoutes = (pathname, routes = ["docs", "faq", "guides"]) =>
  routes.some(r => pathname.includes(r));

class ScrollToTop extends Component {
  componentDidMount() {
    if (
      typeof window !== "undefined" &&
      checkScrollRoutes(this.props.location.pathname)
    ) {
      scrollContent(this.props.location);
      scrollSidebar(this.props.location);
    }
  }

  componentDidUpdate() {
    if (
      typeof window !== "undefined" &&
      checkScrollRoutes(this.props.location.pathname)
    ) {
      scrollContent(this.props.location);
      scrollSidebar(this.props.location);
    }
  }

  render() {
    return (
      <div className="Page-wrapper u-fullHeight">{this.props.children}</div>
    );
  }
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
let basename;
if (typeof window !== "undefined") {
  const createBrowserHistory = require("history").createBrowserHistory;
  const { stage, landerBasePath } = require("../static-config-parts/constants");
  basename = `/${landerBasePath}`;
  history =
    stage === "development"
      ? createBrowserHistory()
      : createBrowserHistory({ basename });
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
    <WrappedScrollToTop>
      <VictoryHeader />
      <Analytics id="UA-43290258-1" basename={basename}>
        <Routes>{RenderRoutes}</Routes>
      </Analytics>
    </WrappedScrollToTop>
  </Router>
);

export default App;

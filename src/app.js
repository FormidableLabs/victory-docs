import React, { Component } from "react";
import { Router, Route, Link, withRouter } from "react-static";
import VictoryHeader from "./partials/header";
import Routes from "react-static-routes";
import Analytics from "./google-analytics";
import "./app.css";
//  If none of the base prism js themes are quite what we want for our site's aesthetic, we can use/extend any of these:
// https://github.com/PrismJS/prism-themes
// Note that themes also manage code block dimensions -- currently we don't use any theme, unclear if the current
// look is by design, though. To bring in a theme, uncomment out the line below:
//import "prismjs/themes/prism-coy.css"

const scrollContent = async({hash}, contentPaneClass = ".Page-content") => {
  document.querySelector(contentPaneClass + " " + hash).scrollIntoView();
};

const scrollSidebar = async (location, activeItemClass = ".is-active") => {
  document.querySelector(activeItemClass).scrollIntoView();
};

const checkScrollRoutes = (pathname, routes = ['docs', 'faq', 'guides']) =>  routes.some(r => pathname.includes(r));

class ScrollToTop extends Component {
  componentDidMount() {
    if (typeof window !== "undefined" && checkScrollRoutes(this.props.location.pathname)) {
        scrollContent(this.props.location);
        scrollSidebar(this.props.location);
    }
  }

  componentDidUpdate() {
    if (typeof window !== "undefined" && checkScrollRoutes(this.props.location.pathname)) {
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

const WrappedScrollToTop = withRouter(ScrollToTop);

const RenderRoutes = ({ getComponentForPath }) => (
  // use a catch all route to receive the pathname
  <Route
    path="*"
    render={props => {
      // The pathname is used to retrieve the component for that path
      const Comp = getComponentForPath(props.location.pathname);
      // The component is rendered w/ the possibility of remaining mounted if it passes component reconciliation
      return Comp && Comp(props);
    }}
  />
);

let history;
if (typeof window !== "undefined") {
  const createBrowserHistory = require("history/createBrowserHistory").default;
  history = createBrowserHistory();
}

const App = () => (
  <Router
    showErrorsInProduction={false}
    autoScrollToHash={false}
    scrollToHashDuration={100}
    autoScrollToTop={true}
    history={history}
  >
    <WrappedScrollToTop>
      <VictoryHeader />
      <Analytics id="UA-43290258-1">
        <Routes>{RenderRoutes}</Routes>
      </Analytics>
    </WrappedScrollToTop>
  </Router>
);

export default App;

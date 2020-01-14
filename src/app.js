import React, { Component } from "react";
import PropTypes from "prop-types";
import { Root, Routes } from "react-static";
import { Route } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Analytics from "./google-analytics";
import NotFound from "./pages/404";

const scrollContent = async ({ hash }, contentPaneClass = ".Page-content") => {
  const item = document.querySelector(`${contentPaneClass} ${hash}`);
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
    const { location } = this.props;
    if (typeof window !== "undefined" && checkScrollRoutes(location.pathname)) {
      scrollContent(location);
      scrollSidebar(location);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.array,
  location: PropTypes.object
};

// eslint-disable-next-line react/no-multi-comp
const App = () => {
  return (
    <Root>
      {/* TODO: create a better fallback component */}
      <React.Suspense fallback={<h1>Loading</h1>}>
        <Analytics id="UA-43290258-1">
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Analytics id="UA-43290258-1">
              <Routes
                render={({ routePath, getComponentForPath }) => (
                  <Route path="*">
                    {props => {
                      const Comp = getComponentForPath(routePath) || (
                        <NotFound />
                      );
                      // Add react-router route props like location and history
                      const CompWithRouteProps = React.cloneElement(
                        Comp,
                        props
                      );
                      return (
                        <ScrollToTop {...props}>
                          {CompWithRouteProps}
                        </ScrollToTop>
                      );
                    }}
                  </Route>
                )}
              />
            </Analytics>
          </ThemeProvider>
        </Analytics>
      </React.Suspense>
    </Root>
  );
};

export default App;

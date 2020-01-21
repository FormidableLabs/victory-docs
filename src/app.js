import React, { useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import { Root, Routes } from "react-static";
import { Route } from "react-router";
import { ThemeProvider } from "styled-components";
import { animateScroll as scroll } from "react-scroll";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Analytics from "./google-analytics";
import NotFound from "./pages/404";

const HEADER_PIXEL_HEIGHT = theme.layout.headerHeight.split("rem")[0] * 10;
const SCROLL_PIXEL_OFFSET = 25;
const DEFAULT_PAGE_CONTENT_CLASS = ".Page-content";
const ROUTES = ["docs", "faq", "guides"];

const scrollContent = async (
  hash,
  contentPaneClass = DEFAULT_PAGE_CONTENT_CLASS
) => {
  const item = document.querySelector(`${contentPaneClass} ${hash}`);

  if (!item) {
    return;
  }

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
};

const checkScrollRoutes = (pathname, routes = ROUTES) =>
  routes.some(r => pathname.includes(r));

// Back up implementation without hooks to show the problem with getting the scroll of hashes on docs to work
// this class component isn't actually in use - you can swap it out with `ScrollToCurrentSection` and get the same effect.
// I am truly stumped on how to get this working better and I know this is very ugly but it's also helpful to demonstrate where I'm stuck.

class ScrollToTop extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.location && this.props.location.hash) {
      setTimeout(() => {
        scrollContent(this.props.location.hash);
      }, 1000);
    }
  }

  componentDidUpdate() {
    if (checkScrollRoutes(this.props.location.pathname)) {
      scrollContent(this.props.location.hash);
    }
  }

  render() {
    return this.props.children;
  }
}
ScrollToTop.propTypes = {
  children: PropTypes.array,
  location: PropTypes.object
};

const ScrollToCurrentSection = ({ location, children }) => {
  const { pathname, hash = "" } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (checkScrollRoutes(pathname) && hash) {
      setTimeout(() => {
        scrollContent(hash);
      }, 1000);
    }
  }, [pathname]);
  // So, even though we're using the hash here for scroll content we only want this useEffect to fire when the pathname changes

  useLayoutEffect(() => {
    if (checkScrollRoutes(pathname)) {
      scrollContent(hash);
    }
  }, [hash, pathname]);
  // this will handle route scrolls after initial paint. The location of the hash isn't able to be identified on the initial paint in time for the scroll to work reliably.
  // it just needs the _slightest_ delay for it to work. Slow 3G on chrome still works.
  // Please, please, please show me a better way to navigate this.
  return children;
};

ScrollToCurrentSection.propTypes = {
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
                        <ScrollToCurrentSection {...props}>
                          {CompWithRouteProps}
                        </ScrollToCurrentSection>
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

import React, { useEffect } from "react";
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

const ScrollToTop = ({ location, children }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && checkScrollRoutes(location.pathname)) {
      scrollContent(location.hash);
    }
  }, [location]);

  return children;
};

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

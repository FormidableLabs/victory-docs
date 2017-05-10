import React from "react";
import { ScrollContainer } from "react-router-scroll";

import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import sidebarStore from "../stores/sidebar";

class Page extends React.Component {
  shouldUpdateScroll(scrollBehavior, prevRouterProps) {
    if (scrollBehavior && scrollBehavior.location && prevRouterProps && prevRouterProps.location) {
      // if the previous URL remains unchanged, don’t scroll the container pls
      if (prevRouterProps.location.pathname === scrollBehavior.location.pathname) {
        return false;
      }
    }
    return true;
  }
  render() {
    /* eslint-disable max-len */
    return (
      <div className="u-fullHeight">
        <Header />
        <main className="Page">
          <Sidebar
            active={this.props.sidebar}
            location={this.props.location}
            store={sidebarStore}
          />
          <ScrollContainer
            scrollKey="page-content"
            shouldUpdateScroll={this.shouldUpdateScroll}
          >
            <div className="Page-content">
              <article className="Article">
                {this.props.children}
              </article>
              <Footer />
            </div>
          </ScrollContainer>
        </main>
      </div>
    );
  /* eslint-enable max-len */
  }
}

Page.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
  sidebar: React.PropTypes.string
};

Page.defaultProps = {
  children: null,
  sidebar: "index"
};

export default Page;

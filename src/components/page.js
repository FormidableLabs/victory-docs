import React from "react";
import { ScrollContainer } from "react-router-scroll";

// Child Components
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

class Page extends React.Component {
  render() {
    /* eslint-disable max-len */
    return (
      <div className="u-fullHeight">
        <Header />
        <main className="Page">
          <Sidebar
            active={this.props.sidebar}
            location={this.props.location}
            tocArray={this.props.tocArray}
          />
          <ScrollContainer scrollKey="page-content">
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
  sidebar: React.PropTypes.string,
  tocArray: React.PropTypes.array
};

Page.defaultProps = {
  children: null,
  sidebar: "index",
  tocArray: []
};

export default Page;

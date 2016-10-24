import React from "react";

// Child Components
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

class InternalPage extends React.Component {
  render() {
    /* eslint-disable max-len */
    return (
      <div className="u-fullHeight">
        <Header />
        <main className="Page">
          <Sidebar
            active={this.props.sidebar}
            tocArray={this.props.tocArray}
            location={this.props.location}
          />
          <div className="Page-content">
            <article className="Article">
              {this.props.children}
            </article>
            <Footer />
          </div>
        </main>
      </div>
    );
  /* eslint-enable max-len */
  }
}

InternalPage.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
  sidebar: React.PropTypes.string,
  tocArray: React.PropTypes.array
};

InternalPage.defaultProps = {
  children: null,
  sidebar: "index",
  tocArray: []
};

export default InternalPage;

import React from "react";

// Child Components
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

class InternalPage extends React.Component {
  render() {
    /* eslint-disable max-len */
    return (
      <div>
        <main className="Page">
          <Header />
          <Sidebar active={this.props.sidebar} />
          <article className="Article">
            {this.props.children}
          </article>
          <Footer />
        </main>
      </div>
    );
  /* eslint-enable max-len */
  }
}

InternalPage.propTypes = {
  children: React.PropTypes.node,
  sidebar: React.PropTypes.string
};

InternalPage.defaultProps = {
  children: null,
  sidebar: "index"
};

export default InternalPage;

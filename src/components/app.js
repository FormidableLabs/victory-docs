import React from "react";
import PropTypes from "prop-types";

// Variables and Stylesheet
import "../styles/styles.css";
import sidebarStore from "../stores/sidebar";

class App extends React.Component {
  componentDidUpdate() {
    const {pathname} = this.props.location;

    if (!sidebarStore.hasSidebar(pathname)) {
      sidebarStore.reset();
    }
  }

  render() {
    return (this.props.children);
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;

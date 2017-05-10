import React from "react";

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
  location: React.PropTypes.object.isRequired,
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;

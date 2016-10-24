/* global window */
import React from "react";
import Radium, { StyleRoot } from "radium";

// Variables and Stylesheet
import "../styles/styles.css";

class App extends React.Component {
  render() {
    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;
    return this.props.children;
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default Radium(App);

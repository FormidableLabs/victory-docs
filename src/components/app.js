/* global window */
import React from "react";
import Radium, { Style, StyleRoot } from "radium";

// Variables and Stylesheet
import { VictoryTheme as VictoryStyleSheet } from "formidable-landers";

class App extends React.Component {
  render() {
    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;
    return (
      <StyleRoot radiumConfig={isBrowser ? { userAgent: window.navigator.userAgent } : null}>
        <Style rules={VictoryStyleSheet} />
        {this.props.children}
      </StyleRoot>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default Radium(App);

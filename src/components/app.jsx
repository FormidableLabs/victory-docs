/* global window */
import React from "react";
import ga from "react-ga";
import Radium, { Style, StyleRoot } from "radium";

// Variables and Stylesheet
import { Header, VictorySettings, VictoryTheme as VictoryStyleSheet } from "formidable-landers";

class App extends React.Component {
  componentDidMount() {
    ga.initialize("UA-43290258-1");
  }

  getStyles() {
    return {
      header: {
        borderBottom: 0,
        color: VictorySettings.palerSand,
        padding: `${VictorySettings.gutter}px`,
        position: "relative",
        zIndex: "1"
      },
      linkStyles: {
        border: 0,
        color: VictorySettings.sand,
        fontWeight: "normal",
        transition: "color 5s ease-out",
        ":hover": {
          color: VictorySettings.whiteSand,
          border: 0,
          boxShadow: "none",
          transition: "color 200ms ease"
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;
    return (
      <StyleRoot radiumConfig={isBrowser ? { userAgent: window.navigator.userAgent } : null}>
        <Header
          styleOverrides={styles.header}
          linkStyles={styles.linkStyles}
          background={VictorySettings.darkMud}
        >
          We like your style. <span className="Smallcaps">Join us.</span>
          <br/>
          We’re hiring!
        </Header>
        {this.props.children}
        <Style rules={VictoryStyleSheet} />
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

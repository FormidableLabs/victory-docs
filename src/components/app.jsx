import React from "react";
import Radium, { Style, StyleRoot } from "radium";

// Variables and Stylesheet
import { Header, VictorySettings, VictoryTheme } from "formidable-landers";

class App extends React.Component {
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
    return (
      <StyleRoot>
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
        <Style rules={VictoryTheme} />
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

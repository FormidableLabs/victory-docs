import React from "react";
import Radium, { Style, StyleRoot } from "radium";

// Variables and Stylesheet
import { Header, Footer, VictorySettings, VictoryTheme } from "formidable-landers";

class App extends React.Component {
  getStyles() {
    return {
      header: {
        backgroundColor: VictorySettings.darkMud,
        borderBottom: 0,
        color: VictorySettings.palerSand,
        padding: `${VictorySettings.gutter}px`
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
        >
          Looking for a <span className="Smallcaps">custom dashboard?</span>
          <br/>
          Need help leveling up your data visualizations? <span className="Smallcaps">Let’s&nbsp;talk!</span>
        </Header>

        {this.props.children}

        <Footer
          backgroundColor={VictorySettings.darkMud}
          logoColor="white"
          styleOverrides={{color: VictorySettings.darkSand}}
          linkStyles={styles.linkStyles}
        >
          <div style={{margin: `${VictorySettings.gutter * 2}px 0`}}>
            <p>
              Victory is a trademark of Formidable Labs, Inc.
            </p>
          </div>
        </Footer>
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

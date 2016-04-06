import React from "react";
import Radium, { Style, StyleRoot } from "radium";

// Variables and Stylesheet
import { Header, Footer, VictorySettings, VictoryTheme } from "formidable-landers";

class App extends React.Component {
  getStyles() {
    return {
      header: {
        backgroundColor: VictorySettings.darkMud,
        // boxShadow: `0 0 0 10px ${VictorySettings.palerSand}, 0 0 0 11px ${VictorySettings.mud}`,
        borderBottom: 0,
        color: VictorySettings.palerSand
      },
      headerLinks: {
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

  getFooterStyles() {
    return {
      linkStyles: {
        color: VictorySettings.text,
        borderColor: VictorySettings.red,
        ":hover": {
          color: VictorySettings.red,
          boxShadow: `inset 0 -0.2em ${VictorySettings.red}`
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    // const headerStyles = this.getHeaderStyles();
    const footerStyles = this.getFooterStyles();
    return (
      <StyleRoot>
        <Header
          styleOverrides={styles.header}
          linkStyles={styles.headerLinks}
        >
          Looking for a <span className="Smallcaps">custom dashboard?</span>
          <br/>
          Need help leveling up your data visualizations? <span className="Smallcaps">Let’s&nbsp;talk!</span>
        </Header>

        {this.props.children}

        <Footer
          backgroundColor={VictorySettings.mud}
          logoColor="white"
          styleOverrides={{color: VictorySettings.paleSand}}
          linkStyles={footerStyles.linkStyles}
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

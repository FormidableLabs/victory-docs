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
      footer: {
        backgroundColor: VictorySettings.palerSand,
        borderStyle: "solid",
        borderWidth: "61px 41px",
        borderImageSource: `url("./static/footer-border.svg")`,
        borderImageSlice: "61 41",
        borderImageRepeat: "repeat",
        color: VictorySettings.paleMud,
        margin: `${VictorySettings.gutter}px`,
        padding: `${VictorySettings.gutter * 2}px`,
        position: "relative"
      },
      footerTop: {
        position: "absolute",
        top: "-61px",
        left: 0,
        right: 0,
        height: "62px",
        background: `url("./static/footer-top.svg") top center / 80px 80px no-repeat`
      },
      footerBottom: {
        position: "absolute",
        bottom: "-63px",
        left: 0,
        right: 0,
        height: "82px",
        background: `url("./static/footer-bottom.svg") top center / 80px 80px no-repeat`
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
          logoColor="black"
          styleOverrides={styles.footer}
        >
          <span style={styles.footerTop}/>
          <p style={{margin: `${VictorySettings.gutter}px 0 0 0`}}>
            Victory is a trademark of Formidable Labs, Inc.
          </p>
          <span style={styles.footerBottom}/>
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

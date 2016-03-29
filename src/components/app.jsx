import React from "react";
import Radium, { Style, StyleRoot } from "radium";
import { Link } from "react-router";

// Child components
import Home from "../screens/home/index";

// Variables and Stylesheet
import { Header, Footer, VictorySettings, VictoryTheme } from "formidable-landers";


class App extends React.Component {
  getHeaderStyles() {
    return {
      overrides: {
        backgroundColor: "transparent",
        borderTop: `1em solid ${VictorySettings.text}`,
        borderRight: `1em solid ${VictorySettings.text}`,
        borderBottom: "0",
        borderLeft: `1em solid ${VictorySettings.text}`
      },
      linkStyles: {
        color: VictorySettings.orange,
        borderColor: VictorySettings.orange,
        ":hover": {
          color: VictorySettings.text,
          boxShadow: `inset 0 -0.2em ${VictorySettings.orange}`
        }
      }
    };
  }
  getFooterStyles() {
    return {
      overrides: {
        zIndex: "1",
        position: "relative",

        margin: "0",

        borderTop: "0",
        borderRight: `1em solid ${VictorySettings.text}`,
        borderBottom: `1em solid ${VictorySettings.text}`,
        borderLeft: `1em solid ${VictorySettings.text}`
      },
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
    const headerStyles = this.getHeaderStyles();
    const footerStyles = this.getFooterStyles();
    return (
      <StyleRoot>
        <Header
          backgroundColor={VictorySettings.palestSand}
          styleOverrides={{display: "block"}}
        >
          Looking for a custom dashboard? Need help leveling up your data visualizations? Let’s talk!
        </Header>

        <Link className="Button Button--spotlight" to="docs">Get Started</Link>

        <Home />

        <Footer
          backgroundColor={VictorySettings.palestSand}
          logoColor="black"
        >
          <div style={{margin: "2em 0", fontSize: "0.8rem"}}>
            Victory is a trademark of Formidable Labs, Inc.
          </div>
        </Footer>
      <Style rules={VictoryTheme} />
      </StyleRoot>
    );
  }
}

export default Radium(App);

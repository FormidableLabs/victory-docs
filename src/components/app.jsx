import React from "react";
import Radium, { Style, StyleRoot } from "radium";

// Variables and Stylesheet
import { Header, Footer, VictorySettings, VictoryTheme } from "formidable-landers";

class App extends React.Component {
  getHeaderStyles() {
    return {
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
          linkStyles={headerStyles.linkStyles}
        >
          Looking for a custom dashboard? Need help leveling up your data visualizations? Let’s talk!
        </Header>

        {this.props.children}

        <Footer
          backgroundColor={VictorySettings.palestSand}
          logoColor="black"
          linkStyles={footerStyles.linkStyles}
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

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default Radium(App);

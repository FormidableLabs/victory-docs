import React from "react";
import Radium from "radium";
import marked from "marked";
import Prism from "prismjs";
/* eslint-disable no-unused-vars */
// adds support for language-jsx (Prism.languages.jsx)
import jsx from "prismjs/components/prism-jsx";
/* eslint-enable no-unused-vars */

// Variables
import { VictorySettings, VictoryTheme } from "formidable-landers";
import victoryREADME from "!!raw!victory/README.md";

// Child components
import Sidebar from "../../components/sidebar";

// /open-source/victory/docs route.
class Docs extends React.Component {
  getSectionStyles() {
    return {
      position: "relative",

      zIndex: "1",
      margin: "0",
      padding: "1em 1em 3em",
      width: "100%",

      borderTop: "0",
      borderRight: `1em solid ${VictorySettings.text}`,
      borderBottom: `1em solid ${VictorySettings.text}`,
      borderLeft: `1em solid ${VictorySettings.text}`
    };
  }

  getStyles() {
    return {
      container: {
        display: "flex",
        flex: "1 0 auto",
        flexDirection: "column",
        margin: "0 auto",
        padding: "1rem",
        "@media (min-width: 70em)": {
          "flexDirection": "row",
          margin: "0 2.5rem"
        }
      },
      main: {
        margin: "1rem 0 0 0",
        padding: "1rem 0.5rem",
        "@media (min-width: 70em)": {
          flex: "1",
          margin: 0,
          padding: "60px 1rem"
        }
      }
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const victoryDocs = marked(victoryREADME);
    const styles = this.getStyles();
    return (
      <div style={styles.container}>
        <Sidebar />
        <main style={styles.main} dangerouslySetInnerHTML={{__html: victoryDocs}} >
        </main>
      </div>
    );
  }
}

export default Radium(Docs);

import React from "react";
import Radium from "radium";

// Settings
import { VictorySettings } from "formidable-landers";
import HeroDemo from "./hero-demo";

class Hero extends React.Component {
  getStyles() {
    return {
      cover: {
        margin: 0,
        padding: `${VictorySettings.gutter}px 0 0`
      },
      headingMajor: {
        color: "#000",
        marginTop: `${VictorySettings.gutter}px`,
        padding: "0 20px",
        fontFamily: VictorySettings.serif,
        fontSize: "1.5em",
        lineHeight: "1.3",
        textAlign: "center"
      },
      italic: {
        fontStyle: "italic"
      },
      center: {
        textAlign: "center"
      },
      installer: {
        margin: `${VictorySettings.gutter}px auto ${VictorySettings.gutter * 2}px`,
        display: "block",
        textAlign: "center"
      },
      code: {
        display: "inline-block",
        padding: "1.25em 1.75em",
        backgroundColor: VictorySettings.darkMud,
        boxShadow: `0 0 0 10px #efe9e3, 0 0 0 11px ${VictorySettings.mud}`,
        color: VictorySettings.whiteSand,
        fontFamily: VictorySettings.monospace,
        fontSize: "18px",
        lineHeight: 1.2
      },
      link: {
        borderStyle: "solid",
        borderWidth: "39px 41px",
        borderImageSource: `url("./static/btn-border.svg")`,
        borderImageSlice: "39 41",
        borderImageRepeat: "repeat stretch",
        color: VictorySettings.red,
        display: "inline-block",
        fontFamily: VictorySettings.sansSerif,
        fontSize: "0.75em",
        fontWeight: "normal",
        letterSpacing: "0.2em",
        lineHeight: 1,
        textTransform: "uppercase",
        padding: "30px 24px",
        width: "100%",
        transition: "color 300ms ease-out",
        ":hover": {
          color: VictorySettings.mud,
          transition: "color 300ms ease"
        }
      },
      simpleLink: {
        color: VictorySettings.red
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.cover}>
        <h1 style={styles.headingMajor}>
           React.js components <span style={styles.italic}>for</span>
           <br/>
          modular charting <span style={styles.italic}>and</span> data visualization
        </h1>
        <HeroDemo />
        <div style={styles.installer}>
          <code style={styles.code}>npm install victory</code>
        </div>
        <div style={styles.center}>
          Want a ready-made chart? Use <a href="/composed" style={styles.simpleLink}>Victory Composed</a> instead.
        </div>
      </div>
    );
  }
}

export default Radium(Hero);

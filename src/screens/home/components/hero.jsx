import React from "react";
import Radium from "radium";

import { VictorySettings } from "formidable-landers";
import logotype from "../../../../static/logotype-hero.svg";

class Hero extends React.Component {
  getStyles() {
    return {
      cover: {
        backgroundImage: `linear-gradient(180deg, transparent 80%, #f6f2ee 100%), url(./static/bg-hero.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0",
        padding: "80px 20px 60px 20px",
        margin: "40px",
        boxShadow: `0 0 0 1px ${VictorySettings.navy}, 0 0 0 20px #f6f2ee, 0 0 0 23px ${VictorySettings.navy}`
      },
      title: {
        margin: "0 auto 480px",
        height: "100px",
        maxWidth: "758px",
        textAlign: "center",
        fontSize: "72px"
      },
      headingMajor: {
        fontFamily: "Didot, serif",
        fontSize: "48px",
        lineHeight: "1.3",
        textAlign: "center"
      },
      headingMinor: {
        fontFamily: "Georgia, serif",
        fontSize: "24px",
        lineHeight: "1.5",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        textAlign: "center"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.cover}>
        <h1 dangerouslySetInnerHTML={{__html: logotype}} style={styles.title} />
        <p style={styles.headingMinor}>containing</p>
        <p style={styles.headingMajor}>An ecosystem of modular data visualization components</p>
        <p style={styles.headingMinor}>for</p>
        <p style={styles.headingMajor}>React.js Developers</p>
      </div>
    );
  }
}

export default Radium(Hero);

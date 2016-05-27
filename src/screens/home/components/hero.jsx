import React from "react";
import Radium from "radium";
import Hyperlink from "../../../components/navlink";
import Icon from "../../../components/icon";

// Settings
import { VictorySettings } from "formidable-landers";
import logotype from "../../../../static/logotype-hero.svg";
import GITHUBLOGO from "../../../../static/logo-github.svg";
import GITTERLOGO from "../../../../static/logo-gitter.svg";

class Hero extends React.Component {
  getStyles() {
    // Safari misinterprets "transparent" in gradients, e.g. http://codepen.io/cvn/pen/ozewK
    // And this hack will default to the bg color at least
    const transparentBg = "rgba(225, 215, 205, 0)";
    return {
      cover: {
        backgroundImage: `radial-gradient(ellipse farthest-corner at 50% 40%, ${transparentBg}, ${VictorySettings.palerSand}), url(./static/bg-hero@2x.png), url(./static/bg-pattern.png)`,
        backgroundRepeat: "repeat, no-repeat, repeat",
        backgroundPosition: "center center, 50% 0, center center",
        backgroundSize: "auto auto, 1280px auto, auto auto",
        padding: "80px 20px 60px 20px",
        margin: "40px",
        boxShadow: `0 0 0 1px ${VictorySettings.mud}, 0 0 0 20px ${VictorySettings.palerSand}, 0 0 0 23px ${VictorySettings.mud}`
      },
      title: {
        margin: "0 auto 480px",
        height: "100px",
        maxWidth: "758px",
        textAlign: "center",
        fontSize: "72px",
        borderBottom: "none"
      },
      headingMajor: {
        marginTop: `${VictorySettings.gutter * 1.5}px`,
        fontFamily: VictorySettings.serifHeadline,
        fontSize: "2em",
        lineHeight: "1.3",
        textAlign: "center"
      },
      headingMinor: {
        marginTop: `${VictorySettings.gutter * 1.5}px`,
        fontFamily: VictorySettings.serif,
        fontSize: "1em",
        lineHeight: "1.5",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        textAlign: "center"
      },
      installer: {
        margin: `${VictorySettings.gutter * 3}px auto 0`,
        display: "block",
        textAlign: "center"
      },
      code: {
        display: "inline-block",
        padding: "1.25em 1.75em",
        backgroundColor: VictorySettings.darkMud,
        boxShadow: `0 0 0 10px ${VictorySettings.palerSand}, 0 0 0 11px ${VictorySettings.mud}`,
        color: VictorySettings.palerSand,
        fontFamily: VictorySettings.monospace,
        fontSize: "18px",
        lineHeight: 1.2
      },
      list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        listStyleType: "none",
        margin: `${VictorySettings.gutter * 3}px 0 0`,
        padding: 0
      },
      listItem: {
        margin: `0 ${VictorySettings.gutter}px`
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
        <p style={styles.headingMajor}>React.js developers</p>
        <div style={styles.installer}>
          <code style={styles.code}>npm install victory</code>
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <a href="https://github.com/FormidableLabs/victory">
              <span dangerouslySetInnerHTML={{ __html: GITHUBLOGO }} />
            </a>
          </li>
          <li style={styles.listItem}>
            <a href="https://gitter.im/FormidableLabs/victory">
              <span dangerouslySetInnerHTML={{ __html: GITTERLOGO }} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radium(Hero);

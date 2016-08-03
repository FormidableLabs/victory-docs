import React from "react";
import Radium from "radium";

// Settings
import { VictorySettings } from "formidable-landers";
import Demo from "./demo";
import logotype from "../../../../static/logotype-hero.svg";
import GITHUBLOGO from "../../../../static/logo-github.svg";
import GITTERLOGO from "../../../../static/logo-gitter.svg";

class Hero extends React.Component {
  // boxShadow: `0 0 0 1px ${VictorySettings.mud}, 0 0 0 20px ${VictorySettings.palerSand}, 0 0 0 23px ${VictorySettings.mud}`
  getStyles() {
    return {
      cover: {
        margin: 0,
        padding: `${VictorySettings.gutter * 4}px 0 ${VictorySettings.gutter * 3}px`
      },
      title: {
        margin: "0 auto",
        height: "100px",
        maxWidth: "658px",
        textAlign: "center",
        fontSize: "72px",
        borderBottom: "none"
      },
      headingMajor: {
        marginTop: `${VictorySettings.gutter * 1.5}px`,
        padding: "0 20px",
        fontFamily: VictorySettings.serifHeadline,
        fontSize: "1.75em",
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
        margin: `${VictorySettings.gutter}px auto 0`,
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
        maxHeight: "50px",
        padding: 0
      },
      listItem: {
        margin: `0 ${VictorySettings.gutter}px`
      },
      linkIcon: {
        display: "inline-block",
        marginRight: "4px",
        width: "22px",
        verticalAlign: "middle"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.cover}>
        <h1 dangerouslySetInnerHTML={{__html: logotype}} style={styles.title} />
        <p style={styles.headingMajor}>An ecosystem of modular data visualization components</p>
        <Demo src={require("!!raw!./examples/friendly.md")} />
        <div style={styles.installer}>
          <code style={styles.code}>npm install victory</code>
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <a href="https://github.com/FormidableLabs/victory" key="heroLinkIconGithub">
              <span style={styles.linkIcon} dangerouslySetInnerHTML={{ __html: GITHUBLOGO }} /> View Source Code
            </a>
          </li>
          <li style={styles.listItem}>
            <a href="https://gitter.im/FormidableLabs/victory" key="heroLinkIconGitter">
              <span style={styles.linkIcon} dangerouslySetInnerHTML={{ __html: GITTERLOGO }} /> Chat about Victory
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radium(Hero);

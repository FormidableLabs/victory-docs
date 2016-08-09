import React from "react";
import Radium from "radium";
import { Link } from "react-router";
const RadiumLink = Radium(Link);

// Settings
import { VictorySettings } from "formidable-landers";
import Demo from "./demo";
import logotype from "../../../../static/logotype-hero.svg";
import Icon from "../../../components/icon";

class Hero extends React.Component {
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
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        listStyleType: "none",
        margin: `${VictorySettings.gutter * 2}px auto 0`,
        maxWidth: "720px",
        padding: 0
      },
      listItem: {
        padding: `${VictorySettings.gutter}px`
      },
      icon: {
        display: "inline-block",
        marginRight: "0.5em",
        width: "30px",
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
        <Demo src={require("!!raw!./examples/hero.md")} />
        <div style={styles.installer}>
          <code style={styles.code}>npm install victory</code>
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <a href="https://github.com/FormidableLabs/victory" key="heroLinkIconGithub">
              Source Code <Icon glyph="external-link" />
            </a>
          </li>
          <li style={styles.listItem}>
            <a href="https://gitter.im/FormidableLabs/victory" key="heroLinkIconGitter">
              Chat <Icon glyph="external-link" />
            </a>
          </li>
          <li style={styles.listItem}>
            <RadiumLink to="/docs">
              Get Started <Icon glyph="internal-link" />
            </RadiumLink>
          </li>
          <li style={styles.listItem}>
            <RadiumLink to="/recipes">
              Recipes <Icon glyph="internal-link" />
            </RadiumLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radium(Hero);

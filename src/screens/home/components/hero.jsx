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
        padding: `${VictorySettings.gutter * 4}px 0 0`
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
      list: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        listStyleType: "none",
        margin: `${VictorySettings.gutter}px auto 0`,
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
      },
      linkGettingStarted: {
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
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.cover}>
        <h1 dangerouslySetInnerHTML={{__html: logotype}} style={styles.title} />
        <p style={styles.headingMajor}>
          An ecosystem <span style={styles.italic}>of</span> modular
          <br/> data visualization components
          <br/> <span style={styles.italic}>for</span> React.js developers
        </p>
        <Demo src={require("!!raw!./examples/hero.md")} />
        <div style={styles.installer}>
          <code style={styles.code}>npm install victory</code>
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <a href="https://github.com/FormidableLabs/victory" key="heroLinkIconGithub">
              Source Code on GitHub <Icon glyph="external-link" />
            </a>
          </li>
          <li style={styles.listItem}>
            <a href="https://gitter.im/FormidableLabs/victory" key="heroLinkIconGitter">
              Chat on Gitter <Icon glyph="external-link" />
            </a>
          </li>
        </ul>
        <div
          style={{
            display: "block",
            fontFamily: VictorySettings.sansSerif,
            marginTop: `${VictorySettings.gutter}px`,
            marginRight: "3vw",
            marginLeft: "3vw",
            textAlign: "center"
          }}
        >
          <RadiumLink style={styles.linkGettingStarted} to="/docs">
            Getting Started Guide <Icon glyph="internal-link" />
          </RadiumLink>
        </div>
      </div>
    );
  }
}

export default Radium(Hero);

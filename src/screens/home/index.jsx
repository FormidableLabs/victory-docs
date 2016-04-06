import React from "react";
import Radium from "radium";

import { Link } from "react-router";
const RadiumLink = Radium(Link);

// Settings
import { VictorySettings } from "formidable-landers";

// Child Components
import Hero from "./components/hero";
import Demo from "./components/demo";
import Icon from "../../components/icon";

class Home extends React.Component {
  getStyles() {
    return {
      section: {
        display: "block",
        paddingBottom: `${VictorySettings.gutter * 3}px`
      },
      padded: {
        padding: `${VictorySettings.gutter * 1.5}px ${VictorySettings.gutter}px`,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          padding: `${VictorySettings.gutter * 3}px ${VictorySettings.gutter * 2}px`
        }
      },
      noMarginTop: {
        marginTop: 0
      },
      code: {
        background: VictorySettings.palestSand,
        borderRadius: 3,
        color: VictorySettings.mud,
        fontFamily: VictorySettings.monospace,
        padding: "0 0.25em"
      },
      copy: {
        maxWidth: "760px",
        marginLeft: "auto",
        marginRight: "auto"
      },
      boldSmallCaps: {
        fontWeight: "bold",
        paddingRight: 0
      },
      buttonLink: {
        borderStyle: "solid",
        borderWidth: "39px 41px",
        borderImageSource: `url("./static/btn-border.svg")`,
        borderImageSlice: "39 41",
        borderImageRepeat: "repeat stretch",
        color: VictorySettings.red,
        display: "inline-block",
        fontFamily: VictorySettings.serif,
        fontSize: "0.75em",
        fontWeight: "normal",
        letterSpacing: "0.2em",
        lineHeight: 1,
        textTransform: "uppercase",
        padding: "30px 24px",
        width: "100%",
        transition: "color 2s ease-out",
        ":hover": {
          color: VictorySettings.mud,
          transition: "color 200ms ease"
        }
      }
    };
  }


  render() {
    const styles = this.getStyles();
    return (
      <section style={styles.section}>
        <Hero />
        <Demo style={styles.padded} />
        <div style={styles.padded} className="Home">
          <h2>Benefits</h2>

          <h3>Friendly</h3>
          <p style={styles.copy}>
            <span className="Smallcaps">1.</span>
            The modular, componentized nature of React has allowed us to write fully-contained, reusable data visualization elements that are responsible for their own styles and behaviors.
          </p>

          <h3>Flexible</h3>
          <p style={styles.copy}>
            <span className="Smallcaps">2.</span>
            The use of sensible default props makes getting started very easy, without sacrificing flexibility. <em>Victory</em> also leverages React lifecycle methods and <code style={styles.code}>DOM</code> diffing to create a lightweight animation wrapper.
          </p>

          <h3>Composable</h3>
          <p style={styles.copy}>
            <span className="Smallcaps">3.</span>
            When combined, these features result in a set of components that are easy to use, and compose into more complicated visualizations.
          </p>
        </div>

        <div style={styles.padded}>
          <div style={{display: "block", marginTop: `${VictorySettings.gutter}px`, textAlign: "center" }}>
            <RadiumLink style={styles.buttonLink} to="docs">
              Getting Started Guide <Icon glyph="internal-link" />
            </RadiumLink>
          </div>
        </div>

        <div style={styles.padded}>
          <h2 style={styles.noMarginTop}>Quick Links</h2>
          <p style={styles.copy}>
            View the source code on <a href="https://github.com/FormidableLabs/victory">
              <span className="Smallcaps" style={styles.boldSmallCaps}>Github:&thinsp;</span>
              FormidableLabs/victory.
            </a>
          </p>
          <p style={styles.copy}>
            Questions? Let’s chat on <a href="https://gitter.im/FormidableLabs/victory">
              <span className="Smallcaps" style={styles.boldSmallCaps}>Gitter:&thinsp;</span>
              FormidableLabs/victory.
            </a>
          </p>
          <p style={styles.copy}>
            We have a lot planned! Take a look at the <a href="https://github.com/FormidableLabs/victory/blob/master/ROADMAP.md">
              Roadmap.
            </a>
          </p>
          <h3>Victory Component Documentation</h3>
          <ol style={styles.copy}>
            <li>VictoryLabel. <Icon glyph="internal-link" /></li>
            <li>VictoryLine. <Icon glyph="internal-link" /></li>
            <li>VictoryPie. <Icon glyph="internal-link" /></li>
            <li>VictoryScatter. <Icon glyph="internal-link" /></li>
          </ol>
        </div>
      </section>
    );
  }
}

export default Radium(Home);

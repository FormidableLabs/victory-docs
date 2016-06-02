import React from "react";
import Radium from "radium";

import { Link } from "react-router";
const RadiumLink = Radium(Link);

// Settings
import { VictorySettings } from "formidable-landers";
import { components } from "../../components/config";

// Child Components
import Hero from "./components/hero";
import Demo from "./components/demo";
import DemoFlexible from "./components/flexible";
import Companies from "./components/companies";
import Icon from "../../components/icon";
import NavLink from "../../components/navlink";
import Footer from "../../components/footer";

class Home extends React.Component {
  getStyles() {
    return {
      section: {
        display: "block",
        paddingBottom: `${VictorySettings.gutter * 3}px`
      },
      padded: {
        padding: `${VictorySettings.gutter * 1.5}px ${VictorySettings.gutter * 1.5}px`,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          padding: `${VictorySettings.gutter * 3}px ${VictorySettings.gutter * 2}px`
        }
      },
      noMarginTop: {
        marginTop: 0
      },
      marginTop: {
        marginTop: `${VictorySettings.gutter}px`
      },
      code: {
        background: VictorySettings.palestSand,
        borderRadius: 3,
        color: VictorySettings.mud,
        fontFamily: VictorySettings.monospace,
        padding: "0 0.25em"
      },
      copy: {
        maxWidth: "840px",
        marginLeft: "auto",
        marginRight: "auto"
      },
      columns: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          justifyContent: "center"
        }
      },
      list: {
        listStyleType: "none",
        marginRight: `${VictorySettings.gutter * 2.5}px`,
        padding: 0,
        minWidth: "200px",

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          minWidth: "initial",
          width: "auto"
        }
      },
      listItem: {
        color: VictorySettings.darkestSand,
        lineHeight: 1.5,
        marginTop: `${VictorySettings.gutter * 0.5}px`,
        position: "relative"
      },
      nestedList: {
        listStyleType: "none",
        margin: `0 0 ${VictorySettings.gutter * 0.5}px 7px`,
        padding: `0 0 0 ${VictorySettings.gutter}px`,
        boxShadow: `inset 0 -15px 0 ${VictorySettings.palerSand},
           inset 1px 0 0 ${VictorySettings.darkSand}`,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          boxShadow: `inset 0 -19px 0 ${VictorySettings.palerSand},
             inset 1px 0 0 ${VictorySettings.darkSand}`
        }
      },
      bullet: {
        content: " ",
        position: "absolute",
        top: 0,
        right: "100%",
        left: `${VictorySettings.gutter * -1}px`,
        marginTop: "8%",
        width: 12,
        height: 3,
        borderTop: `1px solid ${VictorySettings.darkSand}`
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
      },
      demoComponent: {
        backgroundColor: VictorySettings.whiteSand,
        display: "block",
        margin: `${VictorySettings.gutter}px auto 0`,
        padding: `${VictorySettings.gutter}px ${VictorySettings.gutter}px ${VictorySettings.gutter * 1.5}px`,
        maxWidth: "600px",
        width: "100%"
      }
    };
  }


  renderComponents(items, category, isNested) {
    const styles = this.getStyles();

    if (isNested) {
      return items.map((item) => {
        if (item.slug === "victory-chart") {
          return null;
        }
        if (item.category === category) {
          return (
            <li key={item.slug} style={styles.listItem}>
              <b style={styles.bullet} />
              <NavLink to={`docs/${item.slug}`}>
                {item.text}. <Icon glyph="internal-link" />
              </NavLink>
            </li>
          );
        }
      });
    }
    return items.map((item) => {
      if (item.category === category) {
        return (
          <li key={item.slug} style={styles.listItem}>
            <NavLink to={`docs/${item.slug}`}>
              {item.text}. <Icon glyph="internal-link" />
            </NavLink>
          </li>
        );
      }
    });
  }

  render() {
    const styles = this.getStyles();
    return (
      <section style={styles.section} className="playgroundsMaxHeight">
        <Hero />
        <div style={styles.padded} className="Home">
          <h2 style={styles.copy}>Why Victory?</h2>

          <h3 style={styles.copy}>Friendly</h3>
          <p style={styles.copy}>
            The modular, componentized nature of React has allowed us to write fully-contained, reusable data visualization elements that are responsible for their own styles and behaviors.
          </p>
        </div>

        <Demo src={require("!!raw!./components/examples/friendly.md")} />

        <div style={styles.padded} className="Home">
          <h3 style={styles.copy}>Flexible</h3>
          <p style={styles.copy}>
            The use of sensible default props makes getting started very easy, without sacrificing flexibility. Victory also leverages React lifecycle methods and <code style={styles.code}>DOM</code> diffing to create a lightweight animation wrapper.
          </p>
        </div>

        <div className="Interactive" style={{backgroundColor: "transparent"}}>
          <div className="playground">
            <div className="fancyBorder" style={styles.demoComponent}>
              <DemoFlexible />
            </div>
          </div>
          <p style={{textAlign: "center"}}>
            <a href="https://github.com/FormidableLabs/victory-examples">
              <span className="Smallcaps" style={styles.boldSmallCaps}>View the source.</span> <Icon glyph="external-link" />
            </a>
          </p>
        </div>

        <div style={styles.padded} className="Home">
          <h3 style={styles.copy}>Composable</h3>
          <p style={styles.copy}>
            When combined, these features result in a set of components that are easy to use, and compose into more complicated visualizations.
          </p>
        </div>

        <Demo src={require("!!raw!./components/examples/composable.md")} />

        <div style={styles.padded} className="Home">
          <h3 style={styles.copy}>Native</h3>
          <p style={styles.copy}>
            Extend the Victory experience on Android and iOS platforms with an identical API.
          </p>
        </div>

        <div style={styles.padded}>
          <div style={[styles.copy, {display: "block", marginTop: `${VictorySettings.gutter}px`, textAlign: "center" }]}>
            <RadiumLink style={styles.buttonLink} to="docs">
              Getting Started Guide <Icon glyph="internal-link" />
            </RadiumLink>
          </div>
        </div>

        <div style={styles.padded}>
          <h2 style={[styles.noMarginTop, styles.copy]}>Documentation</h2>
          <div style={styles.columns}>
            <ul style={styles.list}>
              <li className="Smallcaps" style={styles.marginTop}>Core</li>
              {this.renderComponents(components, "core")}
              <li style={styles.listItem}>
                VictoryConstraints. <abbr title="Coming soon"><Icon glyph="coming-soon" /></abbr>
              </li>
              <li style={styles.listItem}>
                VictoryTooltip. <abbr title="Coming soon"><Icon glyph="coming-soon" /></abbr>
              </li>
            </ul>
            <ul style={styles.list}>
              <li className="Smallcaps" style={styles.marginTop}>Chart</li>
              <li key="victory-chart2" style={styles.listItem}>
                <NavLink to="docs/victory-chart">
                  VictoryChart. <Icon glyph="internal-link" />
                </NavLink>
              </li>
              <ul style={styles.nestedList}>
                {this.renderComponents(components, "chart", true)}
              </ul>
            </ul>
            <ul style={styles.list}>
              <li className="Smallcaps" style={styles.marginTop}>More</li>
              {this.renderComponents(components, "more")}
            </ul>
          </div>
        </div>

        <div style={[styles.padded, styles.copy]}>
          <h2>Learn more</h2>
          <h3>Source Code</h3>
          <p>
            View the source at <a href="https://github.com/FormidableLabs/victory">
              <span className="Smallcaps" style={styles.boldSmallCaps}>GitHub:</span>
              FormidableLabs/victory.&nbsp;<Icon glyph="external-link" />
            </a>
          </p>
          <h3>Support</h3>
          <p>
            Questions? Let’s chat at <a href="https://gitter.im/FormidableLabs/victory">
              <span className="Smallcaps" style={styles.boldSmallCaps}>Gitter:</span>
              FormidableLabs/victory.&nbsp;<Icon glyph="external-link" />
          </a>
          </p>
          <h3>Upcoming Releases</h3>
          <p>
            We have a lot planned! Want to make a request for a new feature? See our <a href="https://github.com/FormidableLabs/victory/blob/master/ROADMAP.md">
              Roadmap.&nbsp;<Icon glyph="external-link" />
          </a>
          </p>
        </div>

        <Companies style={[styles.padded, styles.copy]} />
        <Footer />
      </section>
    );
  }
}

export default Radium(Home);

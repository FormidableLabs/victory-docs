import React from "react";
import Radium from "radium";
import { Link } from "react-router";
const RadiumLink = Radium(Link);

// Common
import { VictorySettings } from "formidable-landers";
import Header from "../../components/header";
import Icon from "../../components/icon";
import TitleMeta from "../../components/title-meta";
import { Footer } from "formidable-landers";

// Child Components
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import Companies from "./components/companies";

class Home extends React.Component {
  getStyles() {
    return {
      section: {
        background: `linear-gradient(180deg, #efe9e3, ${VictorySettings.palerSand} 75%)`,
        display: "block",
        paddingBottom: `${VictorySettings.gutter * 3}px`
      },
      copy: {
        maxWidth: "38em",
        marginLeft: "3vw"
      },
      companies: {
        backgroundColor: VictorySettings.palerSand,
        margin: `${VictorySettings.gutter}px 0 0`,
        padding: `${VictorySettings.gutter}px 0`,
        textAlign: "center"
      },
      columns: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: "3vw"
      },
      headingCategory: {
        color: VictorySettings.paleMud,
        fontFamily: VictorySettings.sansSerif,
        fontSize: "0.8em",
        letterSpacing: "0.15em",
        marginBottom: `${VictorySettings.gutter * 0.5}px`,
        textTransform: "uppercase"
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
        lineHeight: 1.4,
        margin: `0 0 0 ${VictorySettings.gutter * 0.5}px`,
        position: "relative"
      },
      nestedList: {
        listStyleType: "none",
        margin: `0 0 ${VictorySettings.gutter * 0.5}px 17px`,
        padding: `0 0 0 ${VictorySettings.gutter * 0.5}px`,
        boxShadow: `inset 0 -15px 0 ${VictorySettings.palerSand},
           inset 1px 0 0 ${VictorySettings.darkSand}`,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          boxShadow: `inset 0 -16px 0 ${VictorySettings.palerSand},
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
      smallCaps: {
        fontFamily: VictorySettings.sansSerif,
        fontSize: "0.75em",
        fontWeight: "normal",
        letterSpacing: "0.2em",
        lineHeight: 1,
        textTransform: "uppercase"
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
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const trademark = <div className="default">Victory is a trademark of Formidable Labs, Inc.</div>;

    return (
      <TitleMeta title="Victory">
        <section style={styles.section} className="playgroundsMaxHeight">
          <Header home />
          <Hero />
          <div style={styles.companies}>
            <Companies style={[ styles.copy, { margin: "0 auto" } ]} />
          </div>
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
            <RadiumLink style={styles.link} to="/docs">
              Get Started <Icon glyph="internal-link" />
            </RadiumLink>
          </div>
          <Benefits />
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
            <RadiumLink style={styles.link} to="/docs">
              Get Started <Icon glyph="internal-link" />
            </RadiumLink>
          </div>

          <h3 style={styles.copy}>Source Code</h3>
          <p style={styles.copy}>
            View the source at <a href="https://github.com/FormidableLabs/victory">
              <span style={styles.smallCaps}>GitHub:</span>
              FormidableLabs/victory&nbsp;<Icon glyph="external-link" />
            </a>.
          </p>
          <h3 style={styles.copy}>Support</h3>
          <p style={styles.copy}>
            Questions? Let’s chat at <a href="https://gitter.im/FormidableLabs/victory">
              <span style={styles.smallCaps}>Gitter:</span>
              FormidableLabs/victory&nbsp;<Icon glyph="external-link" />
            </a>.
          </p>
        </section>
        <Footer
          style={{
            margin: 0
          }}
          styleContainer={{
            margin: "0 3vw"
          }}
          trademark={trademark}
        />
      </TitleMeta>
    );
  }
}

export default Radium(Home);

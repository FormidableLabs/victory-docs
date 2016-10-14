import React from "react";
import Radium from "radium";
import { Link } from "react-router";
const RadiumLink = Radium(Link);

// Common
import { VictorySettings } from "formidable-landers";
import Icon from "../../../components/icon";

// Child Components
import DemoFlexible from "./demo-flexible";
import DemoSharedEvents from "./demo-shared-events";
import DemoLiveChart from "./demo-live-chart";

class Benefits extends React.Component {
  getStyles() {
    return {
      section: {
        background: `linear-gradient(180deg, #efe9e3, ${VictorySettings.palerSand} 75%)`,
        display: "block",
        paddingBottom: `${VictorySettings.gutter * 3}px`
      },
      padded: {
        padding: `${VictorySettings.gutter}px ${VictorySettings.gutter}px 0`
      },
      code: {
        background: VictorySettings.whiteSand,
        borderRadius: 3,
        color: VictorySettings.mud,
        fontFamily: VictorySettings.monospace,
        fontSize: "0.85em",
        padding: "0.33em 0.333em 0.28em"
      },
      copy: {
        maxWidth: "38em",
        marginLeft: "3vw"
      },
      flex: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      },
      flexItem: {
        flex: "1 0 auto",
        margin: `${VictorySettings.gutter * 2}px 1vw 0`,
        minWidth: "360px",
        textAlign: "center"
      },
      flexTextItem: {
        flex: "1 0 30%",
        margin: `${VictorySettings.gutter * 2}px 1vw 0`,
        minWidth: "360px",
        textAlign: "center"
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
    return (
      <div style={{ padding: `${VictorySettings.gutter}px 0` }}>

        <div style={styles.flex}>
          <div style={styles.flexTextItem}>
            <h3>
              Robust
            </h3>
            <p>
              Area charts. Scatter plots. Voronoi polygons. Easy-to-use components for complex charting.
            </p>
          </div>
          <div style={styles.flexTextItem}>
            <h3>
              Flexible
            </h3>
            <p>
              Fully-contained, reusable data visualization elements are responsible for their own styles and behaviors.
            </p>
          </div>
          <div style={styles.flexTextItem}>
            <h3>
              Native
            </h3>
            <p>
              Extend the Victory experience on Android and iOS platforms with an identical&nbsp;API. <br/>
              npm install victory-native
            </p>
          </div>
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

        <div style={styles.flex}>
          <div style={styles.flexItem}>
            <DemoFlexible />
            <p>
              <a
                href="./recipes/custom-styles"
              >
                <span style={styles.smallCaps}>View Recipe</span>&nbsp;<Icon glyph="internal-link" />
              </a>
            </p>
          </div>
          <div style={styles.flexItem}>
            <DemoSharedEvents/>
            <p>
              <a
                href="https://github.com/FormidableLabs/victory-docs/blob/master/src/screens/home/components/demo-shared-events.js"
              >
                <span style={styles.smallCaps}>View source</span>&nbsp;<Icon glyph="external-link" />
              </a>
            </p>
          </div>
          <div style={styles.flexItem}>
            <DemoLiveChart/>
            <p>
              <a
                href="https://github.com/FormidableLabs/victory-docs/blob/master/src/screens/home/components/livechart.js"
              >
                <span style={styles.smallCaps}>View source</span>&nbsp;<Icon glyph="external-link" />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Benefits.propTypes = {
  style: React.PropTypes.object
};

Benefits.defaultProps = {
  style: null
};

export default Radium(Benefits);

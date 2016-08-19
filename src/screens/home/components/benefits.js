import React from "react";
import Radium from "radium";

// Common
import { VictorySettings } from "formidable-landers";
import Icon from "../../../components/icon";

// Child Components
import Demo from "./demo";
import DemoFlexible from "./demo-flexible";
import DemoNative from "./demo-native";
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
        borderRadius: "3px",
        color: VictorySettings.darkMud,
        fontFamily: VictorySettings.monospace,
        padding: "0 0.25em"
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
      smallCaps: {
        fontFamily: VictorySettings.sansSerif,
        fontSize: "0.75em",
        fontWeight: "normal",
        letterSpacing: "0.2em",
        lineHeight: 1,
        textTransform: "uppercase"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={{ padding: `${VictorySettings.gutter}px 0` }}>
        <h2 style={styles.copy}>
          Why Victory?
        </h2>
        {/* Flexible */}
        <h3 style={styles.copy}>
          Robust and Flexible Charting
        </h3>
        <p style={styles.copy}>
          The use of sensible default props makes getting started very easy, without sacrificing flexibility. Victory also leverages React lifecycle methods and <code style={styles.code}>DOM</code> diffing to create a lightweight animation wrapper.
        </p>

        <div style={styles.flex}>
          <div style={styles.flexItem}>
            <DemoFlexible />
            <p>
              <a
                href="https://github.com/FormidableLabs/victory-examples/blob/master/src/components/custom-styles.js"
              >
                <span style={styles.smallCaps}>View source</span>&nbsp;<Icon glyph="external-link" />
              </a>
            </p>
          </div>
          <div style={styles.flexItem}>
            <DemoSharedEvents/>
            <p>
              <a
                href="https://github.com/FormidableLabs/victory-examples/blob/master/src/components/shared-events.js"
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

        {/* Friendly */}
        <h3 style={styles.copy}>
          Sensible Defaults
        </h3>
        <p style={styles.copy}>
          The modular, componentized nature of React has allowed us to write fully-contained, reusable data visualization elements that are responsible for their own styles and behaviors. Sensible default props make getting started easy!
        </p>

        <Demo src={require("!!raw!./examples/friendly.md")} />

        {/* Composable */}
        <h3 style={styles.copy}>
          Composable
        </h3>
        <p style={styles.copy}>
          When combined, these features result in a set of components that are easy to use, and compose into more complicated visualizations.
        </p>

        <Demo src={require("!!raw!./examples/composable.md")} />

        {/* Native */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start"
          }}
        >
          <div
            style={{
              flex: "1 1 300px"
            }}
          >
            <h3 style={styles.copy}>
              Native Support
            </h3>
            <p style={styles.copy}>
              Extend the Victory experience on Android and iOS platforms with an identical&nbsp;API.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flex: "1 0 600px",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "center"
            }}
          >
            <DemoNative />
            <DemoNative alt />
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

import React from "react";
import Radium from "radium";

// Common
import { VictorySettings } from "formidable-landers";

// Children
import Showcase from "./components/showcase";
import TitleMeta from "../../components/title-meta";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import Icon from "../../components/icon";

class About extends React.Component {
  getStyles() {
    return {
      copy: {
        maxWidth: "38em"
      },
      sidebar: {
        backgroundColor: "#D6CCC1",
        overflow: "auto",
        padding: `0 ${VictorySettings.gutter}px ${VictorySettings.gutter * 2}px`,
        zIndex: "1",

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          padding: `0 0 ${VictorySettings.gutter * 2}px ${VictorySettings.gutter}px`,
          width: "270px"
        }
      },
      content: {
        padding: `${VictorySettings.gutter}px ${VictorySettings.gutter}px`,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          marginLeft: "270px",
          padding: `${VictorySettings.gutter * 2}px`
        },
        [`@media ${VictorySettings.mediaQueries.large}`]: {
          padding: `${VictorySettings.gutter * 2}px ${VictorySettings.gutter * 3}px 0 ${VictorySettings.gutter * 3}px`
        }
      },
      foots: {
        margin: `${VictorySettings.gutter}px ${VictorySettings.gutter * 0.5}px`,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          margin: `${VictorySettings.gutter * 3}px ${VictorySettings.gutter}px ${VictorySettings.gutter}px 0`
        }
      }
    };
  }
  render() {
    const styles = this.getStyles();

    return (
      <TitleMeta title="Victory">
        <Sidebar active="about" style={styles.sidebar} />
        <div style={styles.content}>
          <h1 style={[styles.copy, {marginTop: 0}]}>
            About Victory
          </h1>
          <p style={styles.copy}>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px"></iframe>
          </p>

          <Showcase />

          <h2 style={styles.copy}>
            Victory’s Story
          </h2>
          <p style={styles.copy}>
            Victory is a sophisticated charting library powered by d3.js that aims to provide flexibility and customization
            beyond what is offered elsewhere. You can it in your browser or in React Native apps with the same convenient API.
          </p>
          <p style={styles.copy}>
            It is helmed and primarily maintained by Formidable’s Lauren Eastridge.
          </p>
          <p style={styles.copy}>
            <a href="https://github.com/FormidableLabs/victory/graphs/contributors">See Contributors to Victory <Icon glyph="external-link" /></a>
          </p>

          <h2 style={styles.copy}>
            About Formidable
          </h2>
          <p style={styles.copy}>
            Formidable is a Seattle-based consultancy and development shop, focused on open-source, full-stack JavaScript
            using React.js and Node.js, and the architecture of large-scale JavaScript applications. We build products for
            some of the world’s biggest companies, while helping their internal teams develop smart, thoughtful, and
            scalable systems.
          </p>

          <Footer style={styles.foots} />
        </div>
      </TitleMeta>
    );
  }
}

export default Radium(About);

import React from "react";
import Radium from "radium";

// Settings
import { VictorySettings } from "formidable-landers";

// Child components
import Markdown from "./components/markdown";
import Sidebar from "./components/sidebar";
import Footer from "../../components/footer";

class Docs extends React.Component {
  getStyles() {
    return {
      container: {
        display: "flex",
        flexDirection: "column",

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          flexDirection: "row"
        }
      },
      sidebar: {
        backgroundColor: VictorySettings.paleSand,
        overflow: "auto",
        padding: `0 ${VictorySettings.gutter}px ${VictorySettings.gutter * 2}px`,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "360px"
        }
      },
      content: {
        padding: `${VictorySettings.gutter}px ${VictorySettings.gutter * 0.5}px`,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          marginLeft: "360px",
          padding: `${VictorySettings.gutter * 2}px`
        },
        [`@media ${VictorySettings.mediaQueries.large}`]: {
          padding: `${VictorySettings.gutter * 2}px 0 0 ${VictorySettings.gutter * 2}px`
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
    const active = this.props.params.component ?
      this.props.params.component :
      "index";
    const styles = this.getStyles();
    return (
      <div>
        <Sidebar active={active} style={styles.sidebar} />
        <div style={styles.content}>
          <Markdown active={active} />
          <Footer style={styles.foots} />
        </div>
      </div>
    );
  }
}

Docs.propTypes = {
  params: React.PropTypes.object
};

Docs.defaultProps = {
  params: null
};


export default Radium(Docs);

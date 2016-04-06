import React from "react";
import Radium from "radium";

// Settings
import { VictorySettings } from "formidable-landers";

// Child components
import Markdown from "./components/markdown";
import Sidebar from "./components/sidebar";

class Docs extends React.Component {
  getStyles() {
    return {
      container: {
        display: "flex",
        flex: "1 0 auto",
        flexDirection: "column",
        margin: `${VictorySettings.gutter * 3}px auto`,
        padding: 0,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          "flexDirection": "row"
        }
      },
      sidebar: {
        margin: 0,
        padding: "0 1rem 0 0",

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          flex: "0 0 12em"
        }
      },
      markdown: {
        marginTop: `${VictorySettings.gutter * 2}px`
      }
    };
  }

  render() {
    const active = this.props.params.component ?
      this.props.params.component :
      "index";
    const styles = this.getStyles();
    return (
      <div style={styles.container}>
        <Sidebar active={active} style={styles.sidebar} />
        <Markdown active={active} style={styles.markdown} />
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

import React from "react";
import Radium from "radium";
import TitleMeta from "../../components/title-meta";

// Settings
import { VictorySettings } from "formidable-landers";

// Child components
import Markdown from "./components/markdown";
import Sidebar from "../../components/sidebar";
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
    const activePage = this.props.params.component ?
      this.props.params.component :
      "index";
    const styles = this.getStyles();
    return (
      <TitleMeta title="Victory | Documentation">
        <div>
          <Sidebar active={activePage} style={styles.sidebar} />
          <div style={styles.content}>
            <Markdown active={activePage} />
            <Footer style={styles.foots} />
          </div>
        </div>
      </TitleMeta>
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

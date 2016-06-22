import React from "react";
import Radium from "radium";

// Settings
import { VictorySettings } from "formidable-landers";

// Child components
import Recipe from "./components/recipe";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";

class Recipes extends React.Component {
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
    const activeRecipe = this.props.params.component ?
      this.props.params.component :
      "index";
    const styles = this.getStyles();
    return (
      <div>
        <Sidebar active={activeRecipe} style={styles.sidebar} />
        <div style={styles.content}>
          <Recipe active={activeRecipe} />
          <Footer style={styles.foots} />
        </div>
      </div>
    );
  }
}

Recipes.propTypes = {
  params: React.PropTypes.object
};

Recipes.defaultProps = {
  params: null
};


export default Radium(Recipes);

import React from "react";
import Radium from "radium";
import { Link } from "react-router";

const RadiumLink = Radium(Link);

// Settings
import { VictorySettings } from "formidable-landers";

class NavLink extends React.Component {
  getStyles() {
    return {
      base: {
        boxShadow: "none",
        color: VictorySettings.darkSand,
        fontWeight: "normal",
        ":hover": {
          color: VictorySettings.red
        }
      },
      active: {
        boxShadow: "none",
        color: VictorySettings.red,
        fontWeight: "bold",
        ":hover": {
          color: VictorySettings.red
        }
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <RadiumLink {...this.props} style={styles.base} activeStyle={styles.active} />
    );
  }
}


export default Radium(NavLink);

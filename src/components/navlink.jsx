import React from "react";
import Radium from "radium";
import { Link } from "react-router";

const RadiumLink = Radium(Link);

// Settings
import { VictorySettings } from "formidable-landers";

class NavLink extends React.Component {
  getStyles() {
    return {
      link: {
        color: VictorySettings.mud,
        ":hover": {
          color: VictorySettings.red
        }
      },
      active: {
        border: "none",
        boxShadow: "none",
        fontWeight: "bold",
        color: VictorySettings.red,
        ":hover": {
          border: "none",
          color: VictorySettings.red
        }
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <RadiumLink {...this.props} style={styles.link} activeStyle={styles.active} />
    );
  }
}


export default Radium(NavLink);

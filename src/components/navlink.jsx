import React from "react";
import Radium from "radium";
import { Link } from "react-router";

const RadiumLink = Radium(Link);

// Settings
import { VictorySettings } from "formidable-landers";

class NavLink extends React.Component {
  getStyles() {
    return {
      active: {
        border: "none",
        boxShadow: "none",
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
      <RadiumLink {...this.props} activeStyle={styles.active} />
    );
  }
}


export default Radium(NavLink);

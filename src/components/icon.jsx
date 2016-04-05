import React from "react";
import Radium from "radium";

// Settings
import { VictorySettings } from "formidable-landers";

// Icons
import IconInternalLink from "../../static/icon-internal.svg";

class NavLink extends React.Component {
  getStyles() {
    return {
      base: {
        margin: "0",
        padding: "0",
        display: "inline-block",
        verticalAlign: "middle"
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <span {...this.props} style={styles.base}
        dangerouslySetInnerHTML={{__html: IconInternalLink}}
      />
    );
  }
}


export default Radium(NavLink);

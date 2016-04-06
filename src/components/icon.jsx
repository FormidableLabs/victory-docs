import React from "react";
import Radium from "radium";

// Settings
// import { VictorySettings } from "formidable-landers";

// Icons
import IconInternalLink from "../../static/icon-internal.svg";
import IconExternalLink from "../../static/icon-external.svg";
// Problem: We cannot add this to the links generated in READMEs...

class Icon extends React.Component {
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
    switch (this.props.glyph) {
    case "external-link":
      return (
        <span
          {...this.props}
          style={styles.base}
          dangerouslySetInnerHTML={{__html: IconExternalLink}}
        />
      );
    case "internal-link":
      return (
        <span
          {...this.props}
          style={styles.base}
          dangerouslySetInnerHTML={{__html: IconInternalLink}}
        />
      );
    default:
      return (
        <span />
      );
    }
  }
}

Icon.propTypes = {
  glyph: React.PropTypes.oneOf(["external-link", "internal-link"])
};

Icon.defaultProps = {
  glyph: "link"
};

export default Radium(Icon);

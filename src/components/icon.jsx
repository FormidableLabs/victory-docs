import React from "react";
import Radium from "radium";

// Icons
import IconInternalLink from "../../static/icon-internal.svg";
import IconExternalLink from "../../static/icon-external.svg";
import IconBarrier from "../../static/icon-barrier.svg";
// Q: Can these icons get added to the links generated in READMEs?
// https://github.com/FormidableLabs/victory-docs/issues/7

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
    case "coming-soon":
      return (
        <span
          {...this.props}
          style={styles.base}
          dangerouslySetInnerHTML={{__html: IconBarrier}}
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
  glyph: React.PropTypes.oneOf(["coming-soon", "external-link", "internal-link"])
};

Icon.defaultProps = {
  glyph: "link"
};

export default Radium(Icon);

import React from "react";
import Radium from "radium";

// Icons
import IconInternalLink from "../../static/icon-internal.svg";
import IconExternalLink from "../../static/icon-external.svg";
import IconBack from "../../static/icon-back.svg";
import IconBarrier from "../../static/icon-barrier.svg";
// Q: Can these icons get added to the links generated in READMEs?
// https://github.com/FormidableLabs/victory-docs/issues/7

class Icon extends React.Component {
  getStyles() {
    return {
      base: {
        margin: 0,
        padding: 0,
        display: "inline-block",
        verticalAlign: "-3px"
      }
    };
  }
  render() {
    const styles = this.getStyles();
    const { glyph, ...otherProps } = this.props;
    switch (this.props.glyph) {
    case "back":
      return (
        <span
          {...otherProps}
          style={styles.base}
          dangerouslySetInnerHTML={{__html: IconBack}}
        />
      );
    case "coming-soon":
      return (
        <span
          {...otherProps}
          style={styles.base}
          dangerouslySetInnerHTML={{__html: IconBarrier}}
        />
      );
    case "external-link":
      return (
        <span
          {...otherProps}
          style={styles.base}
          dangerouslySetInnerHTML={{__html: IconExternalLink}}
        />
      );
    case "internal-link":
      return (
        <span
          {...otherProps}
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
  glyph: React.PropTypes.oneOf(["back", "coming-soon", "external-link", "internal-link"])
};

Icon.defaultProps = {
  glyph: "link"
};

export default Radium(Icon);

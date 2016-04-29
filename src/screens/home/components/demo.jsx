import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Ecology from "ecology";
import { VictoryChart, VictoryLine, VictoryPie } from "victory";

// Children
import Icon from "../../../components/icon";

// Settings
import { VictorySettings } from "formidable-landers";

class Demo extends React.Component {
  getStyles() {
    return {
      container: {
        marginTop: `${VictorySettings.gutter}px`,
        backgroundColor: VictorySettings.palestSand
      },
      headingMajor: {
        marginTop: `${VictorySettings.gutter}px`,
        color: VictorySettings.red
      },
      ecology: {
        marginLeft: `-${VictorySettings.gutter}px`,
        marginRight: `-${VictorySettings.gutter}px`,

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          marginLeft: `-${VictorySettings.gutter * 2}px`,
          marginRight: `-${VictorySettings.gutter * 2}px`
        }
      },
      copy: {
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={[this.props.style, styles.container]}>
        <h2 style={[styles.headingMajor, styles.copy]}>Try it</h2>
        <p style={styles.copy}>
          <span className="Smallcaps">Editor’s note.</span>
          All of the following code examples in Victory Documentation are powered by our very own <a href="https://github.com/FormidableLabs/component-playground">
            Component Playground <Icon glyph="external-link" />
          </a>; it renders editable source code and automatically updates the preview of the rendered component.
        </p>
        <div style={styles.ecology}>
          <Ecology
            overview={require("!!raw!../examples.md")}
            scope={{React, ReactDOM, VictoryChart, VictoryLine, VictoryPie}}
            playgroundtheme="elegant"
          />
        </div>
      </div>
    );
  }
}

Demo.propTypes = {
  style: React.PropTypes.object
};

Demo.defaultProps = {
  style: null
};

export default Radium(Demo);

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
        marginTop: `${VictorySettings.gutter}px`
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={[this.props.style, styles.container]}>
        <Ecology
          overview={require("!!raw!../examples.md")}
          scope={{React, ReactDOM, VictoryChart, VictoryLine, VictoryPie}}
          playgroundtheme="elegant"
        />
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

import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Ecology from "ecology";
import {
  VictoryStack, VictoryBar, VictoryChart, VictoryLine, VictoryPie, VictoryTheme, VictoryAxis
} from "victory";

class Demo extends React.Component {
  render() {
    return (
      <Ecology
        overview={this.props.src}
        scope={{
          React, ReactDOM, VictoryStack, VictoryTheme, VictoryBar, VictoryChart,
          VictoryLine, VictoryPie, VictoryAxis
        }}
        playgroundtheme="elegant"
      />
    );
  }
}

Demo.propTypes = {
  src: React.PropTypes.string
};

export default Radium(Demo);

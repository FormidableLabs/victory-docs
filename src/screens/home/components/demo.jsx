import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Ecology from "ecology";
import { VictoryGroup, VictoryBar, VictoryChart, VictoryLine, VictoryPie } from "victory";

class Demo extends React.Component {
  render() {
    return (
      <Ecology
        overview={this.props.src}
        scope={{React, ReactDOM, VictoryGroup, VictoryBar, VictoryChart, VictoryLine, VictoryPie}}
        playgroundtheme="elegant"
      />
    );
  }
}

Demo.propTypes = {
  src: React.PropTypes.string
};

export default Radium(Demo);

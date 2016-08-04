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
      <div style={this.props.style}>
        <Ecology
          overview={this.props.src}
          scope={{
            React, ReactDOM, VictoryStack, VictoryTheme, VictoryBar, VictoryChart,
            VictoryLine, VictoryPie, VictoryAxis
          }}
          playgroundtheme="elegant"
        />
      </div>
    );
  }
}

Demo.propTypes = {
  src: React.PropTypes.string,
  style: React.PropTypes.object
};

Demo.defaultProps = {
  style: null
};

export default Radium(Demo);

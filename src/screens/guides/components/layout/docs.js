import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryLine, VictoryAxis,
  VictoryBar, VictoryScatter, VictoryStack, VictoryPortal
} from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";

class LayoutGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{
          React, ReactDOM, VictoryPie, VictoryContainer, VictoryLabel, VictoryChart,
          VictoryLine, VictoryAxis, VictoryBar, VictoryScatter, VictoryStack, VictoryPortal
        }}
      />
    );
  }
}

LayoutGuide.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default LayoutGuide;

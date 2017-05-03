import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryAxis, VictoryChart, VictoryLine, VictoryScatter,
  VictoryBrushContainer, VictoryZoomContainer
} from "victory";
import { random, range } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";

class BrushAndZoomGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{
          random, range, React, ReactDOM, VictoryChart, VictoryAxis, VictoryLine, VictoryScatter,
          VictoryBrushContainer, VictoryZoomContainer
        }}
      />
    );
  }
}

BrushAndZoomGuide.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default BrushAndZoomGuide;

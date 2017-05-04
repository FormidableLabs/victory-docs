import React from "react";
import ReactDOM from "react-dom";
import { VictoryAxis, VictoryLine } from "victory-chart";
import { VictoryLabel } from "victory-core";
import EcologyRecipe from "../../../../components/ecology-recipe";

class CustomStylesTutorial extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{
          React,
          ReactDOM,
          VictoryAxis,
          VictoryLine,
          VictoryLabel
        }}
      />
    );
  }
}

CustomStylesTutorial.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default CustomStylesTutorial;

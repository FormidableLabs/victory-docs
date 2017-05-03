import React from "react";
import ReactDOM from "react-dom";
import { VictoryBar, VictoryScatter, VictoryChart } from "victory";
import { range, random } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";

class AnimationGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{ range, random, React, ReactDOM, VictoryBar, VictoryScatter, VictoryChart }}
      />
    );
  }
}

AnimationGuide.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default AnimationGuide;

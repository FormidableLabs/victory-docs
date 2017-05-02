import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryBar, VictoryScatter, VictoryAxis, VictoryLabel, VictoryGroup,
  VictoryChart, VictoryLine, VictoryPie, VictoryArea, Area
} from "victory";
import { random, range } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";

class CustomComponentGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        scope={{
          random, range, React, ReactDOM, VictoryBar, VictoryScatter, VictoryLine,
          VictoryPie, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryArea, Area
        }}
      />
    );
  }
}

CustomComponentGuide.propTypes = {
  location: React.PropTypes.object
};

export default CustomComponentGuide;

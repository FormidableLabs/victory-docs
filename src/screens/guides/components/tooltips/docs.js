import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryLine, VictoryAxis,
  VictoryBar, VictoryScatter, VictoryStack, VictoryTooltip, VictoryVoronoiTooltip,
  VictoryGroup, VictoryVoronoiContainer
} from "victory";
import { range, random} from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class TooltipsGuide extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{
          range, random, React, ReactDOM, VictoryPie, VictoryContainer, VictoryLabel,
          VictoryLine, VictoryAxis, VictoryBar, VictoryScatter, VictoryStack, VictoryTooltip,
          VictoryVoronoiTooltip, VictoryGroup, VictoryChart, VictoryVoronoiContainer
        }}
      />
    );
  }
}

TooltipsGuide.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default TooltipsGuide;

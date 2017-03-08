import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import {
  VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryLine, VictoryAxis,
  VictoryBar, VictoryScatter, VictoryStack, VictoryTooltip, VictoryVoronoiTooltip,
  VictoryGroup, VictoryVoronoiContainer
} from "victory";
import { range, random} from "lodash";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class TooltipsGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            range, random, React, ReactDOM, VictoryPie, VictoryContainer, VictoryLabel,
            VictoryLine, VictoryAxis, VictoryBar, VictoryScatter, VictoryStack, VictoryTooltip,
            VictoryVoronoiTooltip, VictoryGroup, VictoryChart, VictoryVoronoiContainer
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

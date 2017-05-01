import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryBar, VictoryScatter, VictoryAxis, VictoryLabel, VictoryGroup,
  VictoryChart, VictoryLine, VictoryPie, VictoryArea, Area
} from "victory";
import { random, range } from "lodash";
import EcologyRecipe from "../ecology-recipe";

export default class CustomComponentGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        scope={{
          random, range, React, ReactDOM, VictoryBar, VictoryScatter, VictoryLine,
          VictoryPie, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryArea, Area
        }}
      />
    );
  }
}

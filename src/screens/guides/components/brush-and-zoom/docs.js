import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryAxis, VictoryChart, VictoryLine, VictoryScatter,
  VictoryBrushContainer, VictoryZoomContainer
} from "victory";
import { random, range } from "lodash";
import EcologyRecipe from "../ecology-recipe";

export default class CustomComponentGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        scope={{
          random, range, React, ReactDOM, VictoryChart, VictoryAxis, VictoryLine, VictoryScatter,
          VictoryBrushContainer, VictoryZoomContainer
        }}
      />
    );
  }
}

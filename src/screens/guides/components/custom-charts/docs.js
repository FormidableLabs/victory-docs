import React from "react";
import ReactDOM from "react-dom";
import { VictoryAxis, VictoryLine } from "victory-chart";
import { VictoryLabel } from "victory-core";
import EcologyRecipe from "../ecology-recipe";

export default class CustomStylesTutorial extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
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

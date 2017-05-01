import React from "react";
import ReactDOM from "react-dom";
import { VictoryBar, VictoryScatter, VictoryChart } from "victory";
import { range, random } from "lodash";
import EcologyRecipe from "../ecology-recipe";

export default class AnimationGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        scope={{ range, random, React, ReactDOM, VictoryBar, VictoryScatter, VictoryChart }}
      />
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryZoom, VictoryChart, VictoryScatter, VictoryLine } from "victory-chart";
import { range, random } from "lodash";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class AnimationGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{ range, random, React, ReactDOM, VictoryScatter, VictoryChart, VictoryZoom, VictoryLine }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

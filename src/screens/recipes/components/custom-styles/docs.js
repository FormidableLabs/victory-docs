import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryAxis, VictoryLine } from "victory-chart";
import { VictoryLabel } from "victory-core";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class CustomStylesTutorial extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React,
            ReactDOM,
            VictoryAxis,
            VictoryLine,
            VictoryLabel
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

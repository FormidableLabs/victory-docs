import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryChart, VictoryArea, VictoryAxis, VictoryScatter, VictoryLabel } from "victory";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class TooltipTutorial extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React,
            ReactDOM,
            VictoryChart,
            VictoryArea,
            VictoryAxis,
            VictoryScatter,
            VictoryLabel
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

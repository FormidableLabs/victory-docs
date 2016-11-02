import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryLine } from "victory";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class ResponsiveContainerGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React, ReactDOM, VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryLine
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

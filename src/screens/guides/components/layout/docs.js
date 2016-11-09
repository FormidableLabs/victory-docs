import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import {
  VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryLine, VictoryAxis,
  VictoryBar, VictoryScatter, VictoryStack, VictoryPortal
} from "victory";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class LayoutGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React, ReactDOM, VictoryPie, VictoryContainer, VictoryLabel, VictoryChart,
            VictoryLine, VictoryAxis, VictoryBar, VictoryScatter, VictoryStack, VictoryPortal
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

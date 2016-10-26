import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import {
  VictoryBar, VictoryScatter, VictoryAxis, VictoryLabel, VictoryGroup, VictoryChart
} from "victory";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class CustomComponentGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React, ReactDOM, VictoryBar, VictoryScatter,
            VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

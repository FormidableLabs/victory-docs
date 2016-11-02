import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import {
  VictoryBar, VictoryScatter, VictoryAxis, VictoryLabel, VictoryGroup,
  VictoryChart, VictoryLine, VictoryPie, VictoryArea, Area
} from "victory";
import { ecologyPlaygroundLoading } from "formidable-landers";
import { random, range } from "lodash"

export default class CustomComponentGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            random, range, React, ReactDOM, VictoryBar, VictoryScatter, VictoryLine,
            VictoryPie, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryArea, Area
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

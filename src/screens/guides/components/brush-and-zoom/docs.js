import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import {
  VictoryAxis, VictoryChart, VictoryLine, VictoryScatter,
  VictoryBrushContainer, VictoryZoomContainer
} from "victory";
import { ecologyPlaygroundLoading } from "formidable-landers";
import { random, range } from "lodash";

export default class CustomComponentGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            random, range, React, ReactDOM, VictoryChart, VictoryAxis, VictoryLine, VictoryScatter,
            VictoryBrushContainer, VictoryZoomContainer
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

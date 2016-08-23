import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryPie } from "victory";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class CustomDataComponentTutorial extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React,
            ReactDOM,
            VictoryAxis,
            VictoryChart,
            VictoryLine,
            VictoryScatter,
            VictoryPie
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

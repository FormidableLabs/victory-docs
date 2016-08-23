import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryAxis, VictoryLine } from "victory";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class MultipleAxesTutorial extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React,
            ReactDOM,
            VictoryAxis,
            VictoryLine
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryAxis, VictoryBar, VictoryStack, VictoryLabel } from "victory";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class CustomCentralAxisTutorial extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React,
            ReactDOM,
            VictoryAxis,
            VictoryBar,
            VictoryStack,
            VictoryLabel
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

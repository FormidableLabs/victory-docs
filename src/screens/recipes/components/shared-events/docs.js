import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import Radium from "radium";
import { merge } from "lodash";
import { VictoryBar, VictoryLine, VictoryAxis,
VictorySharedEvents } from "victory";
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
            Radium,
            merge,
            VictoryBar,
            VictoryLine,
            VictoryAxis,
            VictorySharedEvents
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

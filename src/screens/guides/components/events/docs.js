import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import {
  VictoryAxis, VictoryBar, VictoryArea, VictoryChart, VictorySharedEvents
} from "victory";
import { assign, random, range, last } from "lodash";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class EventsGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            assign,
            random,
            range,
            last,
            React,
            ReactDOM,
            VictoryAxis,
            VictoryBar,
            VictoryArea,
            VictoryChart
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

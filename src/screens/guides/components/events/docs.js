import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import {
  VictoryBar, VictoryArea, VictoryChart, VictoryPie, VictoryStack,
  VictorySharedEvents, Bar, VictoryLabel
} from "victory";
import { assign } from "lodash";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class EventsGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            assign, React, ReactDOM, VictoryBar, Bar, VictoryArea, VictoryLabel,
            VictoryPie, VictoryChart, VictoryStack, VictorySharedEvents
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

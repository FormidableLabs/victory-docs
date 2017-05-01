import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryBar, VictoryArea, VictoryChart, VictoryPie, VictoryStack,
  VictorySharedEvents, Bar, VictoryLabel
} from "victory";
import { assign } from "lodash";
import EcologyRecipe from "../ecology-recipe";

export default class EventsGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        scope={{
          assign, React, ReactDOM, VictoryBar, Bar, VictoryArea, VictoryLabel,
          VictoryPie, VictoryChart, VictoryStack, VictorySharedEvents
        }}
      />
    );
  }
}

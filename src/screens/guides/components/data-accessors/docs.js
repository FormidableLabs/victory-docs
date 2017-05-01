import React from "react";
import ReactDOM from "react-dom";
import { VictoryBar, VictoryLine, VictoryChart, VictoryAxis} from "victory";
import { assign, range } from "lodash";
import EcologyRecipe from "../ecology-recipe";

export default class DataAccessorsGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        scope={{ assign, range, React, ReactDOM, VictoryBar, VictoryLine, VictoryChart, VictoryAxis}}
      />
    );
  }
}

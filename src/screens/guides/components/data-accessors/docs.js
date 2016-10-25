import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryBar, VictoryLine, VictoryChart } from "victory";
import { assign } from "lodash";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class DataAccessorsGuide extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{ assign, React, ReactDOM, VictoryBar, VictoryLine, VictoryChart }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

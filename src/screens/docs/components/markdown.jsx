import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import marked from "marked";
import Ecology from "ecology";

// Docs
import { VictoryChart, VictoryLine, VictoryPie } from "victory";
import * as V from "victory";
import victoryREADME from "!!raw!victory/README.md";

// /open-source/victory/docs route.
class Docs extends React.Component {
  getStyles() {
    return {
      margin: "1rem 0 0 0",
      padding: "1rem 0.5rem",
      "@media (min-width: 70em)": {
        flex: "1",
        margin: 0,
        padding: "60px 1rem"
      }
    };
  }


  render() {
    // const victoryDocs = marked(!!raw!victoryREADME);
    return (
      <main
        style={this.getStyles()}
      >
      <Ecology
        overview={require("!!raw!victory/README.md")}
        scope={{React, ReactDOM, V, VictoryChart, VictoryLine, VictoryPie}}
        playgroundtheme="elegant"
      />
      </main>
    );
  }
}

export default Radium(Docs);

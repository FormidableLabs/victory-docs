/*global window:false */

import React from "react";
import { VictoryScatter, VictoryChart } from "victory";
import { range, random } from "lodash";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scatterData: this.getScatterData()
    };
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        scatterData: this.getScatterData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }


  getScatterData() {
    const colors = [
      "violet", "cornflowerblue", "gold", "orange",
      "turquoise", "tomato", "greenyellow"
    ];
    const symbols = [
      "circle", "star", "square", "triangleUp",
      "triangleDown", "diamond", "plus"
    ];
    return range(25).map((index) => {
      const scaledIndex = Math.floor(index % 7);
      return {
        x: random(10, 50),
        y: random(2, 100),
        size: random(8) + 3,
        symbol: symbols[scaledIndex],
        fill: colors[random(0, 6)],
        opacity: 0.6
      };
    });
  }

  render() {
    const parentStyle = {
      boxSizing: "border-box",
      display: "block",
      margin: "0 auto",
      width: "auto",
      height: "100%",
      maxHeight: "280px"
    };

    return (
      <svg
        viewBox="0 0 450 350"
        className="fancyBorder"
        style={parentStyle}
      >
        <VictoryChart
          width={450} height={350}
          standalone={false}
          animate={{ duration: 2000 }}
        >
          <VictoryScatter
            data={this.state.scatterData}
          />
        </VictoryChart>
      </svg>
    );
  }
}

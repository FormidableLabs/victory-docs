import React from "react";
import { VictoryScatter, VictoryVoronoiTooltip, VictoryGroup, VictoryChart, VictoryLine } from "victory";

export default class App extends React.Component {

  getStyles() {
    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        margin: "0 auto",
        padding: 0
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <div className="Benefits-demo fancyBorder">
        <VictoryChart
          width={450} height={350}
          style={{parent: styles.parent}}
          domain={{y: [-7, 7]}}
        >
        <VictoryGroup
          data={[
            {x: 1, y: 1},
            {x: 2, y: 3},
            {x: 3, y: -2},
            {x: 4, y: 4},
            {x: 5, y: 5},
            {x: 6, y: -5},
            {x: 7, y: 3},
            {x: 8, y: 1},
            {x: 9, y: 5}
          ]}
        >
          <VictoryLine
            style={{
              data: { stroke: "tomato", strokeWidth: 3}
            }}
          />
          <VictoryScatter
            size={5}
            style={{
              data: {fill: "tomato", stroke: "#f6f2ee", strokeWidth: 3}
            }}
          />
          <VictoryVoronoiTooltip
            labels={(d) => `x: ${d.x} \n y: ${d.y}`}
            style={{
              labels: {fontSize: 20, fill: "tomato"},
              flyout: {
                fill: "#f6f2ee", stroke: "tomato", strokeWidth: 2
              }
            }}
          />
        </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

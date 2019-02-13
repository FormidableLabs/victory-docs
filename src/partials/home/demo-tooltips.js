import React from "react";
import {
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryChart,
  VictoryLine,
  VictoryAxis
} from "victory";

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
          style={styles}
          domainPadding={{ y: 2 }}
          width={450}
          height={350}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={d => `y: ${d.y}`}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  flyoutStyle={{ fill: "white" }}
                />
              }
            />
          }
        >
          <VictoryAxis />
          <VictoryLine
            data={[
              {
                x: 1,
                y: 5,
                l: "one"
              },
              {
                x: 1.5,
                y: 5,
                l: "one point five"
              },
              {
                x: 2,
                y: 4,
                l: "two"
              },
              {
                x: 3,
                y: -2,
                l: "three"
              }
            ]}
            style={{
              data: {
                stroke: "tomato",
                strokeWidth: (d, active) => (active ? 4 : 2)
              },
              labels: { fill: "tomato" }
            }}
          />

          <VictoryLine
            data={[
              {
                x: 1,
                y: -3,
                l: "red"
              },
              {
                x: 2,
                y: 5,
                l: "green"
              },
              {
                x: 3,
                y: 3,
                l: "blue"
              }
            ]}
            style={{
              data: {
                stroke: "blue",
                strokeWidth: (d, active) => (active ? 4 : 2)
              },
              labels: { fill: "blue" }
            }}
          />

          <VictoryLine
            data={[
              {
                x: 1,
                y: 5,
                l: "cat"
              },
              {
                x: 2,
                y: -4,
                l: "dog"
              },
              {
                x: 3,
                y: -2,
                l: "bird"
              }
            ]}
            style={{
              data: {
                stroke: "black",
                strokeWidth: (d, active) => (active ? 4 : 2)
              },
              labels: { fill: "black" }
            }}
          />
        </VictoryChart>
      </div>
    );
  }
}

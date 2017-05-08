/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryVoronoiContainer, VictoryLine, VictoryTooltip, VictoryAxis   */

/* Victory requires `react@^15.5.0` and `prop-types@^15.5.0` */

class App extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 450 400">
        <VictoryAxis dependentAxis
          width={450} height={300} padding={50}
          orientation="right" crossAxis
          domain={{y: [-500, 500]}}
          label="right"
        />
        <VictoryChart
          width={450} height={300} padding={50}
          containerComponent={<VictoryVoronoiContainer/>}
          domainPadding={{y: 10}}
        >
          <VictoryAxis label="bottom"/>
          <VictoryAxis dependentAxis label="left"/>
          <VictoryLine
            data={[
              {x: 1, y: 5, l: "one"},
              {x: 1.5, y: 5, l: "one point five"},
              {x: 2, y: 4, l: "two"},
              {x: 3, y: -2, l: "three"}
            ]}
            style={{
              data: {
                stroke: "tomato",
                strokeWidth: (d, active) => {return active ? 4 : 2;}
              },
              labels: {fill: "tomato"}
            }}
            labels={(d) => d.y * 100}
            labelComponent={<VictoryTooltip/>}
          />

          <VictoryLine
            data={[
              {x: 1, y: -3, l: "red"},
              {x: 2, y: 5, l: "green"},
              {x: 3, y: 3, l: "blue"}
            ]}
            style={{
              data: {
                stroke: "blue",
                strokeWidth: (d, active) => {return active ? 4 : 2;}
              },
              labels: {fill: "blue"}
            }}
            labels={(d) => d.y}
            labelComponent={<VictoryTooltip/>}
          />

          <VictoryLine
            data={[
              {x: 1, y: 5, l: "cat"},
              {x: 2, y: -4, l: "dog"},
              {x: 3, y: -2, l: "bird"}
            ]}
            style={{
              data: {
                stroke: "black",
                strokeWidth: (d, active) => {return active ? 4 : 2;}
              },
              labels: {fill: "black"}
            }}
            labels={(d) => d.y * 100}
            labelComponent={<VictoryTooltip/>}
          />
        </VictoryChart>
      </svg>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

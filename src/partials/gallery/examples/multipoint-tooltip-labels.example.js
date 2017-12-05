/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, mountNode */
/* global VictoryChart, VictoryVoronoiContainer, VictoryLine, VictoryTooltip   */

class App extends React.Component {
  render() {
    return (
      <VictoryChart height={400} width={400}
        domainPadding={{ y: 10 }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                flyoutStyle={{ fill: "white" }}
              />}
          />}
      >
        <VictoryLine
          data={[
            { x: 1, y: 5, l: "one" },
            { x: 1.5, y: 5, l: "one point five" },
            { x: 2, y: 4, l: "two" },
            { x: 3, y: -2, l: "three" }
          ]}
          style={{
            data: {
              stroke: "tomato",
              strokeWidth: (d, active) => {return active ? 4 : 2;}
            },
            labels: { fill: "tomato" }
          }}
        />

        <VictoryLine
          data={[
            { x: 1, y: -3, l: "red" },
            { x: 2, y: 5, l: "green" },
            { x: 3, y: 3, l: "blue" }
          ]}
          style={{
            data: {
              stroke: "blue",
              strokeWidth: (d, active) => {return active ? 4 : 2;}
            },
            labels: { fill: "blue" }
          }}
        />

        <VictoryLine
          data={[
            { x: 1, y: 5, l: "cat" },
            { x: 2, y: -4, l: "dog" },
            { x: 3, y: -2, l: "bird" }
          ]}
          style={{
            data: {
              stroke: "black",
              strokeWidth: (d, active) => {return active ? 4 : 2;}
            },
            labels: { fill: "black" }
          }}
        />
      </VictoryChart>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

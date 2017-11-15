/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryLine, VictoryAxis, VictoryTheme */

const data = [
  [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 4, y: 4}],
  [{x: 1, y: 400}, {x: 2, y: 350}, {x: 3, y: 300}, {x: 4, y: 250}],
  [{x: 1, y: 75}, {x: 2, y: 85}, {x: 3, y: 95}, {x: 4, y: 100}]
];
// find maxima for normalizing data
const maxima = data.map(
	(dataset) => Math.max(...dataset.map((d) => d.y))
);

const xOffsets = [50, 200, 350];
const tickPadding = [ 0, 0, -15 ];
const anchors = ["end", "end", "start"];
const colors = ["black", "red", "blue"];

class App extends React.Component {

  render() {
    return (
      <div>
        <VictoryChart
          theme={VictoryTheme.material}
          width={400} height={400}
          domain={{ y: [0, 1] }}
        >
         <VictoryAxis />
          {data.map((d, i) =>
            <VictoryAxis dependentAxis
              key={i}
              offsetX={xOffsets[i]}
              style={{
                axis: { stroke: colors[i] },
                ticks: { padding: tickPadding[i] },
                tickLabels: { fill: colors[i], textAnchor: anchors[i] }
              }}
              // Use normalized tickValues (0 - 1)
              tickValues={[0.25, 0.5, 0.75, 1]}
              // Re-scale ticks by multiplying by correct maxima
              tickFormat={(t) => t * maxima[i]}
            />
          )}
          {data.map((d, i) =>
            <VictoryLine
              key={i}
              data={d}
              style={{ data: { stroke: colors[i] } }}
              // normalize data
              y={(datum) => datum.y / maxima[i]}
            />
          )}
        </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);
/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryArea, VictoryTheme */

class App extends React.Component {
  render() {
    return (
      <div>
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="myGradient">
              <stop offset="0%" stopColor="red"/>
              <stop offset="25%" stopColor="red"/>
              <stop offset="25%" stopColor="orange"/>
              <stop offset="50%" stopColor="orange"/>
              <stop offset="50%" stopColor="gold"/>
              <stop offset="75%" stopColor="gold"/>
              <stop offset="75%" stopColor="green"/>
              <stop offset="100%" stopColor="green"/>
            </linearGradient>
          </defs>
        </svg>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryArea
            style={{
              data: {fill: "url(#myGradient)"}
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 7 },
              { x: 4, y: 4 },
              { x: 5, y: 5 }
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

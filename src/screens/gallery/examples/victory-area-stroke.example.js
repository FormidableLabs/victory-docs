/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryGroup, VictoryArea */

/* Victory requires `react@^15.5.0` and `prop-types@^15.5.0` */

class App extends React.Component {
  render() {
    return (
      <VictoryChart>
        <VictoryGroup
          style={{
            data: {strokeWidth: 3, fillOpacity: 0.4}
          }}
        >
          <VictoryArea
            style={{
              data: {fill: "cyan", stroke: "cyan"}
            }}
            data={[
              {x: 1, y: 2},
              {x: 2, y: 3},
              {x: 3, y: 5},
              {x: 4, y: 4},
              {x: 5, y: 7}
            ]}
          />
          <VictoryArea
            style={{
              data: {fill: "magenta", stroke: "magenta"}
            }}
            data={[
              {x: 1, y: 3},
              {x: 2, y: 2},
              {x: 3, y: 6},
              {x: 4, y: 2},
              {x: 5, y: 6}
            ]}
          />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

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

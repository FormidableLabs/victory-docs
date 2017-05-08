/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryLine, VictoryAxis */

// Victory requires `react@^15.5.0` and `prop-types@^15.5.0`
// This example demonstrates the difference between
// string data and date object data for tick formatting

class App extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart>
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={[
                {x: "1915", y: 125},
                {x: "1920", y: 257},
                {x: "1925", y: 345},
                {x: "1930", y: 515},
                {x: "1935", y: 132},
                {x: "1940", y: 305},
                {x: "1945", y: 270},
                {x: "1950", y: 470}
              ]}
            />
            <VictoryAxis
              tickFormat={(t) => `${t} year`}
            />
          </VictoryChart>
          <VictoryChart scale={{x: "time"}}>
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              x={(d) => new Date(d.x)}
              data={[
                {x: "1915", y: 125},
                {x: "1920", y: 257},
                {x: "1925", y: 345},
                {x: "1930", y: 515},
                {x: "1935", y: 132},
                {x: "1940", y: 305},
                {x: "1945", y: 270},
                {x: "1950", y: 470}
              ]}
            />
            <VictoryAxis
              tickFormat={(t) => t.getFullYear()}
            />
          </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

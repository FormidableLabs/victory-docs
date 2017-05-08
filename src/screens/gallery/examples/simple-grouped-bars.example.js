/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryGroup, VictoryBar, VictoryTheme */

// Victory requires `react@^15.5.0` and `prop-types@^15.5.0`

class App extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart
          domainPadding={{ x: 25 }}
          theme={VictoryTheme.material}
        >
            <VictoryGroup
              offset={8}
              style={{ data: { width: 4 } }}
              colorScale={
                ["#766EAF", "#F27527", "#F751D3", "#37E0E1"]
              }
            >
                <VictoryBar
                  data={[
                    {x: 1, y: 1},
                    {x: 2, y: 2},
                    {x: 3, y: 3},
                    {x: 4, y: 2},
                    {x: 5, y: 1}
                  ]}
                />
                <VictoryBar
                  data={[
                    {x: 1, y: 3},
                    {x: 2, y: 3},
                    {x: 3, y: 5},
                    {x: 4, y: 3},
                    {x: 5, y: 5}
                  ]}
                />
                <VictoryBar
                  data={[
                    {x: 1, y: 3},
                    {x: 2, y: 4},
                    {x: 3, y: 5},
                    {x: 4, y: 4},
                    {x: 5, y: 4}
                  ]}
                />
                <VictoryBar
                  data={[
                    {x: 1, y: 4},
                    {x: 2, y: 5},
                    {x: 3, y: 4},
                    {x: 4, y: 2},
                    {x: 5, y: 2}
                  ]}
                />
            </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

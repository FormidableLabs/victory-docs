/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryLine, VictoryTooltip, VictoryScatter */

// Victory requires `react@^15.5.0` and `prop-types@^15.5.0`

class App extends React.Component {
  render() {
    return (
      <VictoryChart
        containerComponent={<VictoryVoronoiContainer/>}
      >
          <VictoryGroup
            labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                style={{fontSize: 10}}
              />
            }
            data={[
              {x: 1, y: -3},
              {x: 2, y: 5},
              {x: 3, y: 3},
              {x: 4, y: 0},
              {x: 5, y: -2},
              {x: 6, y: -2},
              {x: 7, y: 5}
            ]}
          >
            <VictoryLine/>
            <VictoryScatter
              size={(d, a) => {return a ? 8 : 3;}}
            />
          </VictoryGroup>
          <VictoryGroup
            labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                style={{fontSize: 10}}
              />
            }
            data={[
              {x: 1, y: 3},
              {x: 2, y: 1},
              {x: 3, y: 2},
              {x: 4, y: -2},
              {x: 5, y: -1},
              {x: 6, y: 2},
              {x: 7, y: 3}
            ]}
          >
            <VictoryLine/>
            <VictoryScatter
              size={(d, a) => {return a ? 8 : 3;}}
            />
          </VictoryGroup>
       </VictoryChart>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

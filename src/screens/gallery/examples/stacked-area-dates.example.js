/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryStack, VictoryArea */
/* eslint-disable no-bitwise */

// Victory requires `react@^15.5.0` and `prop-types@^15.5.0`

class App extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart scale={{x: "time"}}>
          <VictoryStack colorScale="warm">
            <VictoryArea
              data={[
                {x: new Date(1986, 1, 1), y: 2},
                {x: new Date(1996, 1, 1), y: 3},
                {x: new Date(2006, 1, 1), y: 5},
                {x: new Date(2016, 1, 1), y: 4}
              ]}
            />
            <VictoryArea
              data={[
                {x: new Date(1986, 1, 1), y: 4},
                {x: new Date(1996, 1, 1), y: 3},
                {x: new Date(2006, 1, 1), y: 2},
                {x: new Date(2016, 1, 1), y: 5}
              ]}
            />
            <VictoryArea
              data={[
                {x: new Date(1986, 1, 1), y: 3},
                {x: new Date(1996, 1, 1), y: 1},
                {x: new Date(2006, 1, 1), y: 4},
                {x: new Date(2016, 1, 1), y: 2}
              ]}
            />
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

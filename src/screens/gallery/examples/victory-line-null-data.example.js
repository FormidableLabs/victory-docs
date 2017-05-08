/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryGroup, VictoryLine, VictoryAxis   */

/* Victory requires `react@^15.5.0` and `prop-types@^15.5.0` */

class App extends React.Component {

  render() {
    return (
      <div>
        <VictoryGroup
          data={[
            {x: 1, y: 1},
            {x: 2, y: 3},
            {x: 3, y: 5},
            {x: 4, y: 2},
            {x: 5, y: null},
            {x: 6, y: null},
            {x: 7, y: 6},
            {x: 8, y: 7},
            {x: 9, y: 8},
            {x: 10, y: 12}
          ]}
        >
          <VictoryLine />
          <VictoryAxis />
          <VictoryAxis dependentAxis />
        </VictoryGroup>
      </div>
    );
  }
 }

ReactDOM.render(<App/>, mountNode);

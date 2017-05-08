/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryLine   */

/* Victory requires `react@^15.5.0` and `prop-types@^15.5.0` */

/*
	Basic Victory Example
*/

class App extends React.Component {

  render() {
    return (
      <div>
        <VictoryChart>
          <VictoryLine/>
        </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

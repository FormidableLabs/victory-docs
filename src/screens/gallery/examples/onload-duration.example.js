/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryBar, VictoryChart   */

/* Victory requires `react@^15.5.0` and `prop-types@^15.5.0` */

const data = [
  {
    name: "Product 1",
    amount: 24
  }, {
    name: "Product 2",
    amount: 3
  }, {
    name: "Product 3",
    amount: 7
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart domainPadding={50}>
          <VictoryBar data={data} x="name" y="amount"
            animate={{ onLoad: { duration: 500 } }}
            style={{ data: { width: 60 } }}
          />
        </VictoryChart>
        <VictoryChart domainPadding={50}>
          <VictoryBar data={data} x="name" y="amount"
            animate={{ onLoad: { duration: 1000 } }}
            style={{ data: { width: 60 } }}
          />
        </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

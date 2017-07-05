/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode, VictoryPie, VictoryLabel */

class App extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 400 400">
        <VictoryPie
          width={400} height={400}
          data={[
            {x: 1, y: 120}, {x: 2, y: 150}, {x: 3, y: 75}
          ]}
          innerRadius={68} labelRadius={100}
          style={{ labels: { fontSize: 20, fill: "white"}}}
        />
        <VictoryLabel
          textAnchor="middle"
          x={200} y={200}
          text="Word(s)"
        />
      </svg>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

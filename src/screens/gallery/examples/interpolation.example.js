/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryLine, VictoryChart, VictoryScatter */

const data = [
  {x: 0, y: 0},
  {x: 1, y: 2},
  {x: 2, y: 1},
  {x: 3, y: 4},
  {x: 4, y: 3},
  {x: 5, y: 5}
];

const cartesianInterpolations = [
  "basis",
  "bundle",
  "cardinal",
  "catmullRom",
  "linear",
  "monotoneX",
  "monotoneY",
  "natural",
  "step",
  "stepAfter",
  "stepBefore"
];

const polarInterpolations = [
  "basis",
  "cardinal",
  "catmullRom",
  "linear"
];

const InterpolationSelect = ({ currentValue, values, onChange }) => (
  <select onChange={onChange} value={currentValue} style={{ width: 110 }}>
    {values.map(
      (value) => <option value={value} key={value}>{value}</option>
    )}
  </select>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      interpolation: "linear",
      polar: false
    };
  }
  render() {
    return (
      <div>
        <InterpolationSelect
          currentValue={this.state.interpolation}
          values={this.state.polar ? polarInterpolations : cartesianInterpolations }
          onChange={(event) => this.setState({ interpolation: event.target.value })}
        />
        <input
          type="checkbox"
          id="polar"
          value={this.state.polar}
          onChange={
            (event) => this.setState({
              polar: event.target.checked,
              interpolation: "linear"
            })
          }
          style={{ marginLeft: 50, marginRight: 5}}
        />
        <label htmlFor="polar">polar</label>
        <VictoryChart polar={this.state.polar} height={330}>
          <VictoryLine
            interpolation={this.state.interpolation} data={data}
          />
          <VictoryScatter data={data}
            style={{data: {fill: "#222"}}}
          />
        </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode, window */
/* global VictoryChart, VictoryLine, VictoryTheme */
/* eslint-disable react/no-did-mount-set-state */

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      cntr: 5,
      key: 4,
      domainPadding: 20,
      data: [
        {x: 1, y: Math.random() * 10, key: 0},
        {x: 2, y: Math.random() * 10, key: 1},
        {x: 3, y: Math.random() * 10, key: 2},
        {x: 4, y: Math.random() * 10, key: 3},
        {x: 5, y: Math.random() * 10, key: 4}
      ]
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      const cntr = this.state.cntr + 1;
      const key = this.state.key + 1;
      const data = this.getData(cntr, key);
      this.setState({cntr, key, data});
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(cntr, key) {
    const tempData = this.state.data;
    tempData.shift();
    return tempData.concat([{key, x: cntr, y: Math.random() * 18}]);
  }

  render() {
    return (
        <VictoryChart
          theme={VictoryTheme.material}
          height={160}
          animate={{duration: 500, onLoad: {duration: 1000}}}
          easing="linear"
        >
          <VictoryLine
            interpolation="natural"
            data={this.state.data}
          />
      </VictoryChart>
    );
  }
}

ReactDOM.render(<App/>, mountNode);

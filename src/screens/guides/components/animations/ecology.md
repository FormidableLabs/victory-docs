# Animations

VictoryAnimation is able to animate changes in props using [d3-interpolate]. Victory components define their animations via the `animate` prop. `duration`, `delay`, `easing` and `onEnd` functions may all be specified via the `animate` prop. 

```playground_norender 
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scatterData: this.getScatterData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        scatterData: this.getScatterData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }


  getScatterData() {
    const colors =[ 
      "violet", "cornflowerblue", "gold", "orange", 
      "turquoise", "tomato" "greenyellow"
    ];
    const symbols = [
      "circle", "star", "square", "triangleUp", 
      "triangleDown", "diamond", "plus"
    ];
    return range(25).map((index) => {
      const scaledIndex = Math.floor(index % 7);
      return {
        x: random(10, 50),
        y: random(2, 100),
        size: random(8) + 3,
        symbol: symbols[scaledIndex],
        fill: colors[random(0, 6)]
        opacity: 0.6
      };
    });
  }

  render() {
    return (
      <VictoryChart animate={{ duration: 2000, easing: "bounce" }}>
        <VictoryScatter
          data={this.state.scatterData}
        />
      </VictoryChart>
    );
  }
}

ReactDOM.render(<App/>, mountNode)
```


## Transitions

Victory components define default transitons for entering and exiting nodes, but these may be overridden with the `onEnter` and `onExit` properties of the `animate` object. The `before` and `after` properties take functions whose return values alter the datum of the transitioning node before or after the transition. These functions are called with the original datum of the transitioning node.

```playground_norender 
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      barData: this.getbarData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        barData: this.getbarData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getBarData() {
    const bars = random(6, 10);
    return range(bars).map((bar) => {
      return {x: bar + 1, y: random(2, 10)};
    });
  }

  render() {
    return (
      <VictoryChart>
        <VictoryBar
          data={this.state.barData}
          animate={{
            duration: 1000,
            onExit: {
              before: () => ({y: 0, label: "bye"}),
              duration: 500
            },
            onEnter: {
              before: () => {y: 0},
              after: (datum) => ({y: datum.y, label: "ohai"}),
              duration: 500
            }
          }}
        />
      </VictoryChart>
    );
  }
}

ReactDOM.render(<App/>, mountNode)
```

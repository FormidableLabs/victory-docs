# Pan and Zoom

VictoryZoom will handle panning and zooming behavior by binding to mouse or touch events and updating the domain accordingly. Any single child of VictoryChart or VictoryGroup will be rendered with zoom behavior attached.

```playground_norender
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: this.getScatterData()
  }

  getScatterData() {
    return range(50).map((index) => {
      return {
        x: random(-10, 50),
        y: random(2, 100),
        size: random(8) + 3,
        opacity: 0.7
      };
    });
  }

  render() {
    return (
      <VictoryZoom>
        <VictoryChart>
          <VictoryScatter
            data={this.state.data}
          />
        </VictoryChart>
      </VictoryZoom>
    );
  }
}

ReactDOM.render(<App/>, mountNode)
```

## Triggering updates

VictoryZoom provides a couple of hooks for updating and listening to changes on its domain, thereby allowing your zoom or pan control to update based on some external data change. Any changes to zoomDomain will trigger an update to the pan/zoom location. Whilst changes caused by VictoryZoom internal events will trigger an `onDomainChange`.

```playground_norender
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: this.getScatterData(),
    zoomDomain: {x: [20, 50]},
    selectedDomain: {x: [20, 50]},
  }

  getScatterData() {
    return range(50).map((index) => {
      return {
        x: index,
        y: random(2, 100)
      };
    })
  }

  handleDomainChange(domain) {
    this.setState({selectedDomain: domain});
  }

  handleClick(val) {
    const {x: [x0, x1]} = this.state.selectedDomain;
    this.setState({
      zoomDomain: {x: [x0 + val, x1 + val]},
      selectedDomain: {x: [x0 + val, x1 + val]}
    });
  }

  printDomain() {
    return this.state.selectedDomain
      .x
      .map((n) => Math.round(n * 100) / 100)
      .join(', ');
  }

  render() {
    return (
      <div>
        <div>{this.printDomain()}</div>
        <div>
          <button style={buttonStyle} 
            onClick={this.handleClick.bind(this, 10)}
          >
            PAN +10
          </button>

          <button style={buttonStyle}
            onClick={this.handleClick.bind(this, -10)}
          >
            PAN -10
          </button>
          
        </div>
        <VictoryZoom 
          zoomDomain={this.state.zoomDomain}
          onDomainChange={this.handleDomainChange.bind(this)}
        >
          <VictoryChart animate={{duration: 1000}}>
            <VictoryLine data={this.state.data} interpolation="basis"/>
          </VictoryChart>
        </VictoryZoom>
      </div>
    );
  }
}

const buttonStyle = {
  margin: "20px 10px 0",
  padding: 5,
  border: "2px solid black",
};

ReactDOM.render(<App/>, mountNode)
```

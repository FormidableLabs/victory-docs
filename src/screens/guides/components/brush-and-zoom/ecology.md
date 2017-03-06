# Brush and Zoom

**IMPORTANT: VictoryZoomContainer replaces VictoryZoom**

Use `VictoryZoomContainer` as your containerComponent to add panning and zooming behavior to any Victory components that work with an x, y coordinate system.

In the example below, an initial domain is set with the `zoomDomain` prop. This prop may also be used to trigger pan and zoom behavior from other components.

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
        x: random(1, 50),
        y: random(10, 90),
        size: random(8) + 3
      };
    });
  }

  render() {
    return (
      <VictoryChart
        domain={{y: [0, 100]}}
        containerComponent={<VictoryZoomContainer zoomDomain={{x: [5, 35], y: [0, 100]}}/>}
      >
        <VictoryScatter
          data={this.state.data}
          style={{
            data: {
              opacity: (d) =>  d.y % 5 === 0 ? 1 : 0.7,
              fill: (d) => d.y % 5 === 0 ? "tomato" : "black"
            }
          }}
        />
      </VictoryChart>
    );
  }
}

ReactDOM.render(<App/>, mountNode)
```

In the next example, `VictoryZoomContainer` and `VictoryBrushContainer` are used to create a zoomable chart with a mini-map brush control.
Here, the `onDomainChange` prop on `VictoryZoomContainer` alters the `selectedDomain` prop on `VictoryBrushContainer` tying highlighted brush region of the mini-map to the zoom level of the chart.
The `onDomainChange` prop on `VictoryBrushContainer` alters the `zoomDomain` prop on `VictoryZoomContainer` so that the zoomed level of the chart matches the highlighted region of the mini-map.


```playground_norender
class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }

  render() {
    const chartStyle = { parent: {minWidth: "100%", marginLeft: "10%"}};
    return (
      <div>
          <VictoryChart width={1000} height={400} scale={{x: "time"}} style={chartStyle}
            containerComponent={
              <VictoryZoomContainer responsive={false}
                dimension="x"
                zoomDomain={this.state.zoomDomain}
                onDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />

          </VictoryChart>

          <VictoryChart
            padding={{top: 0, left: 50, right: 50, bottom: 30}}
            width={1000} height={100} scale={{x: "time"}} style={chartStyle}
            containerComponent={
              <VictoryBrushContainer responsive={false}
                dimension="x"
                selectedDomain={this.state.selectedDomain}
                onDomainChange={this.handleBrush.bind(this)}
              />
            }
          >
            <VictoryAxis
              tickValues={[
                new Date(1985, 1, 1),
                new Date(1990, 1, 1),
                new Date(1995, 1, 1),
                new Date(2000, 1, 1),
                new Date(2005, 1, 1),
                new Date(2010, 1, 1)
              ]}
              tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />
          </VictoryChart>

      </div>
    );
  }
}
ReactDOM.render(<App/>, mountNode)
```

`VictoryBrushContainer` may be used with any Victory component that works on an x, y coordinate system.
Brushing behavior may be limited to the x or y dimensions with the `dimension` prop (default: "x"), and the selected
area may be styled, or even replaced with a custom component.

```playground
<VictoryLine
  containerComponent={
    <VictoryBrushContainer
      selectedDomain={{x: [1, 7], y: [-3, 3]}}
      dimension="y"
      selectionStyle={{fill: "teal", opacity: 0.2}}
    />
  }
  style={{
    data: {stroke: "teal"}
  }}
  data={[
    {x: 1, y: -3},
    {x: 2, y: 5},
    {x: 3, y: -3},
    {x: 4, y: 0},
    {x: 5, y: -5},
    {x: 6, y: 2},
    {x: 7, y: 0}
  ]}
/>
```
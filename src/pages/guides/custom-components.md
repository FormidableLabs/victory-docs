---
id: 4
title: Custom Components
scope:
  - range
  - random
---
# Custom Components

Every element that a Victory component renders may be altered or completely replaced. Most components expose `dataComponent`, `labelComponent`, `groupComponent`, and `containerComponent` props. The primitive components that Victory components render by default are simple, stateless components with a consistent set of props whenever possible. These [primitive components] are exported for users to alter, wrap, extend and reference when creating custom components.

## Altering default components

Victory components set props on their primitive components, but these may be overridden or augmented by setting props directly on the the primitive component instances.

```playground
  <VictoryBar
    data={[
      {x: 1, y: 3, label: "Alpha"},
      {x: 2, y: 4, label: "Bravo"},
      {x: 3, y: 6, label: "Charlie"},
      {x: 4, y: 3, label: "Delta"},
      {x: 5, y: 7, label: "Echo"},
    ]}
    labelComponent={
      <VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end"/>
    }
  />
```

## Wrapping components

Victory components may be wrapped to customize or change behavior. Wrapper components should apply any props they receive from other Victory components to the components they render.

```playground_norender
class Wrapper extends React.Component {
  render() {
    const { children } = this.props;
    const childProps = Object.assign({}, this.props, children.props);
    return (
      <g transform="translate(20, 40)">
        <VictoryLabel text={"add labels"} x={110} y={30}/>
        <VictoryLabel text={"offset data from axes"} x={70} y={150}/>
        <VictoryLabel text={"alter props"} x={280} y={150}/>
        { React.cloneElement(children, childProps) }
      </g>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <VictoryChart>
        <Wrapper>
          <VictoryScatter
            y={(d) => Math.sin(2 * Math.PI * d.x)}
            samples={15}
            symbol="square"
            size={6}
            style={{ data: { stroke: "tomato", strokeWidth: 3 }}}
          />
        </Wrapper>
      </VictoryChart>
    );
  }
}
ReactDOM.render(<App/>, mountNode);
```


## Creating new components

Any component that renders valid svg elements (or elements wrapped in `<foreignObject>`) may be used as a `dataComponent` or `labelComponent` in Victory components. Custom components will be provided with the same props as default components. In the following example, a custom `CatPoint` component is used in place of `Point` in `VictoryScatter`.


```playground_norender
class CatPoint extends React.Component {
  render() {
    const {x, y, datum} = this.props;
    const cat = datum._y >= 0 ? "😻" : "😹";
    return (
      <text x={x} y={y} fontSize={30}>
        {cat}
      </text>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <VictoryChart>
        <VictoryScatter
          y={(d) =>
            Math.sin(2 * Math.PI * d.x)
          }
          samples={25}
          dataComponent={<CatPoint/>}
        />
      </VictoryChart>
    );
  }
}
ReactDOM.render(<App/>, mountNode);
```


Other Victory components may even be used in creating custom components, as in the example below.


```playground_norender
class CustomPie extends React.Component {
  render() {
    const {datum, x, y} = this.props;
    const pieWidth = 120;

    return (
      <g transform={
        `translate(${x - pieWidth / 2}, ${y - pieWidth / 2})`
        }
      >
        <VictoryPie
          standalone={false}
          height={pieWidth}
          width={pieWidth}
          data={datum.pie}
          style={{labels: {fontSize: 0}}}
          colorScale={["#f77", "#55e", "#8af"]}
        />
      </g>
    );
  }
}

class CustomDataComponent extends React.Component {
  render() {
    const data = [
      {x: "Jan", y: 30},
      {x: "Feb", y: 32},
      {x: "Mar", y: 65},
      {x: "Apr", y: 38},
      {x: "May", y: 50},
      {x: "Jun", y: 47},
      {x: "Jul", y: 38},
      {x: "Aug", y: 48},
      {x: "Sep", y: 80},
      {x: "Oct", y: 73},
      {x: "Nov", y: 76},
      {x: "Dec", y: 100}
    ];

    const pieData = data.map((datum) => {
      datum.pie = [
        {x: "Lions", y: Math.round(Math.random() * 10)},
        {x: "Tigers", y: Math.round(Math.random() * 10)},
        {x: "Bears", y: Math.round(Math.random() * 10)}
      ];
      return datum;
    });

    return (
      <VictoryChart domain={{y: [0, 100]}}>
        <VictoryAxis/>
        <VictoryGroup data={pieData}>
          <VictoryLine/>
          <VictoryScatter
            dataComponent={<CustomPie />}
          />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

ReactDOM.render(<CustomDataComponent/>, mountNode)
```


## Extending primitive components


It may be desireable to alter some portion of a primitive component while leaving most behaviors intact. Though [usually not advised][sleep at night], in rare instances it might make sense to extend one of Victory's primitive components. This pattern is used to create react native compatible versions of Victory components. In the example code shown below, the react native compatible version of `Point` is created by extending `Point` and overriding the `renderPoint` method to render `react-native-svg` components rather than `svg` elements.


```jsx
import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Point } from "victory-core";

export default class extends Point {
  renderPoint(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Path d={path} {...nativeStyle} {...events}/>;
  }
}
```


[Extending components can be very problematic][sleep at night], and caution should be exercised. Extending [primitive components] requires deep, and up-to-date knowledge of the component code. Extending more complex Victory components is not advised.

The following example shows a custom `GradientArea` component that extends from `Area`. The `renderArea` method is completely overridden in order to render an area path with a custom gradient. This is a convenient shortcut, but it would be safer to write a `GradientArea` component from scratch.


```playground_norender
// This customized component is supplied to VictoryArea
class GradientArea extends Area {
  toGrayscale(color) {
      const integerColor = parseInt(color.replace("#", ""), 16);
      const r = (integerColor >> 16) & 255;
      const g = (integerColor >> 8) & 255;
      const b = integerColor & 255;
      const gray = parseInt(0.299 * r + 0.587 * g + 0.114 * b, 10);
      return `rgb(${gray}, ${gray}, ${gray})`;
  }

  // This method exists in Area, and is completely overridden for the custom component.
  renderArea(path, style, events) {
    const gradientId = `gradient-${Math.random()}`;
    const areaStyle = Object.assign(
      {}, style, {fill: `url(${location.href}#${gradientId})`}
    );
    const percent = `${this.props.percent}%`;
    const gray = this.toGrayscale(style.fill)
    return (
      <g>
        <defs>
          <linearGradient id={gradientId}>
              <stop offset="0%" stopColor={style.fill}/>
              <stop offset={percent} stopColor={style.fill}/>
              <stop offset={percent} stopColor={gray}/>
              <stop offset="100%" stopColor={gray}/>
          </linearGradient>
        </defs>
        <path key="area" style={areaStyle} d={path} {...events}/>
      </g>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { percent: 64 };
  }

  getStreamData() {
    return range(7).map((i) => {
      return range(26).map((j) => {
        return {
          _x: j,
          _y1: (10 - i) * random(10 - i, 20 - 2 * i),
          _y0: -1 * (10 - i) * random(10 - i, 20 - 2 * i)
        };
      });
    });
  }

  render() {
    const streamData = this.getStreamData();

    const colors = [
      "#006064", "#00796B", "#8BC34A", "#DCE775",
      "#FFF59D", "#F4511E", "#c33409"
    ];

    return (
      <VictoryChart
        domain={{x: [0, 25], y: [-300, 300]}}
      >
        <VictoryAxis
          style={{
            axis: {stroke: "none"},
            tickLabels: {fill: "none"},
            grid: {stroke: "gray"}
          }}
          tickCount={10}
        />
        <VictoryAxis dependentAxis
          style={{tickLabels: {fontSize: 15}}}
          crossAxis={false}
        />

        {
          streamData.map((d, i) => {
            return (
              <VictoryArea key={i}
                interpolation="monotoneX"
                data={d}
                style={{data: {fill: colors[i]}}}
                dataComponent={
                  <GradientArea percent={this.state.percent}/>
                }
              />
            );
          })
        }
        <VictoryLine
          style={{
            data: {stroke: "#c33409", strokeWidth: 3}
          }}
          data={[
            {x: 25 * this.state.percent / 100, y: -300},
            {x: 25 * this.state.percent / 100, y: 300}
          ]}
        />
      </VictoryChart>
    );
  }
}

ReactDOM.render(<App/>, mountNode)
```


[primitive components]: https://formidable.com/open-source/victory/docs/victory-primitives
[sleep at night]: https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4#.j7h5c0sia

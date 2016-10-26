# Custom Components

Every element that a Victory component renders may be altered or completely replaced. Most components expose `dataComponent`, `labelComponent`, `groupComponent`, and `containerComponent` props. The primitive components that Victory components render by default are simple, stateless components with a consistent set of props whenever possible. These [primitive components] are exported for users to alter, wrap, extend and reference when creating custom components. 

## Altering default components

Victory components set props on their primitive components, but these may be overridden or augmented by setting props directly on the the primitive component instances provided via props. 

```playground
  <VictoryBar
    data={[
      {x: 1, y: 3, label: "A"},
      {x: 2, y: 4, label: "B"},
      {x: 3, y: 7, label: "C"},
      {x: 4, y: 3, label: "D"},
      {x: 5, y: 5, label: "E"},
    ]}
    labelComponent={
      <VictoryLabel angle={90} textAnchor="start" dy={-20}/>
    }
  />
```

## Creating new components

Any component that renders valid svg elements (or elements wrapped in `<foreignObject>`) may be used as a `dataComponent` or `labelComponent` in Victory components. Custom components will be provided with the same props as default components. In the following example, a custom `CatPoint` component is used in place of `Point` in `VictoryScatter`.


```playground_norender
class CatPoint extends React.Component {
  render() {
    const {x, y, datum} = this.props;
    const cat = datum.y >= 0 ? "😻" : "😹";
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
      <VictoryChart height={600}>
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
  static propTypes = {
    datum: React.PropTypes.object,
    x: React.PropTypes.number,
    y: React.PropTypes.number
  };

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
          style={{
            labels: {fontSize: 0},
            data: {stroke: "none"}
          }}
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
      {x: "Nov:, y: 76},
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
      <svg style={styles.parent} viewBox="0 0 500 300">
        <VictoryChart domain={{y: [0, 100]}}>
          <VictoryAxis
            style={{
              axis: {strokeWidth: 1},
              ticks: {strokeWidth: 1},
              tickLabels: {fontSize: 8}
            }}
          />
          <VictoryGroup data={pieData}>
            <VictoryLine/>
            <VictoryScatter
              dataComponent={<CustomPie />}
            />
          </VictoryGroup>
        </VictoryChart>
      </svg>
    );
  }
}

ReactDOM.render(<CustomDataComponent/>, mountNode)
```


## Extending primitive components


It may be desireable to alter some portion of a primitive component while leaving most behaviors intact. In this case, it might make sense to extend one of Victory's primitive components. This pattern is used to create react native compatible versions of Victory components. In the example code shown below, the react native compatible version of `Point` is created by extending `Point` and overriding the `renderPoint` method to render `react-native-svg` components rather than `svg` elements.


```
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


Be careful when extending react components. Link to extending react components and sleeping at night

stream graph example

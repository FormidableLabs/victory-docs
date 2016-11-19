# Tooltips

[`VictoryTooltip`] is a label component with `defaultEvents` It renders a customizeable flyout container as well as a `VictoryLabel` component. `VictoryTooltip` can be used with any Victory component by setting the `labelComponent` prop like so `labelComponent={<VictoryTooltip/>` 

[`VictoryVoronoiTooltip`] attaches the `VictoryTooltip` label component to an invisible `VictoryVoronoi` data component. `VictoryVoronoi` tooltip is useful for adding tooltips to elements that do not have individual data elements, like `VictoryLine`, or adding tooltips to any element that is too small to hover over effectively. 

This guide discusses customization and advanced usage of tooltips in Victory

## Simple tooltips

The simplest way to add tooltips to a chart is to use `VictoryTooltip` as a `labelComponent` as in the example below:

```playground
<VictoryChart
  domain={{ x: [0, 11], y: [-10, 10] }}
>
  <VictoryBar
    labelComponent={<VictoryTooltip/>}
    data={[
      {x: 2, y: 5, label: "right-side-up"},
      {x: 4, y: -6, label: "upside-down"},
      {x: 6, y: 4, label: "tiny"},
      {x: 8, y: -5, label: "or a little \n BIGGER"},
      {x: 10, y: 7, label: "automatically"}
    ]}
    style={{
      data: {fill: "tomato", width: 20}
    }}
  /> 
</VictoryChart> 
```


When tooltips are added to a chart in this way, `defaultEvents` on `VictoryTooltip` are automatically added to the component using them, in this case `VictoryBar`. By default, `VictoryTooltip` will adjust its position, orientation, and the width and height of its container to match the corresponding data and labels.

## Customizing Tooltips

Tooltips can be customized directly on the the `VictoryTooltip` component

```playground
<VictoryChart
  domain={{ x: [0, 11], y: [-10, 10] }}
>
  <VictoryBar
    labelComponent={
      <VictoryTooltip
        cornerRadius={(d) => d.x > 6 ? 0 : 20}
        pointerLength={(d) => d.y > 0 ? 5 : 20}
        flyoutStyle={{
          stroke: (d) => d.x === 10 ? 
            "tomato" : "black"
        }}
      />
    }
    data={[
      {x: 2, y: 5, label: "right-side-up"},
      {x: 4, y: -6, label: "upside-down"},
      {x: 6, y: 4, label: "tiny"},
      {x: 8, y: -5, label: "or a little \n BIGGER"},
      {x: 10, y: 7, label: "automatically"}
    ]}
    style={{
      data: {fill: "tomato", width: 20}
    }}
  /> 
</VictoryChart> 
```

`VictoryTooltip` is composed of [`VictoryLabel`] and the primitive [`Flyout`] component. Both of these components are highly configurable, but may also be replaced if necessary.

```playground_norender
class CustomFlyout extends React.Component {
  render() {
    const {x, y, orientation} = this.props;
    const newY = orientation === "top" ? y - 25 : y + 25;
    return (
      <g>
        <circle cx={x} cy={newY} r="20" stroke="tomato" fill="none"/>
        <circle cx={x} cy={newY} r="25" stroke="orange" fill="none"/>
        <circle cx={x} cy={newY} r="30" stroke="gold" fill="none"/>
      </g>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <VictoryChart
          domain={{ x: [0, 11], y: [-10, 10] }}
        >
          <VictoryBar
            labelComponent={
              <VictoryTooltip
                flyoutComponent={<CustomFlyout/>}
              />
            }
            data={[
              {x: 2, y: 5, label: "A"},
              {x: 4, y: -6, label: "B"},
              {x: 6, y: 4, label: "C"},
              {x: 8, y: -5, label: "D"},
              {x: 10, y: 7, label: "E"}
            ]}
            style={{
              data: {fill: "tomato", width: 20},
              labels: { fill: "tomato"}
            }}
          /> 
        </VictoryChart> 
    );
  }
}
ReactDOM.render(<App/>, mountNode);
```

## Voronoi Tooltips

`VictoryVoronoiTooltip` renders a transparent voronoi diagram with `VictoryTooltip` attached. In the example below the voronoi diagram has been colored to be visible:

```playground
<VictoryVoronoiTooltip
  data={
    range(20).map((i) => {
      return {
        x: random(600),
        y: random(600),
        label: `label-${i}`
      };
    })
  }
  style={{
    data: { stroke: "black", strokeWidth: 2 }
  }}
/>  
```

Voronoi tooltips are useful for adding tooltips to a line, or adding tooltips to data points that are too small to hover over effectively. Use `VictoryGroup`to provide the same data and styles to several components. This is especially useful when adding voronoi tooltips to a component, as the data required by the tooltip, should be identical to the data required by the other components.

```playground
<VictoryChart
        domain={{y: [-7, 7]}}
      >
        <VictoryGroup
          data={[
            {x: 1, y: 1},
            {x: 2, y: 3},
            {x: 3, y: -2},
            {x: 4, y: 4},
            {x: 5, y: 5},
            {x: 6, y: -5},
            {x: 7, y: 3},
            {x: 8, y: 1},
            {x: 9, y: 5}
          ]}
        >
          <VictoryLine
            style={{
              data: { stroke: "tomato", strokeWidth: }
            }}
          />
          <VictoryVoronoiTooltip
            labels={(d) => `x: ${d.x} \n y: ${d.y}`}
          />
        </VictoryGroup>
      </VictoryChart>
```


## Tooltips with Other Events

`VictoryTooltip` automatically attaches events to data components. When events of the same type are specified for data components, it is necessary to reconcile events so that tooltips still work. For web, the default tooltip events are: 

```jsx
static defaultEvents = [{
  target: "data",
  eventHandlers: {
    onMouseOver: () => {
      return {
        target: "labels",
        mutation: () => ({ active: true })
      };
    },
    onMouseOut: () => {
      return {
        target: "labels",
        mutation: () => ({ active: false })
      };
    }
  }
}];
```

When other `onMouseOver` and `onMouseOut` events are specified for data, the event returns described above must be added to the events for tooltips to continue to work properly. 

```playground
<VictoryChart
  domain={{ x: [0, 11], y: [-10, 10] }}
>
  <VictoryBar
    labelComponent={<VictoryTooltip/>}
    data={[
      {x: 2, y: 5, label: "A"},
      {x: 4, y: -6, label: "B"},
      {x: 6, y: 4, label: "C"},
      {x: 8, y: -5, label: "D"},
      {x: 10, y: 7, label: "E"}
    ]}
    style={{
      data: {fill: "tomato", width: 20}
    }}
    events={[{
      target: "data",
      eventHandlers: {
        onMouseOver: () => {
          return [
            {
              target: "data",
              mutation: () => ({style: {fill: "gold", width: 30}})
            }, {
              target: "labels",
              mutation: () => ({ active: true })
            }
          ];
        },
        onMouseOut: () => {
          return [
            {
              target: "data",
              mutation: () => null
            }, {
              target: "labels",
              mutation: () => ({ active: false })
            }
          ];
        }
      }
    }]}
  /> 
</VictoryChart> 
``` 

## Wrapping VictoryTooltip

The events that control `VictoryTooltip` are stored on the static `defaultEvents` property. Wrapped instances of `VictoryTooltip` will need to replicate or hoist this property in order to add automatic events to the components that use them.


```playground_norender
class CustomTooltip extends React.Component {
  static defaultEvents = VictoryTooltip.defaultEvents
  render() {
    const {x, y} = this.props;
    const rotation = `rotate(45 ${x} ${y})`
    return (
      <g transform={rotation}>
        <VictoryTooltip {...this.props} renderInPortal={false}/>
      </g>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <VictoryChart
          domain={{ x: [0, 11], y: [-10, 10] }}
        >
          <VictoryBar
            labelComponent={<CustomTooltip/>}
            data={[
              {x: 2, y: 5, label: "A"},
              {x: 4, y: -6, label: "B"},
              {x: 6, y: 4, label: "C"},
              {x: 8, y: -5, label: "D"},
              {x: 10, y: 7, label: "E"}
            ]}
            style={{
              data: {fill: "tomato", width: 20}
            }}
          /> 
        </VictoryChart> 
    );
  }
}
ReactDOM.render(<App/>, mountNode);
```


[`VictoryTooltip`]: https://formidable.com/open-source/victory/docs/victory-tooltip
[`VictoryVoronoiTooltip`]: https://formidable.com/open-source/victory/docs/victory-voronoi-tooltip
[`VictoryLabel`]: http://formidable.com/open-source/victory/docs/victory-label
[`Flyout`]: https://formidable.com/open-source/victory/docs/victory-primitives#flyout
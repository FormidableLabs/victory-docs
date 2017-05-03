# createContainer

`createContainer` makes a container component with multiple behaviors. It allows you to effectively
combine any two of the following containers: `VictoryBrushContainer`,
`VictorySelectionContainer`, `VictoryVoronoiContainer`, or `VictoryZoomContainer`.

```js
const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
```

## Arguments

The function takes two `behavior` arguments as strings:

```js
createContainer(behaviorA, behaviorB)
```

### behavior

Each `behavior` must be one of the following strings: `"brush"`, `"selection"`, `"voronoi"`, and `"zoom"`.
The resulting container uses the events from both behaviors.
For example, if both behaviors use the click event (like zoom and selection) the combined container
will trigger both behaviors' events on each click.

**Note**: Order of the behaviors matters in a few cases.
It is recommended to use `"zoom"` before any other behaviors: for example,
`createContainer("zoom", "voronoi")` instead of `createContainer("voronoi", "zoom")`.

## Example

The following example creates a custom container that combines `VictoryVoronoiContainer` and
`VictoryZoomContainer`. Hovering over the chart will use Voronoi to highlight data points,
while scrolling and dragging will zoom and pan.

```jsx
import React from "react";
import {
  createContainer,
  VictoryChart,
  VictoryScatter
} from "victory";

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

const App = () => (
  <div>
    <VictoryChart
      containerComponent={<VictoryZoomVoronoiContainer labels={(d) => `y: ${d.y}`} />}
    >
      <VictoryScatter />
    </VictoryChart>
  </div>
);
```

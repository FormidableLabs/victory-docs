# VictoryVoronoiContainer

`VictoryVoronoiContainer` is used to associate a mouse position with its nearest data point(s).
When `VictoryVoronoiContainer` is added as the `containerComponent` of your chart, changes in mouse
position will add and remove the `active` prop on appropriate elements in the components of the
chart.


```jsx
<VictoryChart containerComponent={<VictoryVoronoiContainer/>}>
  <VictoryLine data={data} />
  <VictoryBar data={moreData}/>
</VictoryChart>
```

## Props

`VictoryVoronoiContainer` uses a superset of props used by [VictoryContainer].

### dimension

When the `dimension` prop is set, voronoi selection will only take the given dimension into account.
For example, when `dimension` is set to "x", all data points matching a particular x mouse position
will be activated regardless of y value. When this prop is not given, voronoi selection is
determined by both x any y values.

### radius

When the `radius` prop is set, the voronoi areas associated with each data point will be no larger
than the given radius. This prop should be given as a number.

### voronoiPadding

When the `voronoiPadding` prop is given, the area of the chart that will trigger voronoi events is
reduced by the given padding on every side. By default, no padding is applied, and the entire range
of a given chart may trigger voronoi events. This prop should be given as a number.

### onActivated

The `onActivated` prop accepts a function to be called whenever new data points are activated. The
function is called with the parameter `points`-- an array of data objects.

### onDeactivated

The `onDeactivated` prop accepts a function to be called whenever previously activated points are  The
function is called with the parameter `points`-- an array of active data objects.

## labels

When a `labels` prop is provided to `VictoryVoronoiContainer` it will render a label component
rather than activating labels on the child components it renders. This is useful for creating multi-
point tooltips. This prop should be given as a function to be called with datum for each active
point.

*examples:* `label={(d) => "y: " + d.y}`

### labelComponent

The `labelComponent` prop specified the component that will be rendered when `labels` are defined
on `VictoryVoronoiContainer`. If the `labels` prop is omitted, no label component will be rendered.

[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container

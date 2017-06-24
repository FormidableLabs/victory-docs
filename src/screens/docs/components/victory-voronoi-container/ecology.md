# VictoryVoronoiContainer

`VictoryVoronoiContainer` adds the ability to associate a mouse position with the data point(s)
closest to it. When this container is added to a chart, changes in mouse position will add the `active`
prop to to data and label components closest to the current mouse position. The closeness of data
points to a given position is determined by calculating a [voronoi diagram] based on the data of
every child `VictoryVoronoiContainer` renders. This container is useful for adding hover interactions,
like tooltips, to small data points, or charts with very dense or overlapping data. Read
[this guide] to learn how to use `VictoryVoronoiContainer` with tooltips.

`VictoryVoronoiContainer` may be used with any Victory component that works with an x-y coordinate
system, and should be added as the `containerComponent` of the top-level component.
However, the component that uses it must be standalone
(`standalone={true}`), which is the default for all top-level Victory components.

```playground
<VictoryChart
  containerComponent={
    <VictoryVoronoiContainer
      labels={(d) => `${round(d.x, 2)}, ${round(d.y, 2)}`}
    />
  }
>
  <VictoryScatter
    y={(datum) => Math.sin(2 * Math.PI * datum.x)}
  />
</VictoryChart>
```

## Props

`VictoryVoronoiContainer` uses a superset of props used by [VictoryContainer]. All props are optional.

### dimension

When the `dimension` prop is set, voronoi selection will only take the given dimension into account.
For example, when `dimension` is set to "x", all data points matching a particular x mouse position
will be activated regardless of y value. When this prop is not given, voronoi selection is
determined by both x any y values.

*example:* `dimension="x"`

### radius

When the `radius` prop is set, the voronoi areas associated with each data point will be no larger
than the given radius. This prop should be given as a number.

*example:* `radius={25}`

### voronoiPadding

When the `voronoiPadding` prop is given, the area of the chart that will trigger voronoi events is
reduced by the given padding on every side. By default, no padding is applied, and the entire range
of a given chart may trigger voronoi events. This prop should be given as a number.

*example:* `voronoiPadding={5}`

### onActivated

The `onActivated` prop accepts a function to be called whenever new data points are activated.
The function is called with the parameter `points`, an array of data objects.

*example:* `onActivated={(points) => filterList(points)}`


### onDeactivated

The `onDeactivated` prop accepts a function to be called whenever points are deactivated.
The function is called with the parameter `points`, an array of the newly-deactivated data objects.

*example:* `onDeactivated={(points) => removeFromList(points)}`

### labels

When a `labels` prop is provided to `VictoryVoronoiContainer` it will render a label component
rather than activating labels on the child components it renders. This is useful for creating multi-
point tooltips. This prop should be given as a function to be called with datum for each active
point.

*example:* `label={(d) => "y: " + d.y}`

### labelComponent

The `labelComponent` prop specified the component that will be rendered when `labels` are defined
on `VictoryVoronoiContainer`. If the `labels` prop is omitted, no label component will be rendered.

*default:* `labelComponent={<VictoryTooltip/>}`

[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[voronoi diagram]: https://github.com/d3/d3-voronoi

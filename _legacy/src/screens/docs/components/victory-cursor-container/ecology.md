# VictoryCursorContainer

`VictoryCursorContainer` adds a cursor to a chart to inspect coordinates.
The cursor can either be a 2-dimensional crosshair, or a 1-dimensional line.
The cursor moves with the mouse (or on touch on mobile devices) along the visible domain of the chart.
The cursor can also display a label for the active coordinates using the `cursorLabel` prop.

`VictoryCursorContainer` may be used with any Victory component that works with an x-y coordinate
system, and should be added as the `containerComponent` of the top-level component.
However, the component that uses it must be standalone
(`standalone={true}`), which is the default for all top-level Victory components.

Note that the cursor allows you to inspect the entire domain, not just the data points.
If you would like to instead highlight only the data points, consider using [VictoryVoronoiContainer].

```playground
<VictoryScatter
  containerComponent={
    <VictoryCursorContainer
      cursorLabel={(d) => `${round(d.x, 2)}, ${round(d.y, 2)}`}
    />
  }
/>
```

## Props

`VictoryCursorContainer` uses a superset of props used by [VictoryContainer]. All props are optional.

### dimension

When the `dimension` prop is set, the cursor will be a line to inspect the given dimension
(either "x" or "y"). When this prop is not specified, the cursor will be a 2-dimensional crosshair.
For example, if you would like to inspect the time of time-series data, set `dimension={"x"}`;
the cursor will then be a vertical line that will inspect the time value of the current mouse position.

*example:* `dimension="x"`

### cursorComponent

The `cursorComponent` prop takes a component instance which will be used to render a cursor element. The new element created will be supplied with `x1`, `y1`, `x2` and `y2` positioning props. If a `cursorComponent` is not supplied, a new [Line] component will be rendered.

*default:* `cursorComponent={<Line/>}`

### cursorLabel

The `cursorLabel` prop defines the label that will appear next to the cursor.
A label will only appear if `cursorLabel` is set. This prop should be given as a function of a point (an Object with `x` and `y` properties).

*example:* `cursorLabel={(point) => point.x}`

### cursorLabelComponent

The `cursorLabelComponent` prop takes a component instance which will be used to render a label for the cursor. The new element created from the passed `cursorLabelComponent` will be supplied with the following props: `x`, `y`, `active`, `text`. If `cursorLabelComponent` is omitted, a new [VictoryLabel] will be created with the props described above.

*default:* `cursorLabelComponent={<VictoryLabel/>}`

### cursorLabelOffset

The `cursorLabelOffset` prop determines the pixel offset of the cursor label from the cursor point.
This prop should be an Object with `x` and `y` properties, or a number to be used for both dimensions.

*default:* `cursorLabelOffset={{ x: 5, y: -10 }}`

### defaultCursorValue

Whenever the mouse is not over the chart, the cursor will not be displayed.
If instead you would like to keep it displayed, use the `defaultCursorValue` prop to set the default value. The prop should be a point (an Object with `x` and `y` properties) for 2-dimensional cursors, or a number for 1-dimensional cursors.

*examples:* `defaultCursorValue={{x: 1, y: 1}}`, `defaultCursorValue={0}`

### onChange

If provided, the `onChange` function will be called every time the cursor value changes,
with the new value as its only argument. A common use for `onChange` is to save the cursor value to state and use it in another part of the view.

*example:* `onChange={(value) => this.setState({cursorValue: value})}`

[VictoryVoronoiContainer]: https://formidable.com/open-source/victory/docs/victory-voronoi-container
[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[Line]: https://formidable.com/open-source/victory/docs/victory-primitives#line

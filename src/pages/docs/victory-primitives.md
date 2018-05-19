---
id: 21
title: VictoryPrimitives
category: more
scope: null
---
# Victory Primitives

Victory is built around a set of simple, stateless components. Along with [VictoryContainer][], [VictoryClipContainer][], and [VictoryLabel][], the following list represents every simple element a Victory component might render. These simple components are responsible for supplying props to primitive components. Victory maintains a small subset of primitive components with additional logic in place to prevent unnecessary rendering. Extracting every rendered element into its own component allows Victory to support both web and React Native applications with very little additional code, as only a few components need to be modified to render [react-native-svg][] elements rather than SVG elements. These primitives are also exposed for users to wrap, extend or reference when creating their own custom rendered components.

## Primitive Components

Each of these primitive components renders SVG elements. Custom `shouldComponentUpdate` logic is added to improve performance. The following components are the only Victory components that render SVG elements with the exception of `VictoryContainer` and `VictoryPortal`. These elements are used by other simple components such as `Bar` and `Area`. Their render methods are shown so that users may easily override their behavior.

### Circle

Used by `VictoryClipContainer` and `Voronoi`

```jsx
render() {
  return (
    <circle
      cx={this.props.cx}
      cy={this.props.cy}
      r={this.props.r}
      className={this.props.className}
      clipPath={this.props.clipPath}
      transform={this.props.transform}
      style={this.props.style}
      role={this.props.role || "presentation"}
      shapeRendering={this.props.shapeRendering || "auto"}
      {...this.props.events}
    />
  );
}
  ```

### ClipPath

Used by `VictoryClipContainer` and `Voronoi`

```jsx
render() {
  return (
    <defs>
      <clipPath id={this.props.clipId}>
        {this.props.children}
      </clipPath>
    </defs>
  );
}
```
### Line

Used by `Axis`, `Candle`, and `ErrorBar`

```jsx
render() {
  return (
    <line
      x1={this.props.x1}
      x2={this.props.x2}
      y1={this.props.y1}
      y2={this.props.y2}
      className={this.props.className}
      clipPath={this.props.clipPath}
      transform={this.props.transform}
      style={this.props.style}
      role={this.props.role || "presentation"}
      shapeRendering={this.props.shapeRendering || "auto"}
      {...this.props.events}
    />
  );
}
```
### Path

Used by `Arc`, `Area`, `Bar`, `Curve`, `Flyout`, `Point`, `Slice`, and `Voronoi`

```jsx
render() {
  return (
    <path
      d={this.props.d}
      transform={this.props.transform}
      className={this.props.className}
      clipPath={this.props.clipPath}
      style={this.props.style}
      role={this.props.role || "presentation"}
      shapeRendering={shapeRendering || "auto"}
      {...this.props.events}
    />
  );
}
```
### Rect

Used by `VictoryClipPath`, `Border`, and `Candle`

```jsx
render() {
  return (
    <rect
      x={this.props.x}
      y={this.props.y}
      rx={this.props.rx}
      ry={this.props.ry}
      width={this.props.width}
      height={this.props.height}
      className={this.props.className}
      clipPath={this.props.clipPath}
      style={this.props.style}
      transform={this.props.transform}
      role={this.props.role || "presentation"}
      shapeRendering={this.props.shapeRendering || "auto"}
      {...this.props.events}
    />
  );
}
```
### Text

Used by `VictoryLabel`

```jsx
render() {
  return (
    <text
      x={this.props.x}
      dx={this.props.dx}
      y={this.props.y}
      dy={this.props.dy}
      className={this.props.className}
      transform={this.props.transform}
      style={this.props.style}
      {...this.props.events}
    >
      {this.props.title && <title>{this.props.title}</title>}
      {this.props.desc && <desc>{this.props.desc}</desc>}
      {this.props.children}
    </text>
  );
}
```
### TSpan

Used by `VictoryLabel`

```jsx
render() {
  return (
    <tspan
      x={this.props.x}
      y={this.props.y}
      dx={this.props.dx}
      dy={this.props.dy}
      textAnchor={this.props.textAnchor}
      className={this.props.className}
      style={this.props.style}
      {...this.props.events}
    >
      {this.props.content}
    </tspan>
  );
}
```

## Simple Components

### Arc

[VictoryPolarAxis][] uses the `Arc` primitive to draw circular axes and grid lines. `Arc` renders a `<Path>` element. [View the source][arc]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered path
  - `closedPath` *boolean* a flag signifying whether this arc is should render a closed path
  - `cx` *number* the x coordinate of the center of the arc path
  - `cy` *number* the y coordinate of the center of the arc path
  - `datum` *any* the data point or tick corresponding to this arc
  - `endAngle` *number* the end angle of the arc given in degrees
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements *default* `<g/>`
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `r` *number* the radius of the arc
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `startAngle` *number* the start angle of the arc given in degrees
  - `style` *object* the styles to apply to the rendered element

### Area

[VictoryArea][] uses `Area` to represent an entire dataset. `Area` renders a `<Path/>` element, or a group of paths if the stroke of the area should be rendered in a different style from the filled section of the area. [View the source][area]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered path
  - `data` *array* the entire dataset used to define the area
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements *default* `<g/>`
  - `interpolation` *string* the interpolation to use when calculating a path
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `style` *object* the styles to apply to the rendered element

### Axis

  The `Axis` component renders straight lines. This component is used to render grids, ticks, and axis lines in [VictoryAxis][]. [View the source][axis]
  **Note** `Axis` is also exported as `Grid`

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this line
  - `events` *object* events to attach to the rendered element
  - `index` *number* the index of this line within the dataset
  - `lineComponent` *element* the rendered line element  *default* `<Line/>`
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `x1` *number* the x coordinate of the beginning of the line
  - `x2` *number* the x coordinate of the end of the line
  - `y1` *number* the y coordinate of the beginning of the line
  - `y2` *number* the y coordinate of the end of the line

### Bar

[VictoryBar][] uses `Bar` to represent a single data point as a bar extending horizontally or vertically from the independent axis. `Bar` renders a `<Path>` element. [View the source][bar]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `alignment` *"start", "middle", or "end" specifies how a bar path should be aligned in relation to its data point
  - `barRatio` *number* a number between zero and one that will be used to calculate bar width when an explicit width is not given
  - `className` *string* the class name that will be applied to the rendered path
  - `cornerRadius` *number, function or object* the number of pixels of corner radius to apply when calculating a bar path
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this bar
  - `events` *object* events to attach to the rendered element
  - `index` *number* the index of this bar within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `padding` *number* the padding of the parent chart (used to calculate default bar width if `style.width` is not supplied)
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `style` *object* the styles to apply to the rendered element
  - `width` *number* the width of parent chart (used to calculate default bar width `style.width` is not supplied)
  - `x` *number* the x coordinate of the top of the bar
  - `y0` *number* the y coordinate of the baseline of the bar
  - `y` *number* the y coordinate of the top of the bar


### Box

[VictoryLegend][] uses the `Box` component to draw a border around a legend area. `Box` renders a `<Rect/>` element. [View the source][border]
**Note** `Box` also exported as `Border`

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `events` *object* events to attach to the rendered element
  - `height` *number* the height of the `<rect/>` element
  - `rectComponent` *element* the rendered path element  *default* `<Rect/>`
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `width` *number* the width of the `<rect/>` element
  - `x` *number* the x coordinate of the upper-left corner of the `<rect/>` element
  - `y` *number* the y coordinate of the upper-left corner of the `<rect/>` element

### Candle

[VictoryCandlestick][] uses `Candle` to represent a single data point as a candle. `Candle` renders a group with `<Rect>` and `<Line>` elements. [View the source][candle]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `candleHeight` *number* the height of the candle (abs(open - close))
  - `className` *string* the class name that will be applied to the rendered element
  - `close` *number* the y coordinate of the closing value
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this candle
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements *default* `<g/>`
  - `high` *numbner* the y coordinate of the high value
  - `index` *number* the index of this candle within the dataset
  - `lineComponent` *element* the rendered line element  *default* `<Line/>`
  - `low` *number* the y coordinate of the low value
  - `open` *number* the y coordinate of the opening value
  - `padding` *number* the padding of the parent chart (used to calculate default candle width if `style.width` is not supplied)
  - `rectComponent` *element* the rendered path element  *default* `<Rect/>`
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `width` *number* the width of parent chart (used to calculate default candle width `style.width` is not supplied)
  - `widthStrokeWidth` *number* the stroke width of the candle wick. (style.strokeWidth will be used when this value is not given)
  - `x` *number* the x coordinate of the candle

### Curve

[VictoryLine][] uses `Curve` to represent an entire dataset as a line or curve. `Curve` renders a `<Path>` element. [View the source][curve]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `data` *array* the entire dataset used to define the curve
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements *default* `<g/>`
  - `interpolation` *string* the interpolation to use when calculating a path
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `style` *object* the styles to apply to the rendered element

### ErrorBar

[VictoryErrorBar][] uses `ErrorBar` to render x and y error bars. `ErrorBar` renders a group of `<Line>` elements. [View the source][errorbar]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `borderWidth` *number* the width of the cross-hairs on the end of each error bar *default: 10*
  - `className` *string* the class name that will be applied to the rendered element
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this error bar
  - `errorX` *number, array, or boolean* errors in the x dimension.
  - `errorY` *number, array, or boolean* errors in the y dimension.
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements *default* `<g/>`
  - `index` *number* the index of this error bar within the dataset
  - `lineComponent` *element* the rendered line element  *default* `<Line/>`
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `x` *number* the x coordinate of the center of the error bar
  - `y` *number* the y coordinate of the center of the error bar


### Flyout

[VictoryTooltip][] uses `Flyout` to render a flyout style path around text. `Flyout` renders `<Path>` element. [View the source][flyout]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `cornerRadius` *number* the corner radius of the flyout
  - `data` *array* the entire dataset if applicable
  - `datum` *object* the data point corresponding to this flyout if applicable
  - `dx` *number* offset in the x dimension.
  - `dy` *number* offset in the y dimension.
  - `events` *object* events to attach to the rendered element
  - `height` *number* the height of the flyout
  - `index` *number* the index of this flyout within the dataset
  - `orientation` *"top", "bottom", "left", "right"*
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `pointerLength` *number* the length of the triangular pointer
  - `pointerWidth` *number* the width of the base of the triangular pointer
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `width` *number* the width of the flyout
  - `x` *number* the x coordinate of data point associated with this flyout
  - `y` *number* the y coordinate of data point associated with this flyout


### Point

[VictoryScatter][] uses `Point` to render each point in a scatter plot. `Point` renders a `<Path>` element. [View the source][point]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this point
  - `events` *object* events to attach to the rendered element
  - `index` *number* the index of this point within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `size` *number* the size of the point
  - `style` *object* the styles to apply to the rendered element
  - `symbol` *"circle", "diamond", "plus", "square", "star", "triangleDown", "triangleUp"* which symbol the point should render
  - `x` *number* the x coordinate of the center of the point
  - `y` *number* the y coordinate of the center of the point


### Slice

[VictoryPie][] uses `Slice` to render each slice in a pie chart. `Slice` renders a `<Path>` element. [View the source][slice]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this slice
  - `events` *object* events to attach to the rendered element
  - `index` *number* the index of this slice within the dataset
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `pathFunction` *function* a function that calculates the path of a given slice.
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `slice` *object* an object specifying the startAngle, endAngle, padAngle, and data of the slice
  - `style` *object* the styles to apply to the rendered element


### Voronoi

  [VictoryVoronoi][] uses `Voronoi` to render voronoi polygons. `Voronoi` renders either a `<Path>` element corresponding to a voronoi polygon, or a `<Circle/>` clipped with a `<ClipPath>` defined by the path of the polygon. [View the source][voronoi]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `circleComponent` *element* the rendered circle element  *default* `<Circle/>`
  - `className` *string* the class name that will be applied to the rendered element
  - `clipPathComponent` *element* the rendered clipPath element  *default* `<ClipPath/>`
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this voronoi polygon
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the rendered group element  *default* `<g/>`
  - `index` *number* the index of this voronoi polygon within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `polygon` *array* an array of points defining the polygon
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `size` *number* the maximum size of the voronoi polygon
  - `style` *object* the styles to apply to the rendered element
  - `x` *number* the x coordinate of the data point
  - `y` *number* the y coordinate of the data point

  ### Whisker

[VictoryBoxPlot][] uses the `Whisker` component to draw whiskers for the minimum and maximum values in a box plot. `Whisker` renders a group of `<Line/>` elements. [View the source][whisker]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the rendered group element  *default* `<g/>`
  - `lineComponent` *element* the rendered line element  *default* `<Line/>`
  - `majorWhisker` *object* an object with values `x1`, `x2`, `y1`, `y2` describing the major whisker line
  - `minorWhisker` *object* an object with values `x1`, `x2`, `y1`, `y2` describing the minor whisker line
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered element
  - `style` *object* the styles to apply to the rendered element


[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[VictoryClipContainer]: https://formidable.com/open-source/victory/docs/victory-clip-container
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[react-native-svg]: https://github.com/react-native-community/react-native-svg
[arc]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/arc.js
[VictoryPolarAxis]: https://formidable.com/open-source/victory/docs/victory-polar-axis
[area]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/area.js
[VictoryArea]: https://formidable.com/open-source/victory/docs/victory-area
[bar]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/bar.js
[border]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/border.js
[VictoryBar]: https://formidable.com/open-source/victory/docs/victory-bar
[candle]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/candle.js
[VictoryCandlestick]: https://formidable.com/open-source/victory/docs/victory-candlestick
[curve]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/curve.js
[VictoryLine]: https://formidable.com/open-source/victory/docs/victory-line
[errorbar]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/error-bar.js
[VictoryErrorBar]: https://formidable.com/open-source/victory/docs/victory-errorbar
[flyout]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/flyout.js
[VictoryTooltip]: https://formidable.com/open-source/victory/docs/victory-tooltip
[VictoryAxis]: https://formidable.com/open-source/victory/docs/victory-axis
[axis]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/axis.js
[point]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/point.js
[slice]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/slice.js
[whisker]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/whisker.js
[VictoryPie]: https://formidable.com/open-source/victory/docs/victory-pie
[voronoi]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/voronoi.js
[VictoryVoronoi]: https://formidable.com/open-source/victory/docs/victory-voronoi
[VictoryScatter]: https://formidable.com/open-source/victory/docs/victory-scatter
[VictoryLegend]: https://formidable.com/open-source/victory/docs/victory-legend
[VictoryBoxPlot]: https://formidable.com/open-source/victory/docs/victory-boxplot

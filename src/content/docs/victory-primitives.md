---
id: 21
title: VictoryPrimitives
category: more
type: docs
scope: null
---
# Victory Primitives

Victory is built around a set of simple, stateless components. Along with [VictoryContainer][], [VictoryClipContainer][], and [VictoryLabel][], the following list represents every simple element a Victory component might render. These simple components are responsible for supplying props to primitive components. Victory maintains a small subset of primitive components with additional logic in place to prevent unnecessary rendering. Extracting every rendered element into its own component allows Victory to support both web and React Native applications with very little additional code, as only a few components need to be modified to render [react-native-svg][] elements rather than SVG elements. These primitives are also exposed for users to wrap, extend or reference when creating their own custom rendered components.

## Primitive Components

Each of these primitive components renders SVG elements. The following components are the only Victory components that render SVG elements with the exception of `VictoryContainer` and `VictoryPortal`. These elements are used by other simple components such as `Bar` and `Area`.

### Circle

Used by `VictoryClipContainer` and `Voronoi`

```jsx
const Circle = (props) => <circle vectorEffect="non-scaling-stroke" {...props} />;
  ```

### ClipPath

Used by `VictoryClipContainer` and `Voronoi`

```jsx
const ClipPath = (props) => (
  <defs>
    <clipPath id={props.clipId}>{props.children}</clipPath>
  </defs>
);
```
### Line

Used by `Axis`, `Candle`, and `ErrorBar`

```jsx
const Line = (props) => <line vectorEffect="non-scaling-stroke" {...props} />;
```
### Path

Used by `Arc`, `Area`, `Bar`, `Curve`, `Flyout`, `Point`, `Slice`, and `Voronoi`

```jsx
const Path = (props) => <path {...props} />;
```
### Rect

Used by `VictoryClipPath`, `Border`, and `Candle`

```jsx
const Rect = (props) => <rect vectorEffect="non-scaling-stroke" {...props} />;
```
### Text

Used by `VictoryLabel`

```jsx
const Text = (props) => {
  const { children, title, desc, ...rest } = props;
  return (
    <text {...rest}>
      {title && <title>{title}</title>}
      {desc && <desc>{desc}</desc>}
      {children}
    </text>
  );
};
```
### TSpan

Used by `VictoryLabel`

```jsx
const TSpan = (props) => <tspan {...props} />;
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
  - `id` *string or number* an id to apply to the rendered component
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `r` *number* the radius of the arc
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `startAngle` *number* the start angle of the arc given in degrees
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders

### Area

[VictoryArea][] uses `Area` to represent an entire dataset. `Area` renders a `<Path/>` element, or a group of paths if the stroke of the area should be rendered in a different style from the filled section of the area. [View the source][area]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered path
  - `data` *array* the entire dataset used to define the area
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements *default* `<g/>`
  - `id` *string or number* an id to apply to the rendered component
  - `interpolation` *string* the interpolation to use when calculating a path
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders

### LineSegment

  The `LineSegment` component renders straight lines. This component is used to render grids, ticks, and axis lines in [VictoryAxis][]. [View the source][axis]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this line
  - `events` *object* events to attach to the rendered element
  - `id` *string or number* an id to apply to the rendered component
  - `index` *number* the index of this line within the dataset
  - `lineComponent` *element* the rendered line element  *default* `<Line/>`
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders
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
  - `barWidth` *number or function* A prop defining the width of the bar. When this prop is given as a function, it will be called with the rest of the props supplied to `Bar`.
  - `className` *string* the class name that will be applied to the rendered path
  - `cornerRadius` *number, function or object* the number of pixels of corner radius to apply when calculating a bar path. When this prop is given as a function, it will be called with the rest of the props supplied to `Bar`. When given as an object, this prop may include values for top, bottom, topLeft, topRight, bottomLeft and bottomRight, with more specific values overriding less specific values
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this bar
  - `events` *object* events to attach to the rendered element
  - `id` *string or number* an id to apply to the rendered component
  - `index` *number* the index of this bar within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders
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
  - `id` *string or number* an id to apply to the rendered component
  - `rectComponent` *element* the rendered path element  *default* `<Rect/>`
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders
  - `width` *number* the width of the `<rect/>` element
  - `x` *number* the x coordinate of the upper-left corner of the `<rect/>` element
  - `y` *number* the y coordinate of the upper-left corner of the `<rect/>` element

### Candle

[VictoryCandlestick][] uses `Candle` to represent a single data point as a candle. `Candle` renders a group with `<Rect>` and `<Line>` elements. [View the source][candle]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `candleRatio` *number* a number between zero and one that will be used to calculate candle width when an explicit width is not given
  - `candleWidth` *number or function* A prop defining the width of the candle. When this prop is given as a function, it will be called with the rest of the props supplied to `Candle`.
  - `className` *string* the class name that will be applied to the rendered element
  - `close` *number* the y coordinate of the closing value
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this candle
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements *default* `<g/>`
  - `high` *number* the y coordinate of the high value
  - `id` *string or number* an id to apply to the rendered component
  - `index` *number* the index of this candle within the dataset
  - `lineComponent` *element* the rendered line element  *default* `<Line/>`
  - `low` *number* the y coordinate of the low value
  - `open` *number* the y coordinate of the opening value
  - `rectComponent` *element* the rendered path element  *default* `<Rect/>`
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders
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
  - `id` *string or number* an id to apply to the rendered component
  - `interpolation` *string* the interpolation to use when calculating a path
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders

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
  - `id` *string or number* an id to apply to the rendered component
  - `index` *number* the index of this error bar within the dataset
  - `lineComponent` *element* the rendered line element  *default* `<Line/>`
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders
  - `x` *number* the x coordinate of the center of the error bar
  - `y` *number* the y coordinate of the center of the error bar


### Flyout

[VictoryTooltip][] uses `Flyout` to render a flyout style path around text. `Flyout` renders `<Path>` element. [View the source][flyout]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `center` *object* the center coordinates of the flyout
  - `className` *string* the class name that will be applied to the rendered element
  - `cornerRadius` *number* the corner radius of the flyout
  - `data` *array* the entire dataset if applicable
  - `datum` *object* the data point corresponding to this flyout if applicable
  - `dx` *number* offset in the x dimension.
  - `dy` *number* offset in the y dimension.
  - `events` *object* events to attach to the rendered element
  - `height` *number* the height of the flyout
  - `id` *string or number* an id to apply to the rendered component
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
  - `transform` *string* a transform that will be supplied to elements this component renders
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
  - `getPath` *function* a function of `x`, `y`, and `size` that returns a path string. When this optional function is provided, it will be used to calculate a path, rather than one of the path functions corresponding to the `symbol`s supported by `Point`.
  - `id` *string or number* an id to apply to the rendered component
  - `index` *number* the index of this point within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `size` *number or function* the size of the point. When this prop is given as a function, it will be called with the rest of the props supplied to `Point`.
  - `style` *object* the styles to apply to the rendered element
  - `symbol` *"circle", "diamond", "plus", "minus", "square", "star", "triangleDown", "triangleUp"* which symbol the point should render. This prop may also be given as a function that returns one of the above options. When this prop is given as a function, it will be called with the rest of the props supplied to `Point`.
  - `transform` *string* a transform that will be supplied to elements this component renders
  - `x` *number* the x coordinate of the center of the point
  - `y` *number* the y coordinate of the center of the point


### Slice

[VictoryPie][] uses `Slice` to render each slice in a pie chart. `Slice` renders a `<Path>` element. [View the source][slice]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `cornerRadius` *number or function* the corner radius to apply to this slice. When this prop is given as a function it will be called with the rest of the props supplied to `Slice`.
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this slice
  - `events` *object* events to attach to the rendered element
  - `id` *string or number* an id to apply to the rendered component
  - `index` *number* the index of this slice within the dataset
  - `innerRadius` *number or function* the inner radius of the slice. When this prop is given as a function it will be called with `datum` and `active`.
  - `padAngle` *number or function* the angular padding to add to the slice. When this prop is given as a function it will be called with the rest of the props supplied to `Slice`.
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `pathFunction` *function* a function that calculates the path of a given slice. When given, this prop will be called with the `slice` object
   - `radius` *number or function* the outer radius of the slice. When this prop is given as a function it will be called with the rest of the props supplied to `Slice`.
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `slice` *object* an object specifying the startAngle, endAngle, padAngle, and data of the slice
  - `sliceEndAngle` *number or function* the end angle the slice. When this prop is given as a function it will be called with the rest of the props supplied to `Slice`.
   - `sliceStartAngle` *number or function* the start angle the slice. When this prop is given as a function it will be called with the rest of the props supplied to `Slice`.
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders


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
  - `id` *string or number* an id to apply to the rendered component
  - `index` *number* the index of this voronoi polygon within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `pathComponent` *element* the rendered path element  *default* `<Path/>`
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `polygon` *array* an array of points defining the polygon
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `size` *number* the maximum size of the voronoi polygon
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders.
  - `x` *number* the x coordinate of the data point
  - `y` *number* the y coordinate of the data point

### Whisker

[VictoryBoxPlot][] uses the `Whisker` component to draw whiskers for the minimum and maximum values in a box plot. `Whisker` renders a group of `<Line/>` elements. [View the source][whisker]

**Props**

  - `active` *boolean* a flag signifying whether the component is active
  - `className` *string* the class name that will be applied to the rendered element
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the rendered group element  *default* `<g/>`
  - `id` *string or number* an id to apply to the rendered component
  - `lineComponent` *element* the rendered line element  *default* `<Line/>`
  - `majorWhisker` *object* an object with values `x1`, `x2`, `y1`, `y2` describing the major whisker line
  - `minorWhisker` *object* an object with values `x1`, `x2`, `y1`, `y2` describing the minor whisker line
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `transform` *string* a transform that will be supplied to elements this component renders.



[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[VictoryClipContainer]: https://formidable.com/open-source/victory/docs/victory-clip-container
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[react-native-svg]: https://github.com/react-native-community/react-native-svg
[arc]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/arc.js
[VictoryPolarAxis]: https://formidable.com/open-source/victory/docs/victory-polar-axis
[area]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/area.js
[VictoryArea]: https://formidable.com/open-source/victory/docs/victory-area
[bar]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/bar.js
[border]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/border.js
[VictoryBar]: https://formidable.com/open-source/victory/docs/victory-bar
[candle]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/candle.js
[VictoryCandlestick]: https://formidable.com/open-source/victory/docs/victory-candlestick
[curve]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/curve.js
[VictoryLine]: https://formidable.com/open-source/victory/docs/victory-line
[errorbar]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/error-bar.js
[VictoryErrorBar]: https://formidable.com/open-source/victory/docs/victory-errorbar
[flyout]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-tooltip/src/flyout.js
[VictoryTooltip]: https://formidable.com/open-source/victory/docs/victory-tooltip
[VictoryAxis]: https://formidable.com/open-source/victory/docs/victory-axis
[axis]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/axis.js
[point]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/point.js
[slice]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/slice.js
[whisker]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/whisker.js
[VictoryPie]: https://formidable.com/open-source/victory/docs/victory-pie
[voronoi]: https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-primitives/voronoi.js
[VictoryVoronoi]: https://formidable.com/open-source/victory/docs/victory-voronoi
[VictoryScatter]: https://formidable.com/open-source/victory/docs/victory-scatter
[VictoryLegend]: https://formidable.com/open-source/victory/docs/victory-legend
[VictoryBoxPlot]: https://formidable.com/open-source/victory/docs/victory-boxplot

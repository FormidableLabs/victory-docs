---
id: 21
title: VictoryPrimitives
category: charts
scope: null
---
# Victory Primitives

Victory is built around a set of primitive components. Along with [VictoryContainer], [VictoryClipContainer], and [VictoryLabel], the following list represents every element a Victory component might render. Extracting every rendered element into its own component allows Victory to support both web and React Native applications with very little additional code. Primitive components are simply extended and modified to render [react-native-svg] elements rather than SVG elements. These primitives are also exposed for users to wrap, extend or reference when creating their own custom rendered components.


## Components

### Arc

[VictoryPolarAxis] uses the `Arc` primitive to draw circular axes and grid lines. `Arc` renders a `<path>` element. [View the source][arc]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `closedPath` *boolean* a flag signifying whether this arc is should render a closed path
  - `cx` *number* the x coordinate of the center of the arc path
  - `cy` *number* the y coordinate of the center of the arc path
  - `datum` *any* the data point or tick corresponding to this arc
  - `endAngle` *number* the end angle of the arc given in degrees
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements
  - `r` *number* the radius of the arc
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `startAngle` *number* the start angle of the arc given in degrees
  - `style` *object* the styles to apply to the rendered element

### Area

[VictoryArea] uses `Area` to represent an entire dataset. `Area` renders a `<path>` element, or a group of paths if the stroke of the area should be rendered in a different style from the filled section of the area. [View the source][area]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `data` *array* the entire dataset used to define the area
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements
  - `interpolation` *string* the interpolation to use when calculating a path
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `style` *object* the styles to apply to the rendered element


### Bar

[VictoryBar] uses `Bar` to represent a single data point as a bar extending horizontally or vertically from the independent axis. `Bar` renders a `<path>` element. [View the source][bar]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `alignment` *"start", "middle", or "end" specifies how a bar path should be aligned in relation to its data point
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this bar
  - `events` *object* events to attach to the rendered element
  - `index` *number* the index of this bar within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `padding` *number* the padding of the parent chart (used to calculate default bar width if `style.width` is not supplied)
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `style` *object* the styles to apply to the rendered element
  - `width` *number* the width of parent chart (used to calculate default bar width `style.width` is not supplied)
  - `x` *number* the x coordinate of the top of the bar
  - `y0` *number* the y coordinate of the baseline of the bar
  - `y` *number* the y coordinate of the top of the bar


### Border

[VictoryLegend] uses the `Border` component to draw a border around a legend area. `Border` renders a `<rect/>` element. [View the source][border]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `events` *object* events to attach to the rendered element
  - `height` *number* the height of the `<rect/>` element
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `width` *number* the width of the `<rect/>` element
  - `x` *number* the x coordinate of the upper-left corner of the `<rect/>` element
  - `y` *number* the y coordinate of the upper-left corner of the `<rect/>` element

### Candle

[VictoryCandlestick] uses `Candle` to represent a single data point as a candle. `Candle` renders a group with `<rect>` and `<line>` elements. [View the source][candle]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `candleHeight` *number* the height of the candle (abs(open - close))
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this candle
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements
  - `index` *number* the index of this candle within the dataset
  - `padding` *number* the padding of the parent chart (used to calculate default candle width if `style.width` is not supplied)
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `width` *number* the width of parent chart (used to calculate default candle width `style.width` is not supplied)
  - `x` *number* the x coordinate of the center of the candle
  - `y1` *number* the y coordinate top edge of the candle wick (high)
  - `y2` *number* the y coordinate of bottom edge of the candle wick (low)
  - `y` *number* the y coordinate of the top of the candle (open or close)


### ClipPath

[VictoryClipContainer] uses `ClipPath` to render a rectangular clip path used in animating transitons for [VictoryArea] and [VictoryLine]. Transitions alter the `clipWidth` and `clipHeight` props of `ClipPath` in order to show and hide portions of a continuous chart so that new data transitions in and out smoothly. `ClipPath` renders `<defs>`, `<clipPath>` and `<rect>`. [View the source][clippath]

#### Props

  - `clipHeight` *number* determines the base height of the rectangular clip path. This prop corresponds to the total height of a parent chart.
  - `clipId` *number* sets the `id` of the `<clipPath>`
  - `clipPadding` *object* increases or decreases the size of the rectangular clip path. This prop is used to manually alter the size of the clip path to accomodate stroke width or label elements. This prop should be given as an object with "top", "bottom", "left", and "right" properties.
  - `clipWidth` *number* determines the base width of the rectangular clip path. This prop corresponds to the total width of a parent chart.
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `padding` *object* determines the base padding to apply to the rectangular clip path. This prop corresponds to the padding applied to a parent chart. This prop should be given as an object with "top", "bottom", "left", and "right" properties.
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `translateX` *number* determines the offset of the chart from the base x coordinate


### Curve

[VictoryLine] uses `Curve` to represent an entire dataset as a line or curve. `Curve` renders a `<path>` element. [View the source][curve]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `data` *array* the entire dataset used to define the curve
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements
  - `interpolation` *string* the interpolation to use when calculating a path
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `style` *object* the styles to apply to the rendered element

### ErrorBar

[VictoryErrorBar] uses `ErrorBar` to render x and y error bars. `ErrorBar` renders a group of `<line>` elements. [View the source][errorbar]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `borderWidth` *number* the width of the cross-hairs on the end of each error bar *default: 10*
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this error bar
  - `errorX` *number, array, or boolean* errors in the x dimension.
  - `errorY` *number, array, or boolean* errors in the y dimension.
  - `events` *object* events to attach to the rendered element
  - `groupComponent` *element* the element used to group rendered elements
  - `index` *number* the index of this error bar within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `x` *number* the x coordinate of the center of the error bar
  - `y` *number* the y coordinate of the center of the error bar


### Flyout

[VictoryTooltip] uses `Flyout` to render a flyout style path around text. `Flyout` renders `<path>` element. [View the source][flyout]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
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
  - `pointerLength` *number* the length of the triangular pointer
  - `pointerWidth` *number* the width of the base of the triangular pointer
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `width` *number* the width of the flyout
  - `x` *number* the x coordinate of data point associated with this flyout
  - `y` *number* the y coordinate of data point associated with this flyout


### Line

  The `Line` component renders straight lines. This component is used to render grids, ticks, and axis lines in [VictoryAxis]. [View the source][line]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this line
  - `events` *object* events to attach to the rendered element
  - `index` *number* the index of this line within the dataset
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `style` *object* the styles to apply to the rendered element
  - `x1` *number* the x coordinate of the beginning of the line
  - `x2` *number* the x coordinate of the end of the line
  - `y1` *number* the y coordinate of the beginning of the line
  - `y2` *number* the y coordinate of the end of the line


### Point

[VictoryScatter] uses `Point` to render each point in a scatter plot. `Point` renders a `<path>` element. [View the source][point]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this point
  - `events` *object* events to attach to the rendered element
  - `index` *number* the index of this point within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
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

[VictoryPie] uses `Slice` to render each slice in a pie chart. `Slice` renders a `<path>` element. [View the source][slice]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this slice
  - `events` *object* events to attach to the rendered element
  - `index` *number* the index of this slice within the dataset
  - `pathFunction` *function* a function that calculates the path of a given slice.
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `slice` *object* an object specifying the startAngle, endAngle, padAngle, and data of the slice
  - `style` *object* the styles to apply to the rendered element


### Voronoi

  [VictoryVoronoi] uses `Voronoi` to render voronoi polygons. `Voronoi` renders either a `<path>` element corresponding to a voronoi polygon, or a circular `<path>` clipped with a `<clipPath>` defined by the path of the polygon. [View the source][voronoi]

#### Props

  - `active` *boolean* a flag signifying whether the component is active
  - `data` *array* the entire dataset
  - `datum` *object* the data point corresponding to this voronoi polygon
  - `events` *object* events to attach to the rendered element
  - `index` *number* the index of this voronoi polygon within the dataset
  - `origin` *object* the svg coordinates of the center point of a polar chart
  - `polar` *boolean* a flag specifying whether the component is part of a polar chart
  - `polygon` *array* an array of points defining the polygon
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `size` *number* the maximum size of the voronoi polygon
  - `style` *object* the styles to apply to the rendered element
  - `x` *number* the x coordinate of the data point
  - `y` *number* the y coordinate of the data point

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
[clippath]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/clip-path.js
[curve]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/curve.js
[VictoryLine]: https://formidable.com/open-source/victory/docs/victory-line
[errorbar]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/error-bar.js
[VictoryErrorBar]: https://formidable.com/open-source/victory/docs/victory-errorbar
[flyout]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/flyout.js
[VictoryTooltip]: https://formidable.com/open-source/victory/docs/victory-tooltip
[line]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/line.js
[VictoryAxis]: https://formidable.com/open-source/victory/docs/victory-axis
[point]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/point.js
[slice]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/slice.js
[VictoryPie]: https://formidable.com/open-source/victory/docs/victory-pie
[voronoi]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/voronoi.js
[VictoryVoronoi]: https://formidable.com/open-source/victory/docs/victory-voronoi
[VictoryScatter]: https://formidable.com/open-source/victory/docs/victory-scatter
[VictoryLegend]: https://formidable.com/open-source/victory/docs/victory-legend

# Victory Primitives

Victory is built around a set of primitive components. Along with [VictoryContainer], [VictoryClipContainer], and [VictoryLabel], the following list represents every element a Victory component might render. Extracting every rendered element into its own component allows Victory to support both web and React Native applications with very little additional code. Primitive components are simply extended and modified to render [react-native-svg] elements rather than SVG elements. These primitives are also exposed for users to wrap, extend or reference when creating their own custom rendered components.


## Components

### Area 

**[src][area]**

[VictoryArea] uses `Area` to represent an entire dataset. `Area` renders a `<path>` element, or a group of paths if the stroke of the area should be rendered in a different style from the filled section of the area.

**Props**

  - `data` *array* the entire dataset used to define the area
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `interpolation` *string* the interpolation to use when calculating a path
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `role` *string* the aria role to assign to the element
  - `groupComponent` *element* the element used to group rendered elements
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied

### Bar 

**[src][bar]**

[VictoryBar] uses `Bar` to represent a single data point as a bar extending horizontally or vertically from the independent axis. `Bar` renders a `<path>` element.

**Props**

  - `datum` *object* the data point corresponding to this bar
  - `data` *array* the entire dataset
  - `index` *number* the index of this bar within the dataset
  - `x` *number* the x coordinate of the top of the bar
  - `y` *number* the y coordinate of the top of the bar
  - `y0` *number* the y coordinate of the baseline of the bar
  - `width` *number* the width of parent chart (used to calculate default bar width `style.width` is not supplied)
  - `padding` *number* the padding of the parent chart (used to calculate default bar width if `style.width` is not supplied)
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied

### Candle 

**[src][candle]**

[VictoryCandlestick] uses `Candle` to represent a single data point as a candle. `Candle` renders a group with `<rect>` and `<line>` elements

**Props**

  - `datum` *object* the data point corresponding to this candle
  - `data` *array* the entire dataset
  - `index` *number* the index of this candle within the dataset
  - `x` *number* the x coordinate of the center of the candle
  - `y` *number* the y coordinate of the top of the candle (open or close)
  - `y1` *number* the y coordinate top edge of the candle wick (high)
  - `y2` *number* the y coordinate of bottom edge of the candle wick (low)
  - `candleHeight` *number* the height of the candle (open - close)
  - `width` *number* the width of parent chart (used to calculate default candle width `style.width` is not supplied)
  - `padding` *number* the padding of the parent chart (used to calculate default candle width if `style.width` is not supplied)
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `groupComponent` *element* the element used to group rendered elements
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied


### ClipPath 

**[src][clippath]**

[VictoryClipContainer] uses `ClipPath` to render a rectangular clip path used in animating transitons for [VictoryArea] and [VictoryLine]. Transitions alter the `clipWidth` and `clipHeight` props of `ClipPath` in order to show and hide portions of a continuous chart so that new data transitions in and out smoothly. `ClipPath` renders `<defs>`, `<clipPath>` and `<rect>`.

**Props**

  - `clipId` *number* sets the `id` of the `<clipPath>`
  - `clipHeight` *number* determines the base height of the rectangular clip path. This prop corresponds to the total height of a parent chart.
  - `clipWidth` *number* determines the base width of the rectangular clip path. This prop corresponds to the total width of a parent chart.
  - `clipPadding` *object* increases or decreases the size of the rectangular clip path. This prop is used to manually alter the size of the clip path to accomodate stroke width or label elements. This prop should be given as an object with "top", "bottom", "left", and "right" properties.
  - `padding` *object* determines the base padding to apply to the rectangular clip path. This prop corresponds to the padding applied to a parent chart. This prop should be given as an object with "top", "bottom", "left", and "right" properties.
  - `translateX` *number* determines the offset of the chart from the base x coordinate


### Curve 

**[src][curve]**

[VictoryLine] uses `Curve` to represent an entire dataset as a line or curve. `Curve` renders a `<path>` element.

**Props**

  - `data` *array* the entire dataset used to define the curve
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `interpolation` *string* the interpolation to use when calculating a path
  - `role` *string* the aria role to assign to the element
  - `groupComponent` *element* the element used to group rendered elements
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied

### ErrorBar 

**[src][errorbar]**

[VictoryErrorBar] uses `ErrorBar` to render x and y error bars. `ErrorBar` renders a group of `<line>` elements.

**Props**

  - `datum` *object* the data point corresponding to this error bar
  - `data` *array* the entire dataset
  - `index` *number* the index of this error bar within the dataset
  - `x` *number* the x coordinate of the center of the error bar
  - `y` *number* the y coordinate of the center of the error bar
  - `errorX` *number, array, or boolean* errors in the x dimension. 
  - `errorY` *number, array, or boolean* errors in the y dimension. 
  - `borderWidth` *number* the width of the cross-hairs on the end of each error bar *default: 10*
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `role` *string* the aria role to assign to the element
  - `groupComponent` *element* the element used to group rendered elements
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied

### Flyout 

**[src][flyout]**

[VictoryTooltip] uses `Flyout` to render a flyout style path around text. `Flyout` renders `<path>` element.

**Props**

  - `datum` *object* the data point corresponding to this flyout if applicable
  - `data` *array* the entire dataset if applicable
  - `index` *number* the index of this flyout within the dataset
  - `x` *number* the x coordinate of data point associated with this flyout
  - `y` *number* the y coordinate of data point associated with this flyout
  - `dx` *number* offset in the x dimension. 
  - `dy` *number* offset in the y dimension. 
  - `width` *number* the width of the flyout
  - `height` *number* the height of the flyout
  - `orientation` *"top", "bottom", "left", "right"*
  - `pointerLength` *number* the length of the triangular pointer
  - `pointerWidth` *number* the width of the base of the triangular pointer
  - `cornerRadius` *number* the corner radius of the flyout
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements

### Line 

**[src][line]**

  The `Line` component renders straight lines. This component is used to render grids, ticks, and axis lines in [VictoryAxis].

  **Props**

  - `datum` *object* the data point corresponding to this line
  - `data` *array* the entire dataset
  - `index` *number* the index of this line within the dataset
  - `x1` *number* the x coordinate of the beginning of the line
  - `y1` *number* the y coordinate of the beginning of the line
  - `x2` *number* the x coordinate of the end of the line
  - `y2` *number* the y coordinate of the end of the line
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `role` *string* the aria role to assign to the element
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered elements


### Point 

**[src][point]**

[VictoryScatter] uses `Point` to render each point in a scatter plot. `Point` renders a `<path>` element.

**Props**
  - `datum` *object* the data point corresponding to this point
  - `data` *array* the entire dataset
  - `index` *number* the index of this point within the dataset
  - `x` *number* the x coordinate of the center of the point
  - `y` *number* the y coordinate of the center of the point
  - `size` *number* the size of the point
  - `symbol` *"circle", "diamond", "plus", "square", "star", "triangleDown", "triangleUp"* which symbol the point should render
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `role` *string* the aria role to assign to the element
  - `scale` *object* the x and y scale of the parent chart with `domain` and `range` applied

### Slice 

**[src][slice]**

[VictoryPie] uses `Slice` to render each slice in a pie chart. `Slice` renders a `<path>` element.

**Props**

  - `datum` *object* the data point corresponding to this slice
  - `data` *array* the entire dataset
  - `index` *number* the index of this slice within the dataset
  - `slice` *object* an object specifying the startAngle, endAngle, padAngle, and data of the slice
  - `pathFunction` *function* a function that calculates the path of a given slice.
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `role` *string* the aria role to assign to the element

### Voronoi 

**[src][voronoi]**

  [VictoryVoronoi] uses `Voronoi` to render voronoi polygons. `Voronoi` renders either a `<path>` element corresponding to a voronoi polygon, or a circular `<path>` clipped with a `<clipPath>` defined by the path of the polygon.

  **Props** 

  - `datum` *object* the data point corresponding to this voronoi polygon
  - `x` *number* the x coordinate of the data point
  - `y` *number* the y coordinate of the data point
  - `data` *array* the entire dataset
  - `index` *number* the index of this voronoi polygon within the dataset
  - `polygon` *array* an array of points defining the polygon
  - `size` *number* the maximum size of the voronoi polygon
  - `shapeRendering` *string* the shape rendering attribute to apply to the rendered path
  - `events` *object* events to attach to the rendered element
  - `style` *object* the styles to apply to the rendered element
  - `role` *string* the aria role to assign to the element

[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[VictoryClipContainer]: https://formidable.com/open-source/victory/docs/victory-clip-container
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[react-native-svg]: https://github.com/react-native-community/react-native-svg
[area]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/area.js
[VictoryArea]: https://formidable.com/open-source/victory/docs/victory-area
[bar]: https://github.com/formidablelabs/victory-core/blob/master/src/victory-primitives/bar.js
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

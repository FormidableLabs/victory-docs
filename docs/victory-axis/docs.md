# VictoryAxis

VictoryAxis renders a single axis which can be used on its own or composed with [VictoryChart].  

## Props

### tickValues

The `tickValues` prop explicitly specifies a set of tick values to draw on the axis. This prop should be given as an array of unique values of the same type (_i.e._ all numbers). The `tickValues` prop is used to specify the _values_ of each tick, so numeric values are typically approptiate. An array of strings or dates may be supplied for categorical and time series data respectively. Use the [tickFormat] prop to specify how ticks should be labeled.

*examples:* `tickValues={[2, 4, 6, 8]}`, `tickValues={["apples", "bananas", "oranges"]}`

### tickFormat

The `tickFormat` prop specifies how tick values should be labeled. The  `tickFormat` prop can be given as an array of values to display for each tick, or as a function to be applied to every `tickValue`.

*examples:* `tickFormat={(tick) => tick.toPrecision(2)}`, `tickFormat={["first", "second", "third"]}`

### tickCount

The `tickCount` prop specifies approximately how many ticks should be drawn on the axis if `tickValues` are not explicitly provided. This value is calculated by [d3Scale] and prioritizes returning "nice" values and evenly spaced ticks over an exact number of ticks. If an exact number of ticks are required, ticks should be specified via the [tickValues] prop. This prop must have a value greater than zero.

*default:* `tickCount={5}`

### dependentAxis

The `dependentAxis` boolean prop specifies whether the axis corresponds to the dependent variable (usually y). This prop is useful when composing `VictoryAxis` with other components to form a chart. 

### orientation

The `orientation` prop specifies the position and orientation of your axis. Options are "top", "bottom", "left", and "right".

### crossAxis

The `crossAxis` boolean prop specifies whether a given axis is intended to cross another axis. When this prop is true, zeroes will be removed from the array of ticks so that they do not clutter the origin of the chart. When `VictoryAxis` is nested within `VictoryChart`, `VictoryChart` will determine a value for the `crossAxis` prop based on domain, but this props may be overridden by supplying a `crossAxis` prop directly to the `VictoryAxis` child component.

*default:* `crossAxis={false}`

### offsetX and offsetY

The `offsetX`  and `offsetY` props define how far from the edge of its permitted area each axis should be offset in the x and y directions respectively. If these props are not given, the offsets will be calculated based on font size, axis orientation, and label padding. When `VictoryAxis` is used with `VictoryChart`, `VictoryChart` will determine a values for `offsetX` and `offsetY` that make the axes line up correctly, but these may be overridden by supplying an `offsetX` and `offsetY` props directly to the `VictoryAxis` child component.

*examples:* `offsetX={50}`

**note:** The `offsetX` and `offsetY` props are relative to the edge corresponding to the orientation of the axis, _i.e._ the bottom edge when `orientation="bottom"`. 

### label 

The `label` prop defines the label that will appear with the axis. This prop should be given as a string.

*examples:* `label="Time (ms)"` 

### style

The `style` prop defines the style of the component. The style prop should be given as an object with styles defined for `parent`, `axis`, `axisLabel`, `grid`, `ticks`, and `tickLabels`. Any valid svg styles are supported, but `width`, `height`, and `padding` should be specified via props as they determine relative layout for components in VictoryChart. Functional styles may be defined for `grid`, `tick`, and `tickLabel` style properties, and they will be evaluated with each tick.

```jsx
style={{
  axis: {stroke: "#756f6a"}, 
  axisLabel: {fontSize: 16, padding: 20}},
  grid: {stroke: (t) => t === 10 ? "red" : grey"}, 
  ticks: {stroke: "grey"},
  tickLabels: {fontSize: 10, padding: 5}
}}
```

**note:** When a component is rendered as a child of another Victory component, or within a custom `<svg>` element with `standalone={false}` parent styles will be applied to the enclosing `<g>` tag. Many styles that can be applied to a parent `<svg>` will not be expressed when applied to a `<g>`.

**note:** custom `angle` and `verticalAnchor` properties maybe included in labels styles.

*default (provided by default theme):* See [grayscale theme] for more detail

### theme

The `theme` prop specifies a theme to use for determining styles and layout properties for a component. Any styles or props defined in `theme` may be overwritten by props specified on the component instance. By default, components use a [grayscale theme]. [Read more about themes here].

*default:* `theme={VictoryTheme.grayscale}`

### width and height

The `width` and `height` props determine the width and height of the containing `<svg>`. By default Victory components render responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%`, `height="auto`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, pass `responsive={false}` to the `containerComponent` like `containerComponent={<VictoryContainer responsive={false}/>}`, or set `standalone={false}` and render the resulting `<g>` tag in your own `<svg>` container. When a component is nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` setting `width` and `height` props on the child component will have no effect.

*default (provided by default theme):* `width={450} height={300}`


### padding

The `padding` prop specifies the amount of padding in number of pixels between the edge of the chart and any rendered child components. This prop can be given as a number or as an object with padding specified for top, bottom, left and right. As with [width and height], the absolute padding will depend on whether the component is rendered in a responsive container. When a component is nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` setting `padding` on the child component will have no effect.

*examples:* `padding={{top: 20, bottom: 60}}` or `padding={40}`

*default (provided by default theme):* `padding={50}`

### standalone 

The `standalone` props specifies whether the component should be rendered in a independent `<svg>` element or in a `<g>` tag. This prop defaults to true, and renders an `svg`, however, wrapper components like `VictoryChart`, `VictoryStack`, and `VictoryGroup` force children to use `standalone={false}`.

*default:* `standalone={true}`

### scale

The `scale` prop determines which scales your chart should use. This prop can be given as a string specifying a supported scale ("linear", "time", "log", "sqrt"). 

*examples:* `scale="time"`

*default:* `scale="linear"`

### domain 

The `domain` prop describes the range of data the component will include. This prop can be given as a array of the minimum and maximum expected values of the data. If this prop is not provided, a domain will be calculated from `tickValues` or other information.

*examples:* `domain={[-1, 1]}`

### domainPadding

The `domainPadding` prop specifies a number of pixels of padding to add the beginning or end of a domain. When given as a single number, `domainPadding` will be applied to the upper and lower bound of both the x and y domains. This prop may also be given as an object with numbers or two-element arrays specified for x and y. When specifying arrays for `domainPadding`, the first element of the array will specify the padding to be applied to domain minimum, and the second element will specify padding the be applied to domain maximum. 

*examples:* `domainPadding={20}`, `domainPadding={{x: [20, 0]}}` 

**note:** Values supplied for  `domainPadding` will be coerced so that padding a domain will never result in charts including an additonal quadrant. For example, if an original domain included only positive values, `domainPadding` will be coerced so that the resulted padded domain will not include negative values.


### axisLabelComponent

The `axisLabelComponent` prop takes a component instance which will be used to render the axis label. The new element created from the passed `axisLabelComponent` will be supplied with the following properties: x, y, verticalAnchor, textAnchor, angle, transform, style and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `axisLabelComponent` is omitted, a new [VictoryLabel] will be created with props described above.

*examples:* `axisLabelComponent={<VictoryLabel dy={20}/>}`, `axisLabelComponent={<MyCustomLabel/>}`

*default:* `axisLabelComponent={<VictoryLabel/>}`

### tickLabelComponent

The `tickLabelComponent` prop takes a component instance which will be used to render the axis label. The new element created from the passed `tickLabelComponent` will be supplied with the following properties: x, y, tick, verticalAnchor, textAnchor, angle, transform, style and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `tickLabelComponent` is omitted, a new [VictoryLabel] will be created with props described above.

*examples:* `tickLabelComponent={<VictoryLabel dy={20}/>}`, `tickLabelComponent={<MyCustomLabel/>}`

*default:* `tickLabelComponent={<VictoryLabel/>}`

### tickComponent

The `tickComponent` prop takes a component instance which will be responsible for rendering a tick element. The new element created from the passed `tickComponent` will be provided with the following properties calculated by `VictoryAxis`: x1, y1, x2, y2, tick, style and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If a `tickComponent` is not provided, `VictoryAxis` will use its default [Line component].

*examples:* `tickComponent={<Line events={{onClick: () => console.log("wow")}}/>}`, `tickComponent={<MyCustomTick/>}`


*default:* `tickComponent={<Line type={"tick"}/>}`

### gridComponent

The `gridComponent` prop takes a component instance which will be responsible for rendering a grid element. The new element created from the passed `gridComponent` will be provided with the following properties calculated by `VictoryAxis`: x1, y1, x2, y2, tick, style and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If a `gridComponent` is not provided, `VictoryAxis` will use its default [Line component].

*examples:* `gridComponent={<Line events={{onClick: () => console.log("wow")}}/>}`, `gridComponent={<MyCustomGrid/>}`


*default:* `gridComponent={<Line type={"grid"}/>}`

### axisComponent

The `axisComponent` prop takes a component instance which will be responsible for rendering an axis line. The new element created from the passed `axisComponent` will be provided with the following properties calculated by `VictoryAxis`: x1, y1, x2, y2, style and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If an `axisComponent` is not provided, `VictoryAxis` will use its default [Line component].

*examples:* `axisComponent={<Line events={{onClick: () => console.log("wow")}}/>}`, `axisComponent={<MyCustomAxis/>}`


*default:* `axisComponent={<Line type={"axis"}/>}`

### containerComponent

The `containerComponent` prop takes a component instance which will be used to create a container element for standalone charts. The new element created from the passed `containerComponent` will be provided with the following props: `height`, `width`, `children` (the chart itself) and `style`. If a `containerComponent` is not provided, the default `VictoryContainer` component will be used. `VictoryContainer` supports props `title` and `desc` props, which are intended to add accessibility to Victory components. The more descriptive these props are, the more accessible your data will be for people using screen readers. These props may be set by passing them directly to the supplied component. By default, `VictoryContainer` renders a responsive `svg` using the `viewBox` attribute. To render a static container, set `responsive={false}` directly on the instance of `VictoryContainer` supplied via the `containerComponent` prop. `VictoryContainer` also renders a `Portal` element that may be used in conjunction with [VictoryPortal] to force components to render above other children.

*examples:* `containerComponent={<VictoryContainer responsive={false} title="Chart of Q1 Profit/>}`

*default:* `containerComponent={<VictoryContainer/>}`

### groupComponent

The `groupComponent` prop takes a component instance which will be used to create group elements for use within container elements. This prop defaults to a `<g>` tag.

*default:* `groupComponent={<g/>}`

### animate

The `animate` prop specifies props for [VictoryAnimation] to use. The animate prop may be used to specify the duration, delay and easing of an animation.

*examples:* `animate={{duration: 2000}}`

### events

The `events` prop takes an array of event objects. Event objects are composed of a `target`, an `eventKey`, and `eventHandlers`. Targets may be any valid style namespace for a given component, so "axis" and "axisLabel", "grid", "ticks" and "tickValues" are valid targets for this component. `eventKey` may be given as a single value, or as an array of values to specify individual targets. If `eventKey` is not specified, the given `eventHandlers` will be attached to all elements of the specified `target` type. The `eventHandlers` object should be given as an object whose keys are standard event names (i.e. `onClick`) and whose values are event callbacks. The return value of an event handler is used to modify elemnts. The return value should be given as an object or an array of objects with optional `target` and `eventKey` keys for specifying the element(s) to be modified, and a `mutation` key whose value is a function. The `target` and `eventKey` keys will default to those corresponding to the element the event handler was attached to. The `mutation` function will be called with the calculated props for each element that should be modified (i.e. a bar label), and the object returned from the mutation function will override the props of that element via object assignment.

*examples:*
```jsx
 events={[
  {
    target: "ticks",
    eventKey: [0, 2, 4],
    eventHandlers: {
      onClick: () => {
        return [
          {
            mutation: (props) => {
              return {
                style: Object.assign({}, props.style, {stroke: "orange"})
              };
            }
          }, {
            target: "tickLabels",
            mutation: () => {
              return {text: "hey"};
            }
          }
        ];
      }
    }
  }
 ]}
```

     
### sharedEvents

The `sharedEvents` prop is used to coordinate events between Victory components using `VictorySharedEvents`. This prop should not be set manually.

### name

The `name` prop is used to reference a component instance when defining shared events.

[VictoryChart]: https://formidable.com/open-source/victory/docs/victory-chart
[tickFormat]: https://formidable.com/open-source/victory/docs/victory-axis#tickformat
[d3Scale]: https://github.com/d3/d3-scale
[tickValues]: https://formidable.com/open-source/victory/docs/victory-axis#tickvalues
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: https://formidable.com/open-source/victory/recipes/theme-park
[width and height]: https://formidable.com/open-source/victory/docs/victory-axis#width-and-height
[Line component]: https://formidable.com/open-source/victory/docs/victory-primitives#line
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[VictoryAnimation]: https://formidable.com/open-source/victory/docs/victory-animation


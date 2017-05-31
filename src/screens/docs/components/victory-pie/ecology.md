# VictoryPie

`VictoryPie` renders a dataset as a pie chart.

```playground
<VictoryPie
  data={[
    {month: "Sep", profit: 35000, loss: 2000},
    {month: "Oct", profit: 42000, loss: 8000},
    {month: "Nov", profit: 55000, loss: 5000}
  ]}
  x="month"
  y={(datum) => datum.profit - datum.loss}
/>
```

## Props

### data

Specify data via the `data` prop. By default, Victory components expect data as an array of objects with `x` and `y` properties. Use the [x and y] data accessor props to define a custom data format. The `data` prop must be given as an array.

*example:*

```js
data={[
  {month: "September", profit: 35000, loss: 2000},
  {month: "October", profit: 42000, loss: 8000},
  {month: "November", profit: 55000, loss: 5000}
]}
```

### x and y

Use the `x` and `y` data accessor props to determine how the component defines data in the x and y dimensions. These props may be given in a variety of formats:

**string:** specify which property in an array of data objects should be used as the x or y value

*examples:* `x="month"`, `y="profit"`

**function:** use a function to translate each element in a data array into an x or y value

*examples:* `y={(datum) => datum.y + datum.error}`

**array index:** specify which index of an array should be used as an x or y value when data is given as an array of arrays

*examples:* `x={0}` , `y={1}`

**path string or path array:** specify which property in an array of nested data objects should be used an an x or y value

*examples:* `y="employees.salary"`, `y={["employees", "salary"]}`

### sortKey

Use the `sortKey` prop to indicate how data should be sorted. This prop is
given directly to the lodash [sortBy] function to be executed on the final
dataset.

This prop can be provided as a string, function, or array of either.

*examples*: `sortKey="x"`, `sortKey={["age", "height"]}`

### style

The `style` prop defines the style of the component. The style prop should be given as an object with styles defined for `data`, `labels` and `parent`. Any valid svg styles are supported, but `width`, `height`, and `padding` should be specified via props as they determine relative layout for components in VictoryChart. Functional styles may be defined for any style property, and they will be evaluated with each datum.

```jsx
style={{
  data: {fill: (d) => d.y > 0 ? "red" : "blue"},
  labels: {fontSize: 12},
  parent: {border: "1px solid #ccc"}
}}
```

**note:** When a component is rendered as a child of another Victory component, or within a custom `<svg>` element with `standalone={false}` parent styles will be applied to the enclosing `<g>` tag. Many styles that can be applied to a parent `<svg>` will not be expressed when applied to a `<g>`.

**note:** custom `angle` and `verticalAnchor` properties maybe included in labels styles.

*default (provided by default theme):* See [grayscale theme] for more detail

### theme

The `theme` prop specifies a theme to use for determining styles and layout properties for a component. Any styles or props defined in `theme` may be overwritten by props specified on the component instance. By default, components use a [grayscale theme]. [Read more about themes here].

*default:* `theme={VictoryTheme.grayscale}`

### colorScale

The `colorScale` prop defines a color scale to be applied to each slice of `VictoryPie`. This prop should be given as an array of CSS colors, or as a string corresponding to one of the built in color scales: "grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue". `VictoryPie` will assign to each slice by index, unless they are explicitly specified in the data object. Colors will repeat when there are more slices than colors in the provided `colorScale`.

### width and height

The `width` and `height` props determine the width and height of the containing `<svg>`. By default Victory components render responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%`, `height="auto`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, pass `responsive={false}` to the `containerComponent` like `containerComponent={<VictoryContainer responsive={false}/>}`, or set `standalone={false}` and render the resulting `<g>` tag in your own `<svg>` container.

*default (provided by default theme):* `width={450} height={300}`

### padding

The `padding` prop specifies the amount of padding in number of pixels between the edge of the chart and any rendered child components. This prop can be given as a number or as an object with padding specified for top, bottom, left and right. As with [width and height], the absolute padding will depend on whether the component is rendered in a responsive container.

*examples:* `padding={{top: 20, bottom: 60}}` or `padding={40}`

*default (provided by default theme):* `padding={50}`

### standalone

The `standalone` props specifies whether the component should be rendered in a independent `<svg>` element or in a `<g>` tag. This prop defaults to true, and renders an `svg`.

*default:* `standalone={true}`

### startAngle

The `startAngle` props defines the overall start angle of the pie in degrees. This prop is used in conjunction with `endAngle` to create a pie that spans only a segment of a circle.

### endAngle

The `endAngle` props defines the overall end angle of the pie in degrees. This prop is used in conjunction with `startAngle` to create a pie that spans only a segment of a circle.

### padAngle

The `padAngle` prop defines the amount of separation between adjacent data slices in number of degrees.

### innerRadius

The `innerRadius` prop determines the number of pixels between the center of the chart and the inner edge of a donut chart. When this prop is set to zero a regular pie chart is rendered.

### cornerRadius

The `cornerRadius` props specifies the corner radius of the slices rendered in the pie chart.

### labelRadius

The `labelRadius` prop defines the radius of the arc that will be used for positioning each slice label. If this prop is not set, the label radius will default to the radius of the pie + label padding.

### labels

The `labels` prop defines the labels that will appear for each slice. This prop should be given as an array or as a function of data. `label` may also be specified on each data object.

*examples:* `labels="Series 1"` , `labels={(datum) => datum.y}`

### labelComponent

The `labelComponent` prop takes a component instance which will be used to render labels for each slice. The new element created from the passed `labelComponent` will be supplied with the following properties: x, y, index, datum, verticalAnchor, textAnchor, angle, style, text, and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `labelComponent` is omitted, a new [VictoryLabel] will be created with props described above.

*examples:* `labelComponent={<VictoryLabel dy={20}/>}`, `labelComponent={<MyCustomLabel/>}`

*default:* `<VictoryLabel/>`

### dataComponent

The `dataComponent` prop takes a component instance which will be responsible for rendering a data element. The new element created from the passed `dataComponent` will be provided with the following properties calculated by `VictoryPie`: datum, slice, index, pathFunction, style, and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If a dataComponent is not provided, `VictoryPie` will use its default [Slice component].

*examples:* `dataComponent={<Slice events={{onClick: () => console.log("wow")}}/>}`, `dataComponent={<MyCustomSlice/>}`


*default:* `<Slice/>`

### containerComponent

The `containerComponent` prop takes a component instance which will be used to create a container element for standalone charts. The new element created from the passed `containerComponent` will be provided with the following props: `height`, `width`, `children` (the chart itself) and `style`. If a `containerComponent` is not provided, the default `VictoryContainer` component will be used. `VictoryContainer` supports `title` and `desc` props, which are intended to add accessibility to Victory components. The more descriptive these props are, the more accessible your data will be for people using screen readers. These props may be set by passing them directly to the supplied component. By default, `VictoryContainer` renders a responsive `svg` using the `viewBox` attribute. To render a static container, set `responsive={false}` directly on the instance of `VictoryContainer` supplied via the `containerComponent` prop. `VictoryContainer` also renders a `Portal` element that may be used in conjunction with [VictoryPortal] to force components to render above other children.

*examples:* `containerComponent={<VictoryContainer responsive={false} title="Chart of Q1 Profit/>}`

*default:* `containerComponent={<VictoryContainer/>}`

### groupComponent

The `groupComponent` prop takes a component instance which will be used to create group elements for use within container elements. This prop defaults to a `<g>` tag.

*default:* `groupComponent={<g/>}`

### animate

The `animate` prop specifies props for [VictoryAnimation] and [VictoryTransition] to use. The animate prop may be used to specify the duration, delay and easing of an animation as well as the behavior of `onEnter` and `onExit` and `onLoad` transitions. Each Victory component defines its own default transitions, be these may be modified, or overwritten with the `animate` prop.

*examples:* `animate={{duration: 2000, onLoad: {duration: 1000}, onEnter: {duration: 500, before: () => ({y: 0})}}}`

### events

The `events` prop takes an array of event objects. Event objects are composed of a `target`, an `eventKey`, and `eventHandlers`. Targets may be any valid style namespace for a given component, so "data" and "labels" are valid targets for this component. `eventKey` may be given as a single value, or as an array of values to specify individual targets. If `eventKey` is not specified, the given `eventHandlers` will be attached to all elements of the specified `target` type. The `eventHandlers` object should be given as an object whose keys are standard event names (i.e. `onClick`) and whose values are event callbacks. The return value of an event handler is used to modify elemnts. The return value should be given as an object or an array of objects with optional `target` and `eventKey` keys for specifying the element(s) to be modified, and a `mutation` key whose value is a function. The `target` and `eventKey` keys will default to those corresponding to the element the event handler was attached to. The `mutation` function will be called with the calculated props for each element that should be modified (i.e. a bar label), and the object returned from the mutation function will override the props of that element via object assignment.
*examples:*
```jsx
 events={[
  {
    target: "data",
    eventKey: [0, 2, 4],
    eventHandlers: {
      onClick: () => {
        return [
          {
            mutation: (props) => {
              return {
                style: Object.assign({}, props.style, {fill: "orange"})
              };
            }
          }, {
            target: "labels",
            mutation: () => {
              return {text: "hey"};
            },
            callback: () => {
              console.log("I happen after setState");
            }
          }
        ];
      }
    }
  }
 ]}
```

### eventKey

The `eventKey` prop is used to assign eventKeys to data. This prop operates identically to the [x] and [y] data accessor props. By default, the eventKey of each datum will be equal to its index in the data array. `eventKey` may also be defined directly on each data object.
### sharedEvents

The `sharedEvents` prop is used to coordinate events between Victory components using `VictorySharedEvents`. This prop should not be set manually.
### name

The `name` prop is used to reference a component instance when defining shared events.

[x and y]: https://formidable.com/open-source/victory/docs/victory-pie#x-and-y
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: https://formidable.com/open-source/victory/guides/themes
[width and height]: https://formidable.com/open-source/victory/docs/victory-pie#width-and-height
[Slice component]: https://formidable.com/open-source/victory/docs/victory-primitives#slice
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[VictoryAnimation]: https://formidable.com/open-source/victory/docs/victory-animation
[VictoryTransition]: https://formidable.com/open-source/victory/docs/victory-transition
[sortBy]: https://lodash.com/docs/4.17.4#sortBy

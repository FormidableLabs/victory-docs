# VictoryAxis

VictoryAxis renders a single axis which can be used on its own or composed with [`VictoryChart`].

```playground
<svg width={400} height={400}>
  <VictoryAxis crossAxis
    width={400}
    height={400}
    domain={[-10, 10]}
    theme={VictoryTheme.material}
    offsetY={200}
    standalone={false}
  />
  <VictoryAxis dependentAxis crossAxis
    width={400}
    height={400}
    domain={[-10, 10]}
    theme={VictoryTheme.material}
    offsetX={200}
    standalone={false}
  />
</svg>
```

## Props

### `animate`

`VictoryAxis` uses the standard `animate` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#animate)

See the [Animations Guide] for more detail on animations

```js
  animate={{
    duration: 2000,
    easing: "bounce"
  )}
```

### `axisComponent`

The `axisComponent` prop takes a component instance which will be responsible for rendering an axis line. The new element created from the passed `axisComponent` will be provided with the following props calculated by `VictoryAxis`: `x1`, `y1`, `x2`, `y2`, `style` and `events`. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If an `axisComponent` is not provided, `VictoryAxis` will use its default [Line component].

*default:* `axisComponent={<Line type={"axis"}/>}`

```js
axisComponent={<Line events={{ onClick: handleClick }}/>}
```

### `axisLabelComponent`

The `axisLabelComponent` prop takes a component instance which will be used to render the axis label. The new element created from the passed `axisLabelComponent` will be supplied with the following props: `x`, `y`, `verticalAnchor`, `textAnchor`, `angle`, `transform`, `style` and `events`. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `axisLabelComponent` is omitted, a new [`VictoryLabel`] will be created with props described above.

*default:* `axisLabelComponent={<VictoryLabel/>}`

```js
axisLabelComponent={<VictoryLabel dy={20}/>}
```

### `containerComponent`

`VictoryAxis` uses the standard `containerComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#containercomponent)

```js
containerComponent={<VictoryZoomContainer dimension="x"/>}
```

### `crossAxis`

The `crossAxis` boolean prop specifies whether a given axis is intended to cross another axis. When this prop is true, zeroes will be removed from the array of ticks so that they do not clutter the origin of the chart. When `VictoryAxis` is nested within `VictoryChart`, `VictoryChart` will determine a value for the `crossAxis` prop based on domain, but this prop may be overridden by supplying a `crossAxis` prop directly to the `VictoryAxis` child component.

*default:* `crossAxis={false}`

### `dependentAxis`

The `dependentAxis` boolean prop specifies whether the axis corresponds to the dependent variable (usually y). This prop is useful when composing `VictoryAxis` with other components to form a chart.

*default:* `dependentAxis={false}`

```playground
<VictoryAxis dependentAxis />
```

### `domain`

`VictoryAxis` uses the standard `domain` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domain)

```js
domain={{x: [0, 100], y: [0, 1]}}
```

### `domainPadding`

`VictoryAxis` uses the standard `domainPadding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domainpadding)

```js
domainPadding={{x: [10, -10], y: 5}}
```

### events

VictoryAxis` uses the standard `events` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#events)

See the [Events Guide] for more information on defining events.

**note:** valid event targets for `VictoryAxis` are "axis", "axisLabel", "grid", "ticks", and "tickLabels".
Targets that correspond to only one element {"axis" and "axisLabel") should use the special eventKey "all".


```playground
 <VictoryAxis
  style={{
    parent: { border: "1px solid #ccc" },
    grid: { stroke: "#c43a31", strokeWidth: 2 }
  }}
  tickValues={[1, 2, 3, 4, 5]}
  events={[
    {
      target: "grid",
      eventHandlers: {
        onClick: () => {
          return [
            {
              mutation: (props) => {
                return { style: merge({}, props.style, { stroke: "orange" }) };
              }
            }, {
              target: "tickLabels",
              mutation: () => {
                return { text: "hey" };
              }
            }
          ];
        }
      }
    }
  ]}
/>
```

### `fixLabelOverlap`

When true, this prop reduces the number of tick labels to fit the length of the axis. Labels are
removed at approximately even intervals from the original array of labels. This feature only works
well for labels that are approximately evenly spaced.

*default:* `fixLabelOverlap={false}`

### `gridComponent`

The `gridComponent` prop takes a component instance which will be responsible for rendering a grid element. The new element created from the passed `gridComponent` will be provided with the following props calculated by `VictoryAxis`: `x1`, `y1`, `x2`, `y2`, `tick`, `style` and `events`. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If a `gridComponent` is not provided, `VictoryAxis` will use its default [Line component].

*default:* `gridComponent={<Line type={"grid"}/>}`

```js
gridComponent={<Line events={{ onClick: handleClick }}/>}
```

### `groupComponent`

`VictoryAxis` uses the standard `groupComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#groupcomponent)

*default:* `<g/>`

```js
groupComponent={<g transform="translate(10, 10)" />}
```

### `height`

`VictoryAxis` uses the standard `height` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#height)

*default (provided by default theme):* `height={300}`

```jsx
height={400}
```

### `label`

The `label` prop defines the label that will appear with the axis. This prop should be given as a string.

```playground
<VictoryAxis
  style={{ parent: { border: "1px solid #ccc" } }}
  label="Time (ms)"
/>
```

### `name`

`VictoryAxis` uses the standard `name` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#name)

```jsx
name="series-1"
```

### `offsetX`

The `offsetX` prop defines how far from the edge of its permitted area an axis should be offset in the x direction. If this prop is not given, the offset will be calculated based on font size, axis orientation, and label padding. When `VictoryAxis` is used with `VictoryChart`, `VictoryChart` will determine a value for `offsetX` that makes the axes line up correctly, but this value may be overridden by supplying an `offsetX` prop directly to the `VictoryAxis` child component.

**note:** The `offsetX` prop is relative to the edge corresponding to the orientation of the axis, _e.g._ the left edge when `orientation="left"`.

```playground
<VictoryAxis dependentAxis
  style={{ parent: { border: "1px solid #ccc" } }}
  offsetX={225}
/>
```

### `offsetY`

The `offsetY` prop defines how far from the edge of its permitted area an axis should be offset in the y direction. If this prop is not given, the offset will be calculated based on font size, axis orientation, and label padding. When `VictoryAxis` is used with `VictoryChart`, `VictoryChart` will determine a value for `offsetY` that makes the axes line up correctly, but this value may be overridden by supplying an `offsetY` prop directly to the `VictoryAxis` child component.

**note:** The `offsetY` prop is relative to the edge corresponding to the orientation of the axis, _e.g._ the bottom edge when `orientation="bottom"`.

```playground
<VictoryAxis
  style={{ parent: { border: "1px solid #ccc" } }}
  offsetY={150}
/>
```

### `orientation`

The `orientation` prop specifies the position and orientation of your axis. Options are "top", "bottom", "left", and "right".

```playground
<VictoryAxis
  style={{ parent: { border: "1px solid #ccc" } }}
  orientation="top"
/>
```

### `padding`

`VictoryAxis` uses the standard `padding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#padding)

*default (provided by default theme):* `padding={50}`

```js
padding={{ top: 20, bottom: 60 }}
```

### `range`

`VictoryAxis` uses the standard `range` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#range)

*note:* The `range` prop is usually controlled by `VictoryChart`. It will not typically be necessary to set a `range` prop manually

### `scale`

`VictoryAxis` uses the standard `scale` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#scale)

**note:** Though `VictoryAxis` can take a `scale` prop with scales defined for both `x` and `y`, only the scale that corresponds the the given axis will be used.

*default:* `scale="linear"`

```js
scale={{x: "time"}}
```

### `sharedEvents`

`VictoryAxis` uses the standard `sharedEvents` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#sharedevents)

*note:* The `sharedEvents` prop used internally to coordinate events between components. It should not be set manually.

### `standalone`

`VictoryAxis` uses the standard `standalone` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#standalone)

**note:** When `VictoryAxis` is nested within a component like `VictoryChart`, this prop will be set to `false`

*default:* `standalone={true}`

```playground
<svg width={400} height={400}>
  <VictoryAxis crossAxis
    width={400}
    height={400}
    domain={[-10, 10]}
    theme={VictoryTheme.material}
    offsetY={200}
    standalone={false}
  />
  <VictoryAxis dependentAxis crossAxis
    width={400}
    height={400}
    domain={[-10, 10]}
    theme={VictoryTheme.material}
    offsetX={200}
    standalone={false}
  />
</svg>
```

### `style`

The `style` prop defines the style of the component. The style prop should be given as an object with styles defined for `parent`, `axis`, `axisLabel`, `grid`, `ticks`, and `tickLabels`. Any valid svg styles are supported, but `width`, `height`, and `padding` should be specified via props as they determine relative layout for components in VictoryChart. Functional styles may be defined for `grid`, `tick`, and `tickLabel` style properties, and they will be evaluated with each tick.

**note:** When a component is rendered as a child of another Victory component, or within a custom `<svg>` element with `standalone={false}` parent styles will be applied to the enclosing `<g>` tag. Many styles that can be applied to a parent `<svg>` will not be expressed when applied to a `<g>`.

**note:** custom `angle` and `verticalAnchor` properties may be included in `labels` styles.

*default (provided by default theme):* See [grayscale theme] for more detail

```playground
<VictoryAxis
  label="Label"
  style={{
    axis: {stroke: "#756f6a"},
    axisLabel: {fontSize: 20, padding: 30},
    grid: {stroke: (t) => t > 0.5 ? "red" : "grey"},
    ticks: {stroke: "grey", size: 5},
    tickLabels: {fontSize: 15, padding: 5}
  }}
/>
```

### `theme`

`VictoryAxis` uses the standard `theme` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#theme)

See the [Themes Guide] for information about creating custom themes.

*default:* `theme={VictoryTheme.grayscale}`

```jsx
theme={VictoryTheme.material}
```

### `tickComponent`

The `tickComponent` prop takes a component instance which will be responsible for rendering a tick element. The new element created from the passed `tickComponent` will be provided with the following props calculated by `VictoryAxis`: `x1`, `y1`, `x2`, `y2`, `tick`, `style` and `events`. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If a `tickComponent` is not provided, `VictoryAxis` will use its default [Line component].

*default:* `tickComponent={<Line type={"tick"}/>}`

```js
tickComponent={<Line events={{ onClick: handleClick }}/>}
```

### `tickCount`

The `tickCount` prop specifies approximately how many ticks should be drawn on the axis if `tickValues` are not explicitly provided. This value is calculated by [d3Scale] and prioritizes returning "nice" values and evenly spaced ticks over an exact number of ticks. If an exact number of ticks are required, ticks should be specified via the [tickValues] prop. This prop must have a value greater than zero.

*default:* `tickCount={5}`

### `tickFormat`

The `tickFormat` prop specifies how tick values should be labeled. The `tickFormat` prop can be given as an array of values to display for each tick, or as a function to be applied to every `tickValue`.

```playground
  <VictoryAxis
    tickValues={[2.11, 3.9, 6.1, 8.05]}
    tickFormat={(t) => `${Math.round(t)}k`}
  />
```

### `tickLabelComponent`

The `tickLabelComponent` prop takes a component instance which will be used to render the axis label. The new element created from the passed `tickLabelComponent` will be supplied with the following props: `x`, `y`, `tick`, `verticalAnchor`, `textAnchor`, `angle`, `transform`, `style` and `events`. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `tickLabelComponent` is omitted, a new [`VictoryLabel`] will be created with props described above.

*default:* `tickLabelComponent={<VictoryLabel/>}`

```js
tickLabelComponent={<VictoryLabel dy={20}/>}
```

### `tickValues`

The `tickValues` prop explicitly specifies a set of tick values to draw on the axis. This prop should be given as an array of unique values of the same type (_i.e.,_ all numbers). The `tickValues` prop is used to specify the _values_ of each tick, so numeric values are typically appropriate. An array of strings or dates may be supplied for categorical and time series data respectively. Use the [`tickFormat`] prop to specify how ticks should be labeled.

```playground
  <VictoryAxis tickValues={[2, 4, 6, 8]}/>
```

### `width`

`VictoryAxis` uses the standard `width` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#width)

*default (provided by default theme):* `width={450}`

```jsx
width={400}
```

[Animations Guide]: https://formidable.com/open-source/victory/guides/animations
[Custom Components Guide]: https://formidable.com/open-source/victory/guides/custom-components
[Events Guide]: https://formidable.com/open-source/victory/guides/events
[Themes Guide]: https://formidable.com/open-source/victory/guides/themes
[`VictoryChart`]: https://formidable.com/open-source/victory/docs/victory-chart
[tickFormat]: https://formidable.com/open-source/victory/docs/victory-axis#tickformat
[d3Scale]: https://github.com/d3/d3-scale
[tickValues]: https://formidable.com/open-source/victory/docs/victory-axis#tickvalues
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Line component]: https://formidable.com/open-source/victory/docs/victory-primitives#line
[`VictoryLabel`]: https://formidable.com/open-source/victory/docs/victory-label

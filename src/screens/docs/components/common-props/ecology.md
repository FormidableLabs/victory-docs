# Common Props

Not every component uses all of these props. These are all common to things like `VictoryBar`, `VictoryScatter`, but other components like `VictoryStack` use only some of them.

The props explanations given here are general. Each component docs page should be considered as the the source of truth for a component's props, and any caveats will be listed there.

### animate

The `animate` prop specifies props for [VictoryAnimation] and [VictoryTransition] to use. The animate prop may be used to specify the duration, delay, and easing of an animation as well as the behavior of `onEnter` and `onExit` and `onLoad` transitions. Each Victory component defines its own default transitions, be these may be modified, or overwritten with the `animate` prop.

See the [Animations Guide] for more detail on animations and transitions

*example:* `animate={{ duration: 2000 }}`

```playground_norender
class App extends React.Component {

  render() {
    return (
      <VictoryChart
      	domain={{ y: [0, 1] }}
      	animate={{ duration: 2000 }}
      >
        <VictoryScatter
          size={5}
          data={this.state.data}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 })
            },
            onEnter: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 }),
              after: (datum) => ({ opacity: 1, _y: datum._y })
            }
          }}
        />
      </VictoryChart>
    );
  }

  constructor(props) {
    super(props);
    this.state = { data: this.getData() };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {
    const num = Math.floor(10 * Math.random() + 5);
    const points = new Array(num).fill(1);
    return points.map((point, index) => {
      return { x: index + 1, y: Math.random() };
    });
  }
}

ReactDOM.render(<App/>, mountNode)
```

### categories

The `categories` prop specifies how categorical data for a chart should be ordered. This prop should be given as an array of string values, or an object with these arrays of values specified for x and y. If this prop is not set, categorical data will be plotted in the order it was given in the data array.

*example:* `categories={{ x: ["apples", "oranges", "bananas"] }}`

```playground
<VictoryChart domainPadding={25}>
  <VictoryBar
    categories={{
      x: ["birds", "cats", "dogs", "fish", "frogs"]
    }}
    data={[
      {x: "cats", y: 1},
      {x: "dogs", y: 2},
      {x: "birds", y: 3},
      {x: "fish", y: 2},
      {x: "frogs", y: 1}
    ]}
  />
</VictoryChart>
```

### containerComponent

The `containerComponent` prop takes a component instance which will be used to create a container element for standalone charts. If a `containerComponent` is not provided, the default `VictoryContainer` component will be used. Other Victory container components include:
  - [VictoryBrushContainer]
  - [VictoryCursorContainer]
  - [VictorySelectionContainer]
  - [VictoryZoomContainer]
  - hybrid containers may be created using the [createContainer] helper

 Victory container components all support `title` and `desc` props, which are intended to add accessibility to Victory components. The more descriptive these props are, the more accessible your data will be for people using screen readers. These props may be set by passing them directly to the supplied component. By default, all Victory container components render responsive `svg` elements using the `viewBox` attribute. To render a static container, set `responsive={false}` directly on the container instance supplied via the `containerComponent` prop. All Victory container components also render a `Portal` element that may be used in conjunction with [VictoryPortal] to force components to render above other children.

Container components are suppied with the following props:
  - `domain`
  - `height`
  - `origin` (for polar charts)
  - `padding`
  - `polar`
  - `scale`
  - `standalone`
  - `style`
  - `theme`

*default:* `containerComponent={<VictoryContainer/>}`

```playground
<VictoryScatter
  containerComponent={
    <VictoryCursorContainer
      cursorLabel={(d) => `${d.x.toPrecision(2)}, ${d.y.toPrecision(2)}`}
    />
  }
/>
```

### data

Specify data via the `data` prop. By default, Victory components expect data as an array of objects with `x` and `y` properties. Use the [x] and [y] data accessor props to define a custom data format. The `data` prop must be given as an array. Data objects may also include information about styles, labels, and props that may be applied to individual data components.

**Note:** All values stored on the data object will be interpolated during animation. Do not store functions on data objects.

```playground
<VictoryScatter
  size={7}
  data={[
    { x: 1, y: 1, label: "first", symbol: "star", opacity: 0.5, fill: "blue" },
    { x: 2, y: 2, label: "second", symbol: "circle", opacity: 0.8, fill: "red" },
    { x: 3, y: 3, label: "third", symbol: "square", fill: "white", stroke: "black", strokeWidth: 2 },
    { x: 4, y: 4, label: "fourth", symbol: "diamond", fill: "green" }
  ]}
/>
```

### dataComponent

The `dataComponent` prop takes a component instance which will be responsible for rendering a data element. The new element created from the passed `dataComponent` will be provided with all the props it needs to render. These props will always include `data`, `events`, `scale` and `style`. Individual components will supply additional props expected by their default `dataComponents`. See individual api docs for complete props lists. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If a `dataComponent` is not provided, each component will use its own default `dataComponent`.

See the [Custom Components Guide] for more detail on creating your own `dataComponents`

*examples:* `dataComponent={<Area/>}`

```playground_norender
class CatPoint extends React.Component {
  render() {
    const {x, y, datum} = this.props; // VictoryScatter supplies x, y and datum
    const cat = datum._y >= 0 ? "😻" : "😹";
    return (
      <text x={x} y={y} fontSize={30}>
        {cat}
      </text>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <VictoryChart>
        <VictoryScatter
          dataComponent={<CatPoint/>}
          y={(d) => Math.sin(2 * Math.PI * d.x)}
          samples={15}
        />
      </VictoryChart>
    );
  }
}
ReactDOM.render(<App/>, mountNode);
```

### domain

The `domain` prop describes the range of data the component will include. This prop can be given as a array of the minimum and maximum expected values of the data or as an object that specifies separate arrays for x and y. If this prop is not provided, a domain will be calculated from data, or other available information.

*examples:*
  - `domain={[-1, 1]}`
  - `domain={{x: [0, 100], y: [0, 1]}}`

```playground
<VictoryChart
   domain={{ x: [0.5, 5.5], y: [0, 10] }}
>
  <VictoryBar data={sampleData}/>
</VictoryChart>
```

### domainPadding

The `domainPadding` prop specifies a number of pixels of padding to add the beginning or end of a domain. This prop is useful for explicitly spacing data elements farther from the beginning or end of a domain to prevent axis crowding. When given as a single number, `domainPadding` will be applied to the upper and lower bound of both the x and y domains. This prop may also be given as an object with numbers or two-element arrays specified for x and y. When specifying arrays for `domainPadding`, the first element of the array will specify the padding to be applied to domain minimum, and the second element will specify padding the be applied to domain maximum.

*examples:*
  - `domainPadding={20}`
  - `domainPadding={{x: [20, 0]}}`

**note:** Values supplied for `domainPadding` will be coerced so that padding a domain will never result in charts including an additonal quadrant. For example, if an original domain included only positive values, `domainPadding` will be coerced so that the resulted padded domain will not include negative values.

```playground
<VictoryChart
   domainPadding={{ x: 100 }}
>
  <VictoryBar data={sampleData}/>
</VictoryChart>
```

### eventKey

The `eventKey` prop is used to assign eventKeys to data. This prop operates identically to the [x] and [y] data accessor props. By default, the eventKey of each datum will be equal to its index in the data array. **This prop is not commonly used.**

See the [Events Guide] for more information on defining events and using event keys.

### events

The `events` prop takes an array of event objects. Event objects are composed of a `target`, an `eventKey`, and `eventHandlers`. Targets may be any valid style namespace for a given component, so "data" and "labels" are valid targets for this component. `eventKey` may be given as a single value, or as an array of values to specify individual targets. If `eventKey` is not specified, the given `eventHandlers` will be attached to all elements of the specified `target` type. The `eventHandlers` object should be given as an object whose keys are standard event names (_e.g.,_ `onClick`) and whose values are event callbacks. The return value of an event handler is used to modify elemnts. The return value should be given as an object or an array of objects with optional `target` and `eventKey` keys for specifying the element(s) to be modified, and a `mutation` key whose value is a function. The `target` and `eventKey` keys will default to those corresponding to the element the event handler was attached to. The `mutation` function will be called with the calculated props for each element that should be modified (_e.g.,_ a bar label), and the object returned from the mutation function will override the props of that element via object assignment.

**note:** Elements that render only one element for a given dataset (_e.g._ `VictoryArea`) will use the special `eventKey` "all" rather than refering to data by index. Refer to individual API docs for additinal caveats

```playground
<VictoryChart
  events={[{
    childName: "all",
    target: "data",
    eventHandlers: {
      onClick: () => {
        return [
          {
            childName: "area-2",
            target: "data",
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "gold" }) })
          }, {
            childName: "area-3",
            target: "data",
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "orange" }) })
          }, {
            childName: "area-4",
            target: "data",
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "red" }) })
          }
        ];
      }
    }
  }]}
>
  <VictoryStack>
    <VictoryArea name="area-1" data={sampleData}/>
    <VictoryArea name="area-2" data={sampleData}/>
    <VictoryArea name="area-3" data={sampleData}/>
    <VictoryArea name="area-4" data={sampleData}/>
  </VictoryStack>
</VictoryChart>
```

### groupComponent

The `groupComponent` prop takes a component instance which will be used to create group elements for use within container elements. For most components, this prop defaults to a `<g>` tag. Continuous data components like `VictoryLine` and `VictoryArea` use [VictoryClipContainer] a component which renders a `<g>` tag with a `clipPath` `def`. This allows continuous data components to transition smoothly when new data points enter and exit. `VictoryClipContainer` may also be used with components like `VictoryScatter` to prevent data from overflowing the chart area.

```playground
<VictoryChart>
  <VictoryScatter
    data={sampleData}
    size={20}
    groupComponent={<VictoryClipContainer/>}
  />
</VictoryChart>
```

### height

The `height` prop determines the height of the containing `<svg>`. By default Victory components render responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%`, `height="auto`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, pass `responsive={false}` to the `containerComponent` like `containerComponent={<VictoryContainer responsive={false}/>}`, or set `standalone={false}` and render the resulting `<g>` tag in your own `<svg>` container. When a component is nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` setting the `height` prop on the child component will have no effect.

*default (provided by default theme):* `height={300}`

```playground
<div>
  <VictoryBar height={500}/>
  <VictoryBar height={500}
    containerComponent={<VictoryContainer responsive={false}/>}
  />
</div>
```

### labelComponent

The `labelComponent` prop takes a component instance which will be used to render labels for the component. The new element created from the passed `labelComponent` will be supplied with the following properties: x, y, index, data, datum, verticalAnchor, textAnchor, angle, style, text, and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `labelComponent` is omitted, a new [VictoryLabel] will be created with the props described above. [VictoryTooltip] is commonly used as a `labelComponent`

*examples:*
  - `labelComponent={<VictoryLabel dy={20}/>}`
  - `labelComponent={<VictoryTooltip/>}`

*default:* `<VictoryLabel/>`

```playground
<VictoryBar
  data={sampleData}
  labels={(d) => d.y}
  style={{ labels: { fill: "white" } }}
  labelComponent={<VictoryLabel dy={30}/>}
/>
```

### labels

The `labels` prop defines the labels that will appear above each point. This prop should be given as an array or as a function of data.

*examples:*
  - `labels={["first", "second", "third"]}`
  - `labels={(d) => d.y}`

```playground
<VictoryBar
  data={sampleData}
  labels={(d) => `y: ${d.y}`}
/>
```

### name

The `name` prop is used to reference a component instance when defining shared events.

*example:* `name="series-1"`

### origin

The origin prop is used to define the center point in svg coordinates for polar charts. All children within a polar chart must share the same origin, so setting this prop on children nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` will have no effect. When this prop is not set, it will be calculated based on the `width`, `height` and `padding` of the chart. **This prop is usually not set manually.**

### padding

The `padding` prop specifies the amount of padding in number of pixels between the edge of the chart and any rendered child components. This prop can be given as a number or as an object with padding specified for top, bottom, left and right. As with [width] and [height], the absolute padding will depend on whether the component is rendered in a responsive container. When a component is nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` setting `padding` on the child component will have no effect.

*examples:*
  - `padding={{top: 20, bottom: 60}}`
  - `padding={40}`

*default (provided by default theme):* `padding={50}`

```playground
<VictoryChart
  padding={{ top: 40, bottom: 80, left: 40, right: 80 }}
>
<VictoryLine data={sampleData} />
</VictoryChart>
```

### polar

The boolean `polar` prop specifies whether a chart should be plotted on a polar coordinate system. All components in a given chart must share the same coordinate system, so setting this prop on children nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` will have no effect.

```playground
<div>
<VictoryBar polar
  data={sampleData}
  labels={(d) => d.x}
  width={400} height={400}
  domain={{ y: [0, 7] }}
  style={{ data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 } }}
/>
<VictoryBar
  data={sampleData}
  labels={(d) => d.x}
  width={400} height={400}
  domain={{ y: [0, 7] }}
  style={{ data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 } }}
/>
</div>
```

### range

The `range` prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this cooresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this corresponds to a range of angles and radii. When this value is not given it will be calculated from the `width`, `height`, and `padding`, or from the `startAngle` and `endAngle` in the case of polar charts. All components in a given chart must share the same range, so setting this prop on children nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` will have no effect. **This prop is usually not set manually.**

*examples:*
  - Cartesian: `range={{ x: [50, 250], y: [50, 250] }}`
  - Polar: `range={{ x: [0, 360], y: [0, 250] }}`

### samples

The `samples` prop specifies how many individual points to plot when plotting
y as a function of x. The `samples` prop is ignored if `data` is supplied in props.

*default:* `samples={50}`

```playground
<VictoryChart>
  <VictoryLine
    samples={25}
    y={(d) => Math.sin(5 * Math.PI * d.x)}
  />
  <VictoryLine
    samples={100}
    style={{ data: { stroke: "red" } }}
    y={(d) => Math.cos(5 * Math.PI * d.x)}
  />
</VictoryChart>
```

### scale

The `scale` prop determines which scales your chart should use. This prop can be given as a string specifying a supported scale ("linear", "time", "log", "sqrt"), or as an object with scales specified for x and y. For "time" scales, data points should be `Date` objects or `getTime()` ints.

*default:* `scale="linear"`

*examples:*
  - `scale="time"`
  - `scale={{x: "linear", y: "log"}}`

```playground
<VictoryChart
  scale={{ x: "linear", y: "log" }}
>
  <VictoryLine
    style={{ data: { stroke: "red" } }}
    domain={{ x: [0, 5] }}
    y={(d) => Math.pow(1 - d.x, 10)}
  />
</VictoryChart>
```

### sharedEvents

The `sharedEvents` prop is used to coordinate events between Victory components using `VictorySharedEvents`. **This prop should not be set manually.**

### sortKey

Use the `sortKey` prop to indicate how data should be sorted. This prop is
given directly to the lodash [sortBy] function to be executed on the final
dataset.

This prop can be provided in a variety of formats

**string:** specify which property in a data object to sort the data array by

```jsx
sortKey="x"
```

**function:** use a function to determine how to sort data elements in an array

```jsx
sortKey={(datum) => datum.xValue + datum.error}
```

**array index:** specify which index of an array should be used to sort data when data is given as an array of arrays

```jsx
sortKey={0}
```

**array:** specify multiple properties to sort by

```jsx
sortKey={["age", "height"]}
```

```playground
<VictoryLine
  data={range(0, 2 * Math.PI, 0.01).map((t) => ({ t }))}
  sortKey="t"
  x={(d) => Math.sin(3 * d.t + (2 * Math.PI))}
  y={(d) => Math.sin(2 * d.t)}
/>
```

### standalone

The `standalone` props specifies whether the component should be rendered in a independent `<svg>` element or in a `<g>` tag. This prop defaults to true, and renders an `svg`, however, wrapper components like `VictoryChart`, `VictoryStack`, and `VictoryGroup` force children to use `standalone={false}`.

*default:* `standalone={true}`

```playground
<svg width={300} height={300}>
  <circle cx={150} cy={150} r={150} fill="#c43a31"/>
  <VictoryArea
    standalone={false}
    width={300} height={300} padding={0}
    data={sampleData}
  />
</svg>
```

### style

The `style` prop defines the style of the component. The style prop should be given as an object with styles defined for `data`, `labels` and `parent`. Any valid svg styles are supported, but `width`, `height`, and `padding` should be specified via props as they determine relative layout for components in VictoryChart.

```jsx
style={{
  data: {fill: "tomato", opacity: 0.7},
  labels: {fontSize: 12},
  parent: {border: "1px solid #ccc"}
}}
```

**note:** The `style` prop used by `VictoryAxis` has a different format than the standard `style` prop.

**note:** When a component is rendered as a child of another Victory component, or within a custom `<svg>` element with `standalone={false}` parent styles will be applied to the enclosing `<g>` tag. Many styles that can be applied to a parent `<svg>` will not be expressed when applied to a `<g>`.

**note:** custom `angle` and `verticalAnchor` properties maybe included in labels styles.

*default (provided by default theme):* See [grayscale theme] for more detail

```playground
<VictoryScatter
  style={{
    parent: {
      border: "1px solid #ccc"
    },
    data: {
      fill: "#c43a31", fillOpacity: 0.6, stroke: "#c43a31", strokeWidth: 3
    },
    labels: {
      fontSize: 15, fill: "#c43a31", padding: 15
    }
  }}
  size={9}
  data={sampleData}
  labels={(datum) => datum.x}
/>
```

### theme

The `theme` prop specifies a theme to use for determining styles and layout properties for a component. Any styles or props defined in `theme` may be overwritten by props specified on the component instance. By default, components use a [grayscale theme].

See the [Themes Guide] for information about creating custom themes.

*default:* `theme={VictoryTheme.grayscale}`

```jsx
theme={VictoryTheme.material}
```

### width

The `width` prop determines the width of the containing `<svg>`. By default Victory components render responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%`, `height="auto`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, pass `responsive={false}` to the `containerComponent` like `containerComponent={<VictoryContainer responsive={false}/>}`, or set `standalone={false}` and render the resulting `<g>` tag in your own `<svg>` container. When a component is nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` setting `width` prop on the child component will have no effect.

*default (provided by default theme):* `width={450}`

```playground
<div>
  <VictoryBar width={1200}/>
  <VictoryBar width={1200}
    containerComponent={<VictoryContainer responsive={false}/>}
  />
</div>
```
### x

Use the `x` data accessor prop to determine how the component defines data in the x dimension. This prop may be given in a variety of formats:

**string:** specify which property in an array of data objects should be used as the x value

```jsx
x="month"
```

**function:** use a function to translate each element in a data array into an x value

```jsx
x={(datum) => datum.xValue + datum.error}
```

**array index:** specify which index of an array should be used as an x value when data is given as an array of arrays

```jsx
x={0}
```

**path string or path array:** specify which property in an array of nested data objects should be used as an x value

```jsx
x="employees.name"`, `x={["employees", "name"]}
```

See the [Data Accessors Guide] for more detail on formatting and processing data.

### y

Use `y` data accessor prop to determine how the component defines data in the y dimension. This prop may be given in a variety of formats:

**string:** specify which property in an array of data objects should be used as the y value

```jsx
y="profit"
```

**function:** use a function to translate each element in a data array into a y value

```jsx
y={(datum) => Math.sin(2 * Math.PI * datum.x)}
```

**array index:** specify which index of an array should be used as a y value when data is given as an array of arrays

```jsx
y={1}
```

**path string or path array:** specify which property in an array of nested data objects should be used as a y value

```jsx
y="employees.salary"`, `y={["employees", "salary"]}
```

See the [Data Accessors Guide] for more detail on formatting and processing data.


### y0

Use `y0` data accessor prop to determine how the component defines the baseline y0 data. This prop is useful for defining custom baselines for components like `VictoryBar` or `VictoryArea`. This prop may be given in a variety of formats.

**string:** specify which property in an array of data objects should be used as the y0 value

```jsx
y0="last_quarter_profit"
```

**function:** use a function to translate each element in a data array into a y0 value

```jsx
y0={() => 10}
```

**array index:** specify which index of an array should be used as a y0 value when data is given as an array of arrays

```jsx
y0={1}
```

**path string or path array:** specify which property in an array of nested data objects should be used as a y0 value

```jsx
y0="employees.salary"`, `y={["employees", "salary"]}
```

See the [Data Accessors Guide] for more detail on formatting and processing data.


[x]: https://formidable.com/open-source/victory/docs/common-props#x
[y]: https://formidable.com/open-source/victory/docs/common-props#y
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[width]: https://formidable.com/open-source/victory/docs/common-props#width
[height]: https://formidable.com/open-source/victory/docs/common-props#height
[`Area` component]: https://formidable.com/open-source/victory/docs/victory-primitives#area
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[VictoryTooltip]: https://formidable.com/open-source/victory/docs/victory-tooltip
[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[VictoryClipContainer]: https://formidable.com/open-source/victory/docs/victory-clip-container
[VictoryBrushContainer]: https://formidable.com/open-source/victory/docs/victory-brush-container
[VictoryCursorContainer]: https://formidable.com/open-source/victory/docs/victory-cursor-container
[VictorySelectionContainer]: https://formidable.com/open-source/victory/docs/victory-selection-container
[VictoryVoronoiContainer]: https://formidable.com/open-source/victory/docs/victory-voronoi-container
[VictoryZoomContainer]: https://formidable.com/open-source/victory/docs/victory-zoom-container
[createContainer]: https://formidable.com/open-source/victory/docs/create-container
[VictoryAnimation]: https://formidable.com/open-source/victory/docs/victory-animation
[VictoryTransition]: https://formidable.com/open-source/victory/docs/victory-transition
[sortBy]: https://lodash.com/docs/4.17.4#sortBy
[Animations Guide]: https://formidable.com/open-source/victory/guides/animations
[Data Accessors Guide]: https://formidable.com/open-source/victory/guides/data-accessors
[Custom Components Guide]: https://formidable.com/open-source/victory/guides/custom-components
[Events Guide]: https://formidable.com/open-source/victory/guides/events
[Themes Guide]: https://formidable.com/open-source/victory/guides/themes

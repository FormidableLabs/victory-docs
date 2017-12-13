---
id: 30
title: VictoryVoronoi
category: charts
scope:
  - sampleData
---
# VictoryVoronoi

`VictoryVoronoi` renders a dataset as a series polygons optimized for the nearest data point. `VictoryVoronoi` can be composed with [`VictoryChart`][] to create voronoi overlays for charts, which are useful for attaching events to pieces of data that are otherwise difficult to interact with, usually due to their size.

```playground
<VictoryChart
  theme={VictoryTheme.material}
  domain={{ x: [0, 5], y: [0, 7] }}
>
  <VictoryVoronoi
    style={{ data: { stroke: "#c43a31", strokeWidth: 2 } }}
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 7 }
    ]}
  />
</VictoryChart>
```

## Props

### animate

`type: boolean || object`

`VictoryVoronoi` uses the standard `animate` prop. [Read about it here](/docs/common-props#animate)

See the [Animations Guide][] for more detail on animations and transitions

```jsx
animate={{
  duration: 2000,
  onLoad: { duration: 1000 }
}}
```

### categories

`type: array[string] || { x: array[string], y: array[string] }`

`VictoryVoronoi` uses the standard `categories` prop. [Read about it in detail here](/docs/common-props#categories)

```jsx
categories={{ x: ["dogs", "cats", "mice"] }}
```

### containerComponent

`type: element`

`VictoryVoronoi` uses the standard `containerComponent` prop. [Read about it in detail here](/docs/common-props#containercomponent)

```jsx
containerComponent={<VictoryVoronoiContainer dimension="x"/>}
```

### data

`type: array[object]`

`VictoryVoronoi` uses the standard `data` prop. [Read about it in detail here](/docs/common-props#data)

See the [Data Accessors Guide][] for more detail on formatting and processing data.

```playground
<VictoryVoronoi
  style={{ data: { stroke: "#c43a31", strokeWidth: 2 } }}
  data={[
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 6 }
  ]}
/>
```

### dataComponent

`type: element`

`VictoryVoronoi` uses the standard `dataComponent` prop. [Read about it in detail here](/docs/common-props#datacomponent)

`VictoryVoronoi` supplies the following props to its `dataComponent`: `data`, `datum`, `index`, `origin`, `polar`, `polygon`, `scale`, `size`, `style`, `x`, `y`

See the [Custom Components Guide][] for more detail on creating your own `dataComponents`

*default:* `<Voronoi/>`

```jsx
dataComponent={<Voronoi events={{ onClick: handleClick }}/>}
```

### domain

`type: array[low, high] || { x: [low, high], y: [low, high] }`

`VictoryVoronoi` uses the standard `domain` prop. [Read about it in detail here](/docs/common-props#domain)

```jsx
domain={{x: [0, 100], y: [0, 1]}}
```

### domainPadding

`type: number || array[left, right] || { x: [left, right], y: [bottom, top] }`

`VictoryVoronoi` uses the standard `domainPadding` prop. [Read about it in detail here](/docs/common-props#domainpadding)

```jsx
domainPadding={{x: [10, -10], y: 5}}
```

### eventKey

`type: string || integer || array[string] || function`

`VictoryVoronoi` uses the standard `eventKey` prop to specify how event targets are addressed. **This prop is not commonly used.** [Read about the `eventKey` prop in more detail here](/docs/common-props#eventkey)

```jsx
eventKey="x"
```

### events

`type: array[object]`

`VictoryVoronoi` uses the standard `events` prop. [Read about it in more detail here](/docs/common-props#events)

See the [Events Guide][] for more information on defining events.

```playground
<div>
  <h3>Click Me</h3>
  <VictoryVoronoi
    style={{ data: { stroke: "#c43a31", strokeWidth: 2 } }}
    events={[{
      target: "data",
      eventHandlers: {
        onClick: () => {
          return [{
            target: "data",
            mutation: (props) => {
              const fill = props.style && props.style.fill;
              return fill === "black" ? null : { style: { fill: "black" } };
            }
          }];
        }
      }
    }]}
    data={sampleData}
  />
</div>
```

### groupComponent

`type: element`

`VictoryVoronoi` uses the standard `groupComponent` prop. [Read about it in detail here](/docs/common-props#groupcomponent)

*default:* `<g/>`

```jsx
groupComponent={<g transform="translate(10, 10)" />}
```

### height

`type: numnber`

`VictoryVoronoi` uses the standard `height` prop. [Read about it in detail here](/docs/common-props#height)

*default (provided by default theme):* `height={300}`

```jsx
height={400}
```

### labelComponent

`type: element`

`VictoryVoronoi` uses the standard `labelComponent` prop. [Read about it in detail here](/docs/common-props#labelcomponent)

*default:* `<VictoryLabel/>`

```playground
<VictoryVoronoi
  data={sampleData}
  style={{
    data: { stroke: "#c43a31", strokeWidth: 2 },
    labels: { fontSize: 18}
  }}
  labels={(datum) => datum.y}
  labelComponent={<VictoryLabel dx={-10}/>}
/>
```

### labels

`VictoryVoronoi` uses the standard `labels` prop to define labels for each point. [Read about it in more detail here](/docs/common-props#labels)

```playground
<VictoryVoronoi
  data={sampleData}
  style={{
    data: { stroke: "#c43a31", strokeWidth: 2 },
    labels: { fontSize: 18}
  }}
  labels={(datum) => `y: ${datum.y}`}
/>
```

### name

`type: string`

The `name` prop is used to reference a component instance when defining shared events.

```jsx
name="series-1"
```

### origin

**The `origin` prop is only used by polar charts, and is usually controlled by `VictoryChart`. It will not typically be necessary to set an `origin` prop manually**

[Read about the `origin` prop in detail](/docs/common-props#origin)

### padding

`VictoryVoronoi` uses the standard `padding` prop. [Read about it in detail here](/docs/common-props#padding)

*default (provided by default theme):* `padding={50}`

```jsx
padding={{ top: 20, bottom: 60 }}
```

### polar

`type: boolean`

`VictoryVoronoi` uses the standard `polar` prop. [Read about it in detail here](/docs/common-props#polar)

**Note:** Polar Charts are not yet supported for `VictoryVoronoi`

### range

**The `range` prop is usually controlled by `VictoryChart`. It will not typically be necessary to set a `range` prop manually**

[Read about the `range` prop in detail](/docs/common-props#range)

### samples

`type: number`

`VictoryVoronoi` uses the standard `samples` prop to generate data when plotting functions. [Read about it in more detail here](/docs/common-props#samples)

*default:* `samples={50}`

```jsx
samples={100}
```

### scale

`VictoryVoronoi` uses the standard `scale` prop. [Read about it in detail here](/docs/common-props#scale)

*default:* `scale="linear"`

```jsx
scale={{x: "linear", y: "log"}}
```

### sharedEvents

**The `sharedEvents` prop is used internally to coordinate events between components. It should not be set manually.**

### size

The size prop determines the maximum size of each voronoi area. When this prop is given, a circular area of the specified size will be rendered, and clipped where it would overlap with other voronoi areas. If this prop is not given, the entire voronoi area will be used.

```playground
<VictoryVoronoi
  style={{
    data: { stroke: "#c43a31", strokeWidth: 2 }
  }}
  data={sampleData}
  size={50}
/>
```

### sortKey

`type: string || integer || array[string] || function`

`VictoryVoronoi` uses the standard `sortKey` prop to determine how data should be ordered. [Read about it in more detail here](/docs/common-props#sortkey)

```jsx
sortKey="x"
```

### standalone

`type: boolean`

`VictoryVoronoi` uses the standard `standalone` prop. [Read about it in detail here](/docs/common-props#standalone)

**note:** When `VictoryVoronoi` is nested within a component like `VictoryChart`, this prop will be set to `false`

*default:* `standalone={true}`

```playground
<svg width={300} height={300}>
  <circle cx={150} cy={150} r={150} fill="#c43a31"/>
  <VictoryVoronoi
    standalone={false}
    width={300} height={300} padding={10}
    style={{ data: { stroke: "black", strokeWidth: 2 } }}
    data={sampleData}
  />
</svg>
```


### style

`VictoryVoronoi` uses the standard `style` prop. [Read about it in detail here](/docs/common-props#style)

*default (provided by default theme):* See [grayscale theme][] for more detail

```playground
<VictoryVoronoi
  style={{
    data: {
      stroke: "#c43a31", strokeWidth: 3
    },
    labels: {
      fontSize: 15, fill: "#c43a31", padding: 15
    }
  }}
  size={50}
  data={sampleData}
  labels={(datum) => datum.x}
/>
```

### theme

`VictoryVoronoi` uses the standard `theme` prop. [Read about it in detail here](/docs/common-props#theme)

See the [Themes Guide][] for information about creating custom themes.

*default:* `theme={VictoryTheme.grayscale}`

```jsx
theme={VictoryTheme.material}
```

### width

`type: numbner`

`VictoryVoronoi` uses the standard `width` prop. [Read about it in detail here](/docs/common-props#width)

*default (provided by default theme):* `width={450}`

```jsx
width={400}
```

### x

`type: string || integer || array[string] || function`

`VictoryVoronoi` uses the standard `x` data accessor prop. [Read about it in detail here](/docs/common-props#x)

See the [Data Accessors Guide][] for more detail on formatting and processing data.

```jsx
x="employee.name"
```

### y

`type: string || integer || array[string] || function`

`VictoryVoronoi` uses the standard `y` data accessor prop. [Read about it in detail here](/docs/common-props#y)

See the [Data Accessors Guide][] for more detail on formatting and processing data.

```jsx
y={(d) => d.value + d.error}
```

### y0

`type: string || integer || array[string] || function`

**It is not common to set a `y0` prop with `VictoryVoronoi`, as baselines for `VictoryVoronoi` are only relevant for stacked charts.** [Read more about the `y0` prop here](/docs/common-props#y0)

[Animations Guide]: /guides/animations
[Data Accessors Guide]: /guides/data-accessors
[Custom Components Guide]: /guides/custom-components
[Events Guide]: /guides/events
[Themes Guide]: /guides/themes
[`VictoryChart`]: /docs/victory-chart
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js

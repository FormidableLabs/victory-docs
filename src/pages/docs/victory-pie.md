---
id: 18
title: VictoryPie
category: charts
scope:
  - sampleData
---
# VictoryPie

`VictoryPie` renders a dataset as a pie chart.

```playground
<VictoryPie
  data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]}
/>
```

## Props

### animate

`VictoryPie` uses the standard `animate` prop. [Read about it here](/docs/common-props#animate)

See the [Animations Guide][] for more detail on animations and transitions

```jsx
animate={{
  duration: 2000
}}
```

### categories

`VictoryPie` uses the standard `categories` prop. [Read about it here](/docs/common-props#categories)

```jsx
categories={{ x: ["dogs", "cats", "mice"] }}
```

### colorScale

The `colorScale` prop defines a color scale to be applied to each slice of `VictoryPie`. This prop should be given as an array of CSS colors, or as a string corresponding to one of the built in color scales: "grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue". `VictoryPie` will assign a color to each slice by index, unless they are explicitly specified in the data object. Colors will repeat when there are more slices than colors in the provided `colorScale`.

*default (provided by default theme):* `colorScale="grayscale"`

```playground
<VictoryPie
  colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
  data={sampleData}
/>
```

### containerComponent

`VictoryPie` uses the standard `containerComponent` prop. [Read about it here](/docs/common-props#containercomponent)

**Note:** `VictoryPie` only works with the `VictoryContainer` component

*default:* `containerComponent={<VictoryContainer/>}`

```jsx
containerComponent={<VictoryContainer responsive={false}/>}
```

### cornerRadius

The `cornerRadius` prop specifies the corner radius of the slices rendered in the pie chart.

```playground
<VictoryPie
  cornerRadius={25}
  data={sampleData}
/>
```

### data

`VictoryPie` uses the standard `data` prop. [Read about it here](/docs/common-props#data)

See the [Data Accessors Guide][] for more detail on formatting and processing data.


```playground
<VictoryPie
  data={[
    { x: 1, y: 2, label: "one" },
    { x: 2, y: 3, label: "two" },
    { x: 3, y: 5, label: "three" }
  ]}
/>
```

### dataComponent

`VictoryPie` uses the standard `dataComponent` prop. [Read about it here](/docs/common-props#datacomponent)

`VictoryPie` supplies the following props to its `dataComponent`: `data`, `datum`, `events`, `index`, `pathFunction`, `slice`, `style`

See the [Custom Components Guide][] for more detail on creating your own `dataComponents`

*default:* `<Slice/>`

```jsx
dataComponent={<Slice events={{ onClick: handleClick }}/>}
```

### endAngle

The `endAngle` props defines the overall end angle of the pie in degrees. This prop is used in conjunction with `startAngle` to create a pie that spans only a segment of a circle, or to change overall rotation of the pie. This prop should be given as a number of degrees. Degrees are defined as starting at the 12 o'clock position, and proceeding clockwise.

*default:* `endAngle={360}`


```playground
<div>
<VictoryPie
  startAngle={90}
  endAngle={450}
  data={sampleData}
/>
<VictoryPie
  startAngle={90}
  endAngle={-90}
  data={sampleData}
/>
</div>
```

### eventKey

`VictoryPie` uses the standard `eventKey` prop to specify how event targets are addressed. **This prop is not commonly used.** [Read about the `eventKey` prop in more detail here](/docs/common-props#eventkey)

```jsx
eventKey="x"
```

### events

`VictoryPie` uses the standard `events` prop. [Read about it here](/docs/common-props#events)

See the [Events Guide][] for more information on defining events.

```playground
<div>
  <h3>Click Me</h3>
  <VictoryPie
    events={[{
      target: "data",
      eventHandlers: {
        onClick: () => {
          return [
            {
              target: "data",
              mutation: (props) => {
                const fill = props.style && props.style.fill;
                return fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
              }
            }, {
              target: "labels",
              mutation: (props) => {
                return props.text === "clicked" ? null : { text: "clicked" };
              }
            }
          ];
        }
      }
    }]}
    data={sampleData}
  />
</div>
```

### groupComponent

`VictoryPie` uses the standard `groupComponent` prop. [Read about it here](/docs/common-props#groupcomponent)

*default:* `<g/>`

```jsx
groupComponent={<g transform="rotate(90)" />}
```

### height

`VictoryPie` uses the standard `height` prop. [Read about it here](/docs/common-props#height)

*default (provided by default theme):* `height={400}`

```jsx
height={400}
```

### innerRadius

The `innerRadius` prop determines the number of pixels between the center of the chart and the inner edge of a donut chart. When this prop is set to zero a regular pie chart is rendered.

```playground
<VictoryPie
  innerRadius={100}
  data={sampleData}
/>
```

### labelComponent

`VictoryPie` uses the standard `labelComponent` prop. [Read about it here](/docs/common-props#labelcomponent)

*default:* `<VictoryLabel/>`

```playground
<VictoryPie
  data={sampleData}
  labels={(d) => d.y}
  labelComponent={<VictoryLabel angle={45}/>}
/>
```

### labelRadius

The `labelRadius` prop defines the radius of the arc that will be used for positioning each slice label. If this prop is not set, the label radius will default to the radius of the pie + label padding.

```playground
<VictoryPie
  data={sampleData}
  labelRadius={90}
  style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
/>
```

### labels

`VictoryPie` uses the standard `labels` prop. [Read about it here](/docs/common-props#labels)

```playground
<VictoryPie
  data={sampleData}
  labels={(d) => `y: ${d.y}`}
/>
```

### name

The `name` prop is used to reference a component instance when defining shared events.

```jsx
name="series-1"
```

### padAngle

The `padAngle` prop defines the amount of separation between adjacent data slices in number of degrees.

```playground
<VictoryPie
  padAngle={3}
  innerRadius={100}
  data={sampleData}
/>
```

### padding

`VictoryPie` uses the standard `padding` prop. [Read about it here](/docs/common-props#padding)

*default (provided by default theme):* `padding={50}`

```jsx
padding={{ top: 20, bottom: 60 }}
```

### sharedEvents

**The `sharedEvents` prop is used internally to coordinate events between components. It should not be set manually.**

### sortKey

`VictoryPie` uses the standard `sortKey` prop. [Read about it here](/docs/common-props#sortkey)

See the [Data Accessors Guide][] for more detail on formatting and processing data.

```jsx
sortKey="x"
```

### standalone

`VictoryPie` uses the standard `standalone` prop. [Read about it here](/docs/common-props#standalone)

*default:* `standalone={true}`

```playground
<svg width={300} height={300}>
  <circle cx={150} cy={150} r={50} fill="#c43a31"/>
  <VictoryPie
    standalone={false}
    width={300} height={300}
    innerRadius={75}
    data={sampleData}
  />
</svg>
```

### startAngle

The `startAngle` props defines the overall start angle of the pie in degrees. This prop is used in conjunction with `endAngle` to create a pie that spans only a segment of a circle, or to change overall rotation of the pie. This prop should be given as a number of degrees. Degrees are defined as starting at the 12 o'clock position, and proceeding clockwise.

*default:* `endAngle={0}`


```playground
<div>
<VictoryPie
  startAngle={90}
  endAngle={450}
  data={sampleData}
/>
<VictoryPie
  startAngle={90}
  endAngle={-90}
  data={sampleData}
/>
</div>
```

### style

`VictoryPie` uses the standard `style` prop. [Read about it here](/docs/common-props#style)

*default (provided by default theme):* See [grayscale theme][] for more detail

```playground
  <VictoryPie
    style={{
      data: {
        fillOpacity: 0.9, stroke: "#c43a31", strokeWidth: 3
      },
      labels: {
        fontSize: 25, fill: "#c43a31"
      }
    }}
    data={sampleData}
  />
```

### theme

`VictoryPie` uses the standard `theme` prop. [Read about it here](/docs/common-props#theme)

See the [Themes Guide][] for information about creating custom themes.

*default:* `theme={VictoryTheme.grayscale}`

```jsx
theme={VictoryTheme.material}
```

### width

`VictoryPie` uses the standard `width` prop. [Read about it here](/docs/common-props#width)

*default (provided by default theme):* `width={400}`

```jsx
width={400}
```

### x

`VictoryPie` uses the standard `x` data accessor prop. [Read about it here](/docs/common-props#x)

See the [Data Accessors Guide][] for more detail on formatting and processing data.

```jsx
x="employee.name"
```

### y

`VictoryPie` uses the standard `y` data accessor prop. [Read about it here](/docs/common-props#y)

See the [Data Accessors Guide][] for more detail on formatting and processing data.

```jsx
y={(d) => d.value + d.error}
```


[Animations Guide]: /guides/animations
[Data Accessors Guide]: /guides/data-accessors
[Custom Components Guide]: /guides/custom-components
[Events Guide]: /guides/events
[Themes Guide]: /guides/themes
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js

---
id: 13
title: VictoryErrorBar
category: chart
scope: 
  - sampleData
include: /partials/docs/containers.md
---
# VictoryErrorBar

`VictoryErrorBar` renders a dataset as a series of error bars. `VictoryErrorBar` can be composed with other components to add x and y error bars to data.

```playground
<VictoryChart
  domainPadding={15}
  theme={VictoryTheme.material}
>
  <VictoryErrorBar
    data={[
      {x: 15, y: 35000, error: 0.2},
      {x: 20, y: 42000, error: 0.05},
      {x: 25, y: 30000, error: 0.1},
      {x: 30, y: 35000, error: 0.2},
      {x: 35, y: 22000, error: 0.15}
    ]}
    errorX={(datum) => datum.error * datum.x}
    errorY={(datum) => datum.error * datum.y}
  />
</VictoryChart>
```

## Props

### animate

`VictoryErrorBar` uses the standard `animate` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#animate)

See the [Animations Guide] for more detail on animations and transitions

```jsx
animate={{
  duration: 2000,
  onLoad: { duration: 1000 }
}}
```

### borderWidth

The `borderWidth` prop sets the border width of the error bars. `borderWidth` will set both x and y error bar width.

```jsx
borderWidth={10}
```

### categories

`VictoryErrorBar` uses the standard `categories` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#categories)

```jsx
categories={{ x: ["dogs", "cats", "mice"] }}
```

### containerComponent

`VictoryErrorBar` uses the standard `containerComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#containercomponent)

```jsx
containerComponent={<VictoryVoronoiContainer dimension="x"/>}
```

### data

Specify data via the `data` prop. By default, `VictoryErrorBar` expects data as an array of objects with `x`, `y`, `errorX` and `errorY` keys. Use the [`x`], [`y`], [`errorX`] and [`errorY`] data accessor props to specify custom data formats. Refer to the [Data Accessors Guide] for more detail.

```playground
<VictoryErrorBar
  data={[
    {x: 15, y: 35, errorX: 1, errorY: 3},
    {x: 20, y: 42, errorX: 3, errorY: 2},
    {x: 25, y: 30, errorX: 5, errorY: 5},
    {x: 30, y: 35, errorX: 5, errorY: 3},
    {x: 35, y: 22, errorX: 8, errorY: 2}
  ]}
/>
```

### dataComponent

`VictoryErrorBar` uses the standard `dataComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#datacomponent)

`VictoryErrorBar` supplies the following props to its `dataComponent`: `data`, `datum`, `index`, `padding`, `polar`, `origin`, `scale`, `style`, `borderWidth`, `x`, `y`, `errorX`, `errorY`

See the [Custom Components Guide] for more detail on creating your own `dataComponents`

*default:* `<ErrorBar/>`

```jsx
dataComponent={<ErrorBar events={{ onClick: handleClick }}/>}
```

### domain

`VictoryErrorBar` uses the standard `domain` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domain)

```jsx
domain={{x: [0, 100], y: [0, 1]}}
```

### domainPadding

`VictoryErrorBar` uses the standard `domainPadding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domainpadding)

```jsx
domainPadding={{x: [10, -10], y: 5}}
```
### errorX

Use `errorX` data accessor prop to define the x error bar.

**string:** specify which property in an array of data objects should be used as the errorX value

*examples:* `errorX="uncertainty"`

**function:** use a function to translate each element in a data array into a errorX value

*examples:* `errorX={() => 10}`

**array index:** specify which index of an array should be used as a errorX value when data is given as an array of arrays

*examples:* `errorX={1}`

**path string or path array:** specify which property in an array of nested data objects should be used as a errorX value

*examples:* `errorX="measurement.uncertainty"`, `errorX={["measurement", "uncertainty"]}`


### errorY

Use `errorY` data accessor prop to define the y error bar.

**string:** specify which property in an array of data objects should be used as the errorY value

*examples:* `errorY="uncertainty"`

**function:** use a function to translate each element in a data array into a errorY value

*examples:* `errorY={() => 10}`

**array index:** specify which index of an array should be used as a errorY value when data is given as an array of arrays

*examples:* `errorY={1}`

**path string or path array:** specify which property in an array of nested data objects should be used as a errorY value

*examples:* `errorY="measurement.uncertainty"`, `errorY={["measurement", "uncertainty"]}`

### eventKey

`VictoryErrorBar` uses the standard `eventKey` prop to specify how event targets are addressed. **This prop is not commonly used.** [Read about the `eventKey` prop in more detail here](https://formidable.com/open-source/victory/docs/common-props#eventkey)

```jsx
eventKey="x"
```

### events

`VictoryErrorBar` uses the standard `events` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#events)

See the [Events Guide] for more information on defining events.

```playground
<div>
  <h3>Click Me</h3>
  <VictoryErrorBar
    style={{
      data: { strokeWidth: 5 },
      parent: { border: "1px solid #ccc"}
    }}
    events={[{
      target: "data",
      eventHandlers: {
        onClick: () => {
          return [
            {
              target: "data",
              mutation: (props) => {
                const stroke = props.style && props.style.stroke;
                return stroke === "#c43a31" ? null : { style: { stroke: "#c43a31", strokeWidth: 7 } };
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

`VictoryErrorBar` uses the standard `groupComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#groupcomponent)

*default:* `<g/>`

```jsx
groupComponent={<g transform="translate(10, 10)" />}
```

### height

`VictoryErrorBar` uses the standard `height` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#height)

*default (provided by default theme):* `height={300}`

```jsx
height={400}
```

### labelComponent

`VictoryErrorBar` uses the standard `labelComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#labelcomponent)

*default:* `<VictoryLabel/>`

```playground
<VictoryErrorBar
  data={sampleData}
  labels={(d) => d.y}
  labelComponent={<VictoryLabel dx={-20} dy={18}/>}
/>
```

### labels

`VictoryErrorBar` uses the standard `labels` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#labels)

```playground
<VictoryErrorBar
  data={sampleData}
  labels={(d) => d.y}
/>
```

### name

The `name` prop is used to reference a component instance when defining shared events.

```jsx
name="series-1"
```

### origin

**The `origin` prop is only used by polar charts, and is usually controlled by `VictoryChart`. It will not typically be necessary to set an `origin` prop manually**

[Read about the `origin` prop in detail](https://formidable.com/open-source/victory/docs/common-props#origin)


### padding

`VictoryErrorBar` uses the standard `padding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#padding)

*default (provided by default theme):* `padding={50}`

```jsx
padding={{ top: 20, bottom: 60 }}
```

### polar

`VictoryErrorBar` uses the standard `polar` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#polar)

**Note:** Polar Charts are not yet supported for `VictoryErrorBar`

### range

**The `range` prop is usually controlled by `VictoryChart`. It will not typically be necessary to set a `range` prop manually**

[Read about the `range` prop in detail](https://formidable.com/open-source/victory/docs/common-props#range)

### samples

`VictoryErrorBar` uses the standard `samples` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#samples)

*default:* `samples={50}`

```jsx
samples={100}
```

### scale

`VictoryErrorBar` uses the standard `scale` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#scale)

*default:* `scale="linear"`

```jsx
scale={{x: "linear", y: "log"}}
```

### sharedEvents

**The `sharedEvents` prop is used internally to coordinate events between components. It should not be set manually.**

### sortKey

`VictoryErrorBar` uses the standard `sortKey` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#sortkey)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
sortKey="x"
```

### standalone

`VictoryErrorBar` uses the standard `standalone` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#standalone)

**note:** When `VictoryErrorBar` is nested within a component like `VictoryChart`, this prop will be set to `false`

*default:* `standalone={true}`

```playground
<svg width={300} height={300}>
  <circle cx={150} cy={150} r={150} fill="#c43a31"/>
  <VictoryErrorBar
    standalone={false}
    width={300} height={300} padding={20}
    data={sampleData}
  />
</svg>
```

### style

`VictoryErrorBar` uses the standard `style` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#style)

*default (provided by default theme):* See [grayscale theme] for more detail

```playground
  <VictoryErrorBar
    style={{
      parent: {
        border: "1px solid #ccc"
      },
      data: {
        stroke: "#c43a31", strokeWidth: 5
      },
      labels: {
        fontSize: 15, fill: "#c43a31"
      }
    }}
    data={sampleData}
    labels={(d) => d.x}
  />
```

### theme

`VictoryErrorBar` uses the standard `theme` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#theme)

See the [Themes Guide] for information about creating custom themes.

*default:* `theme={VictoryTheme.grayscale}`

```jsx
theme={VictoryTheme.material}
```

### width

`VictoryErrorBar` uses the standard `width` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#width)

*default (provided by default theme):* `width={450}`

```jsx
width={400}
```

### x

`VictoryErrorBar` uses the standard `x` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#x)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
x={(datum) => new Date(datum.day)}
```

[Animations Guide]: https://formidable.com/open-source/victory/guides/animations
[Data Accessors Guide]: https://formidable.com/open-source/victory/guides/data-accessors
[Custom Components Guide]: https://formidable.com/open-source/victory/guides/custom-components
[Events Guide]: https://formidable.com/open-source/victory/guides/events
[Themes Guide]: https://formidable.com/open-source/victory/guides/themes
[`VictoryChart`]: https://formidable.com/open-source/victory/docs/victory-chart
[`x`]: https://formidable.com/open-source/victory/docs/victory-candlestick#x
[`y`]: https://formidable.com/open-source/victory/docs/victory-candlestick#y
[`errorX`]: https://formidable.com/open-source/victory/docs/victory-candlestick#errorX
[`errorY`]: https://formidable.com/open-source/victory/docs/victory-candlestick#errorY
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js

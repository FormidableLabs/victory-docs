# VictoryBar

VictoryBar renders a dataset as series of bars. VictoryBar can be composed with [`VictoryChart`] to create bar charts.

```playground
<VictoryChart
  theme={VictoryTheme.material}
  domainPadding={10}
>
  <VictoryBar
    style={{ data: { fill: "#c43a31" } }}
    data={sampleData}
  />
</VictoryChart>
```

## Props

### animate

`VictoryBar` uses the standard `animate` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#animate)

See the [Animations Guide] for more detail on animations and transitions

```jsx
animate={{
  duration: 2000,
  onLoad: { duration: 1000 }
}}
```

### categories

`VictoryBar` uses the standard `categories` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#categories)

```jsx
categories={{ x: ["dogs", "cats", "mice"] }}
```

### containerComponent

`VictoryBar` uses the standard `containerComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#containercomponent)

```jsx
containerComponent={<VictoryVoronoiContainer dimension="x"/>}
```

### data

`VictoryBar` uses the standard `data` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#data)

See the [Data Accessors Guide] for more detail on formatting and processing data.

In addition to svg style properties and `label`, `VictoryBar` will also preferentially use `width` properties supplied via data objects

```playground
<VictoryBar
  data={[
    { x: 1, y: 2, y0: 1, width: 4 },
    { x: 2, y: 3, y0: 2, width: 6 },
    { x: 3, y: 5, y0: 2, width: 8 },
    { x: 4, y: 4, y0: 3, width: 10 },
    { x: 5, y: 6, y0: 3, width: 12 }
  ]}
/>
```

### dataComponent

`VictoryBar` uses the standard `dataComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#datacomponent)

`VictoryBar` supplies the following props to its `dataComponent`: `data`, `datum`, `horizontal`, `index`, `padding`, `polar`, `origin`, `scale`, `style`, `width`, `height`, `x`, `y`, `y0`, `x0`

See the [Custom Components Guide] for more detail on creating your own `dataComponents`

*default:* `<Bar/>`

```jsx
dataComponent={<Bar events={{ onClick: handleClick }}/>}
```


### domain

`VictoryBar` uses the standard `domain` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domain)

```jsx
domain={{x: [0, 100], y: [0, 1]}}
```

### domainPadding

`VictoryBar` uses the standard `domainPadding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domainpadding)

```jsx
domainPadding={{x: [10, -10], y: 5}}
```

### eventKey

`VictoryBar` uses the standard `eventKey` prop to specify how event targets are addressed. **This prop is not commonly used.** [Read about the `eventKey` prop in more detail here](https://formidable.com/open-source/victory/docs/common-props#eventkey)

```jsx
eventKey="x"
```

### events

`VictoryBar` uses the standard `events` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#events)

See the [Events Guide] for more information on defining events.

```playground
<div>
  <h3>Click Me</h3>
  <VictoryBar
    style={{
      data: { fill: "#c43a31" },
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
                const fill = props.style && props.style.fill;
                return fill === "black" ? null : { style: { fill: "black" } };
              }
            }, {
              target: "labels",
              mutation: (props) => {
                return props.text ? null : { text: "clicked" };
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

`VictoryBar` uses the standard `groupComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#groupcomponent)

*default:* `<g/>`

```jsx
groupComponent={<g transform="translate(10, 10)" />}
```

### height

`VictoryBar` uses the standard `height` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#height)

*default (provided by default theme):* `height={300}`

```jsx
height={400}
```

### horizontal

The horizontal prop determines whether the bars will be laid vertically or horizontally. The bars will be vertical if this prop is false or unspecified, or horizontal if the prop is set to true.

*default:* horizontal={false}

```playground
<VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ y: 10 }}
  style={{
    parent: { border: "1px solid #ccc"}
  }}
>
  <VictoryBar horizontal
    style={{
      data: { fill: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    data={sampleData}
  />
</VictoryChart>
```

### labelComponent

`VictoryBar` uses the standard `labelComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#labelcomponent)

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

`VictoryBar` uses the standard `labels` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#labels)

```playground
<VictoryBar
  data={sampleData}
  labels={(d) => `y: ${d.y}`}
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

`VictoryBar` uses the standard `padding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#padding)

*default (provided by default theme):* `padding={50}`

```jsx
padding={{ top: 20, bottom: 60 }}
```

### polar

`VictoryBar` uses the standard `polar` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#polar)

```playground
<VictoryChart polar
  theme={VictoryTheme.material}
  style={{
    parent: { border: "1px solid #ccc"}
  }}
>
  <VictoryPolarAxis dependentAxis
    style={{ axis: { stroke: "none" } }}
    tickFormat={() => null}
  />
  <VictoryPolarAxis/>
  <VictoryBar
    data={sampleData}
    style={{
      data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 }
    }}
  />
</VictoryChart>
```

### range

**The `range` prop is usually controlled by `VictoryChart`. It will not typically be necessary to set a `range` prop manually**

[Read about the `range` prop in detail](https://formidable.com/open-source/victory/docs/common-props#range)

### samples

`VictoryBar` uses the standard `samples` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#samples)

*default:* `samples={50}`

```jsx
samples={100}
```

### scale

`VictoryBar` uses the standard `scale` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#scale)

*default:* `scale="linear"`

```jsx
scale={{x: "linear", y: "log"}}
```

### sharedEvents

**The `sharedEvents` prop is used internally to coordinate events between components. It should not be set manually.**

### sortKey

`VictoryBar` uses the standard `sortKey` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#sortkey)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
sortKey="x"
```

### standalone

`VictoryBar` uses the standard `standalone` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#standalone)

**note:** When `VictoryBar` is nested within a component like `VictoryChart`, this prop will be set to `false`

*default:* `standalone={true}`

```playground
<svg width={300} height={300}>
  <circle cx={150} cy={150} r={150} fill="#c43a31"/>
  <VictoryBar
    standalone={false}
    width={300} height={300} padding={{left: 10, right: 10}}
    data={sampleData}
  />
</svg>
```

### style

`VictoryBar` uses the standard `style` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#style)

*default (provided by default theme):* See [grayscale theme] for more detail

```playground
  <VictoryBar
    style={{
      parent: {
        border: "1px solid #ccc"
      },
      data: {
        fill: "#c43a31", fillOpacity: 0.7, stroke: "#c43a31", strokeWidth: 3
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

`VictoryBar` uses the standard `theme` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#theme)

See the [Themes Guide] for information about creating custom themes.

*default:* `theme={VictoryTheme.grayscale}`

```jsx
theme={VictoryTheme.material}
```

### width

`VictoryBar` uses the standard `width` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#width)

*default (provided by default theme):* `width={450}`

```jsx
width={400}
```

### x

`VictoryBar` uses the standard `x` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#x)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
x="employee.name"
```

### y

`VictoryBar` uses the standard `y` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#y)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
y={(d) => d.value + d.error}
```

### y0

`VictoryBar` uses the standard `y0` data accessor prop to set a baseline. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#y0)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```playground
<VictoryChart domainPadding={30}>
  <VictoryBar
    data={sampleData}
    y0={(d) => d.y - 1}
  />
</VictoryChart>
```

[Animations Guide]: https://formidable.com/open-source/victory/guides/animations
[Data Accessors Guide]: https://formidable.com/open-source/victory/guides/data-accessors
[Custom Components Guide]: https://formidable.com/open-source/victory/guides/custom-components
[Events Guide]: https://formidable.com/open-source/victory/guides/events
[Themes Guide]: https://formidable.com/open-source/victory/guides/themes
[`VictoryChart`]: https://formidable.com/open-source/victory/docs/victory-chart
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js

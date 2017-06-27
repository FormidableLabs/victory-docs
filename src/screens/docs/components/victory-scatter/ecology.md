# VictoryScatter

VictoryScatter renders a dataset as a series of points. VictoryScatter can be composed with [`VictoryChart`] to create scatter plots.

```playground
<VictoryChart
  theme={VictoryTheme.material}
  domain={{ x: [0, 5], y: [0, 7] }}
  style={{
    parent: { border: "1px solid #ccc"}
  }}
>
  <VictoryScatter
    style={{
      data: { fill: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    size={7}
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

`VictoryScatter` uses the standard `animate` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#animate)

See the [Animations Guide] for more detail on animations and transitions

```js
  animate={{
    duration: 2000,
    onLoad: { duration: 1000 },
    onEnter: { duration: 500, before: () => ({y: 0}) }
  )}
```
### bubbleProperty

The `bubbleProperty` prop indicates which property of the data object should be used to scale data points in a bubble chart. If a `bubbleProperty` is given, `size` and `symbol` props will be ignored. (Bubble charts should render circles).

*default:* `bubbleProperty="z"`

```playground
<VictoryScatter
  style={{
    data: { fill: "#c43a31" },
    parent: { border: "1px solid #ccc"}
  }}
  bubbleProperty="amount"
  maxBubbleSize={25}
  minBubbleSize={5}
  data={[
    { x: 1, y: 2, amount: 30 },
    { x: 2, y: 3, amount: 40 },
    { x: 3, y: 5, amount: 25 },
    { x: 4, y: 4, amount: 10 },
    { x: 5, y: 7, amount: 45 }
  ]}
/>
```

### categories

`VictoryScatter` uses the standard `categories` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#categories)

```js
categories={["dogs", "cats", "mice"]}
```

### containerComponent

`VictoryScatter` uses the standard `containerComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#containercomponent)

```js
containerComponent={<VictoryVoronoiContainer dimension="x"/>}
```

### data

`VictoryScatter` uses the standard `data` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#data)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```js
data={[
  { x: 1, y: 2, y0: 1 },
  { x: 2, y: 3: y0: 2 },
  { x: 3, y: 5, y0: 4 }
]}
```

### dataComponent

`VictoryScatter` uses the standard `dataComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#datacomponent)

`VictoryScatter` supplies the following props to its `dataComponent`: `data`, `datum`, `index`, `origin`, `polar`,`scale`, `size`, `style`, `symbol`, `x`, `y`

See the [Custom Components Guide] for more detail on creating your own `dataComponents`

*default:* `<Point/>`

```js
dataComponent={<Point events={{ onClick: handleClick }}/>}
```


### domain

`VictoryScatter` uses the standard `domain` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domain)

```js
domain={{x: [0, 100], y: [0, 1]}}
```

### domainPadding

`VictoryScatter` uses the standard `domainPadding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domainpadding)

```js
domainPadding={{x: [10, -10], y: 5}}
```

### eventKey

`VictoryScatter` uses the standard `eventKey` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#eventkey)

**note:** `VictoryScatter` only renders one element per dataset, so only one event key will be generated.

```js
eventKey="x"
```

### events

`VictoryScatter` uses the standard `events` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#events)

See the [Events Guide] for more information on defining events.

```playground
<div>
  <h3>Click Me</h3>
  <VictoryScatter
    style={{
      data: { fill: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    size={9}
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

`VictoryScatter` uses the standard `groupComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#groupcomponent)

*default:* `<g/>`

```js
groupComponent={<g transform="translate(10, 10)" />}
```

### height

`VictoryScatter` uses the standard `height` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#height)

*default (provided by default theme):* `height={300}`

```jsx
height={400}
```

### labelComponent

`VictoryScatter` uses the standard `labelComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#labelcomponent)

*default:* `<VictoryLabel/>`

```js
labelComponent={<VictoryLabel dy={20}/>}
```

### labels

`VictoryScatter` uses the standard `labels` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#labels)

```js
labels={(datum) => datum.y}
```

### maxBubbleSize

The `maxBubbleSize` prop sets an upper limit for scaling data points in a bubble chart. If not given, this prop will be calculated based on the `width`, `height`, and `padding` of the component.

For more information on bubble charts, see [`bubbleProperty`]

```jsx
maxBubbleSize={25}
```

### minBubbleSize

The `minBubbleSize` prop sets a lower limit for scaling data points in a bubble chart. If not given, this prop will be calculated based on the calculated `maxBubbleSize`.

For more information on bubble charts, see [`bubbleProperty`]

```jsx
minBubbleSize={5}
```

### name

`VictoryScatter` uses the standard `name` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#name)

```jsx
name="series-1"
```

### origin

`VictoryScatter` uses the standard `origin` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#origin)

*note:* The `origin` prop is only used by polar charts, and is usually controlled by `VictoryChart`. It will not typically be necessary to set an `origin` prop manually

### padding

`VictoryScatter` uses the standard `padding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#padding)

*default (provided by default theme):* `padding={50}`

```js
padding={{ top: 20, bottom: 60 }}
```

### polar

`VictoryScatter` uses the standard `polar` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#polar)

```playground
<VictoryChart polar
  domain={{ y: [0, 7] }}
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
  <VictoryScatter
    data={sampleData}
    style={{
      data: { fill: "#c43a31" }
    }}
    size={5}
  />
</VictoryChart>
```

### range

`VictoryScatter` uses the standard `range` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#range)

*note:* The `range` prop is usually controlled by `VictoryChart`. It will not typically be necessary to set a `range` prop manually

### samples

`VictoryScatter` uses the standard `samples` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#samples)

*default:* `samples={50}`

```jsx
samples={100}
```

### scale

`VictoryScatter` uses the standard `scale` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#scale)

*default:* `scale="linear"`

```js
scale={{x: "linear", y: "log"}}
```

### sharedEvents

`VictoryScatter` uses the standard `sharedEvents` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#sharedevents)

*note:* The `sharedEvents` prop used internally to coordinate events between components. It should not be set manually.

### size

The `size` prop determines how to scale each data point. This prop may also be given as a function of data. If `size` is not specified, it will default to 1. `size` may also be set directly on each data object.

```playground
<VictoryScatter
  size={(datum) => datum.y + 2 }
  data={sampleData}
/>
```

### sortKey

`VictoryScatter` uses the standard `sortKey` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#sortkey)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
sortKey="x"
```

### standalone

`VictoryScatter` uses the standard `standalone` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#standalone)

**note:** When `VictoryScatter` is nested within a component like `VictoryChart`, this prop will be set to `false`

*default:* `standalone={true}`

```playground
<svg width={300} height={300}>
  <circle cx={150} cy={150} r={150} fill="#c43a31"/>
  <VictoryScatter
    standalone={false}
    width={300} height={300} padding={10}
    data={sampleData}
    size={7}
  />
</svg>
```


### style

`VictoryScatter` uses the standard `style` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#style)

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

### symbol

The `symbol` prop determines which symbol should be drawn to represent data points. Options are: "circle", "diamond", "plus", "square", "star", "triangleDown", "triangleUp". This prop may also be given as a function of data. If no `symbol` prop is specified, a circle will be rendered. `symbol` may also be set directly on each data object.

*default:* `symbol="circle"`

```playground
<VictoryScatter
  symbol={(datum) => datum.y > 3 ? "triangleUp" : "triangleDown"}
  size={7}
  data={sampleData}
/>
```

### theme

`VictoryScatter` uses the standard `theme` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#theme)

See the [Themes Guide] for information about creating custom themes.

*default:* `theme={VictoryTheme.grayscale}`

```jsx
theme={VictoryTheme.material}
```

### width

`VictoryScatter` uses the standard `width` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#width)

*default (provided by default theme):* `width={450}`

```jsx
width={400}
```

### x

`VictoryScatter` uses the standard `x` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#x)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```js
x="employee.name"
```

### y

`VictoryScatter` uses the standard `y` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#y)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```js
y={(d) => d.value + d.error}
```

### y0

VictoryScatter` uses the standard `y0` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#y0)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
y0={(d) => d.value - d.error}
```

[Animations Guide]: https://formidable.com/open-source/victory/guides/animations
[`bubbleProperty`]: https://formidable.com/open-source/victory/docs/victory-scatter#bubbleproperty
[Data Accessors Guide]: https://formidable.com/open-source/victory/guides/data-accessors
[Custom Components Guide]: https://formidable.com/open-source/victory/guides/custom-components
[Events Guide]: https://formidable.com/open-source/victory/guides/events
[Themes Guide]: https://formidable.com/open-source/victory/guides/themes
[`VictoryChart`]: https://formidable.com/open-source/victory/docs/victory-chart





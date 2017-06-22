# VictoryArea

VictoryArea renders a dataset as a single area. VictoryArea can be composed with [VictoryChart] to create area charts.

```playground
<VictoryChart
  theme={VictoryTheme.material}
  style={{
    parent: { border: "1px solid #ccc"}
  }}
>
  <VictoryArea
    style={{
      data: { fill: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
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

### `animate`

`VictoryArea` uses the standard `animate` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#animate)

*type:* `animate: PropTypes.object`

*example:*
```js
  animate={{
    duration: 2000,
    onLoad: { duration: 1000 },
    onEnter: { duration: 500, before: () => ({y: 0}) }
  )}
```

### `categories`

`VictoryArea` uses the standard `categories` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#categories)

*type:*
```js
categories: PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.shape({
    x: PropTypes.arrayOf(PropTypes.string), y: PropTypes.arrayOf(PropTypes.string)
  })
])
```

*example:* `categories={["dogs", "cats", "mice"]}`

### `containerComponent`

`VictoryArea` uses the standard `containerComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#containercomponent)

*type:* `containerComponent: PropTypes.element`

*default:* `containerComponent={<VictoryContainer/>}`

*example:* `containerComponent={<VictoryVoronoiContainer dimension="x"/>}`

### `data`

`VictoryArea` uses the standard `data` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#data)

*type:* `data: PropTypes.array`

*example:*
```js
data={[
  { x: 1, y: 2, y0: 1 },
  { x: 2, y: 3: y0: 2 },
  { x: 3, y: 5, y0: 4 }
]}
```

### `dataComponent`

`VictoryArea` uses the standard `dataComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#datacomponent)

`VictoryArea` supplies the following props to its `dataComponent`: `data`, `events`, `groupComponent`, `interpolation`, `origin` (for polar charts), `polar`, `scale`, `style`

*type:* `dataComponent: PropTypes.element`

*default:* `<Area/>`

*example:* `dataComponent={<Area events={{onClick: () => console.log("wow")}}/>}`


### `domain`

`VictoryArea` uses the standard `domain` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domain)

*type:*
```js
domain: PropTypes.oneOfType([
  CustomPropTypes.domain,
  PropTypes.shape({ x: CustomPropTypes.domain, y: CustomPropTypes.domain })
])
```

*example:* `domain={{x: [0, 100], y: [0, 1]}}`

### `domainPadding`

`VictoryArea` uses the standard `domainPadding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#domainpadding)

*type:*
```js
domainPadding: PropTypes.oneOfType([
  PropTypes.shape({
    x: PropTypes.oneOfType([ PropTypes.number, PropTypes.arrayOf(PropTypes.number) ]),
    y: PropTypes.oneOfType([ PropTypes.number, PropTypes.arrayOf(PropTypes.number) ])
  }),
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.number)
```

*example:* `domainPadding={{x: [10, -10], y: 5}}`

### `eventKey`

`VictoryArea` uses the standard `eventKey` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#eventkey)

**note:** `VictoryArea` only renders one element per dataset, so only one event key will be generated.

*type:*
```js
eventKey: PropTypes.oneOfType([
  PropTypes.func,
  CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]),
  PropTypes.string
])
```

### `events`

`VictoryArea` uses the standard `events` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#events)

**note:** `VictoryArea` will use the special `eventKey` "all" rather than refering to data by index, as it renders only one element for an entire dataset

*type:*
```js
events: PropTypes.arrayOf(PropTypes.shape({
  target: PropTypes.oneOf(["data", "labels", "parent"]),
  eventKey: PropTypes.oneOfType([
    PropTypes.array,
    CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]),
    PropTypes.string
  ]),
  eventHandlers: PropTypes.object
}))
```

*example:*
```playground
<div>
  <h3>Click Me</h3>
  <VictoryArea
    style={{
      data: { fill: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    events={[{
      target: "parent",
      eventHandlers: {
        onClick: () => {
          return [
            {
              target: "data",
              eventKey: "all",
              mutation: (props) => {
                const fill = props.style && props.style.fill;
                return fill === "black" ? null : { style: { fill: "black" } };
              }
            }, {
              target: "labels",
              eventKey: 2,
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

### `groupComponent`

`VictoryArea` uses the standard `groupComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#groupcomponent)

**note:** `VictoryArea` uses [`VictoryClipContainer`] as its default `groupComponent` `VictoryClipContainer` renders a `<g>` tag or a `<g>` tag with a `clipPath` `def` depending on whether the component should animate. This allows continuous data components to transition smoothly when new data points enter and exit. Supplying a completely custom `groupComponent` to `VictoryArea` may result in broken animations.

*type:* `groupComponent: PropTypes.element`

*default:* `<VictoryClipContainer/>`

*example:* `groupComponent={<VictoryClipContainer clipPadding={{ top: 5, bottom: 5 }} />}`

### `height`

`VictoryArea` uses the standard `height` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#height)

*type:* `PropTypes.number`

*default (provided by default theme):* `height={300}`

### `interpolation`

The `interpolation` prop determines how data points should be connected when creating a path. Victory uses [d3-shape](https://github.com/d3/d3-shape#curves) for interpolating curves.

The following options are supported for all chart types: "basis", "bundle", "cardinal", "catmullRom", "linear", "monotoneX", "monotoneY", "natural", "radial", "step", "stepAfter", "stepBefore"

The following options are supported for polar charts: "basis", "cardinal", "catmullRom", "linear"

*type:*
```js
interpolation: PropTypes.oneOf([
  "basis", "bundle", "cardinal", "catmullRom", "linear", "monotoneX",
  "monotoneY", "natural", "radial", "step", "stepAfter", "stepBefore"
])
```

*default:* `"linear"`

### `labelComponent`

`VictoryArea` uses the standard `labelComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#labelcomponent)

*type:* `labelComponent: PropTypes.element`

*default:* `<VictoryLabel/>`

*example:* `labelComponent={<VictoryLabel dy={20}/>}`


### `labels`

`VictoryArea` uses the standard `labels` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#labels)

*type:* `labels: PropTypes.oneOfType([ PropTypes.func, PropTypes.array ])`

*example:* `labels={(datum) => datum.y}`

### `name`

`VictoryArea` uses the standard `name` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#name)

*type:* `name: PropTypes.string`

*example:* `name="area-2"`

### `origin`

`VictoryArea` uses the standard `origin` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#origin)

*note:* The `origin` prop is only used by polar charts, and is usually controlled by `VictoryChart`. It will not typically be necessary to set an `origin` prop manually

*type:* `origin: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })`

### `padding`

`VictoryArea` uses the standard `padding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#padding)

*type:*
```js
padding: PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    top: PropTypes.number, bottom: PropTypes.number,
    left: PropTypes.number, right: PropTypes.number
  })
])
```

*default (provided by default theme):* `padding={50}`

*example:* `padding={{ top: 20, bottom: 60 }}`

### `polar`

`VictoryArea` uses the standard `polar` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#polar)

*type:* `polar: PropTypes.bool`

*example:*
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
  <VictoryArea
    data={sampleData}
    style={{
      data: { fill: "#c43a31" },
    }}
  />
</VictoryChart>
```

### range

`VictoryArea` uses the standard `range` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#range)

*note:* The `range` prop is usually controlled by `VictoryChart`. It will not typically be necessary to set a `range` prop manually

*type:*
```js
range: PropTypes.oneOfType([
  CustomPropTypes.domain,
  PropTypes.shape({ x: CustomPropTypes.domain, y: CustomPropTypes.domain })
])
```

### `samples`

`VictoryArea` uses the standard `samples` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#samples)

*type:* `CustomPropTypes.nonNegative`

*default:* `samples={50}`

### `scale`

`VictoryArea` uses the standard `scale` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#scale)

*type:*
```js
scale: PropTypes.oneOfType([
  CustomPropTypes.scale,
  PropTypes.shape({ x: CustomPropTypes.scale, y: CustomPropTypes.scale })
])
```
*default:* `scale="linear"`

*example:* `scale={{x: "linear", y: "log"}}`

### `sharedEvents`

`VictoryArea` uses the standard `sharedEvents` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#sharedevents)

*note:* The `sharedEvents` prop used internally to coordinate events between components. It should not be set manually.

*type:*
```js
sharedEvents: PropTypes.shape({
  events: PropTypes.array,
  getEventState: PropTypes.func
})
```

### `sortKey`

`VictoryArea` uses the standard `sortKey` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#sortkey)

*type:*
```js
sortKey: PropTypes.oneOfType([
  PropTypes.func,
  CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]),
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string)
])
```
*example*: `sortKey="x"`


### `standalone`

`VictoryArea` uses the standard `standalone` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#standalone)

**note:** When `VictoryArea` is nested within a component like `VictoryChart`, this prop will be set to `false`

*type:* `standalone: PropTypes.bool`

*default:* `standalone={true}`

### `style`

`VictoryArea` uses the standard `style` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#style)

*type:*
```js
style: PropTypes.shape({
  parent: PropTypes.object, data: PropTypes.object, labels: PropTypes.object
})
```

*default (provided by default theme):* See [grayscale theme] for more detail

*example:*
```playground
  <VictoryArea
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

### `theme`

`VictoryArea` uses the standard `theme` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#theme)

*type*: `theme: PropTypes.object`

*default:* `theme={VictoryTheme.grayscale}`

### `width`

`VictoryArea` uses the standard `width` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#width)

*type:* `width: CustomPropTypes.nonNegative`

*default (provided by default theme):* `width={450}`


### `x`

`VictoryArea` uses the standard `x` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#x)

*type:*
```js
x: PropTypes.oneOfType([
  PropTypes.func,
  CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]),
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string)
])
```

*example:* `x="employee.name"`

### `y`

`VictoryArea` uses the standard `y` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#y)

*type:*
```js
y: PropTypes.oneOfType([
  PropTypes.func,
  CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]),
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string)
])
```
*example:* `y="employee.salary"`

### `y0`

VictoryArea` uses the standard `y0` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#y0)

*type:*
```js
y0: PropTypes.oneOfType([
  PropTypes.func,
  CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]),
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string)
])
```
*example:* `y0="last_quarter_profit"`


[`VictoryClipContainer`]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-clip-container/victory-clip-container.js

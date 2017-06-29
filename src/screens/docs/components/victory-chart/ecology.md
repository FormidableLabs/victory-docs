# VictoryChart

`VictoryChart` is a wrapper component that renders a given set of children on a set of Cartesian or polar axes. `VictoryChart` reconciles the domain for all its children, controls the layout of the chart, and coordinates animations and shared events. If no children are provided, `VictoryChart` will render a set of empty default axes.


```playground
<div>
  <VictoryChart
    theme={VictoryTheme.material}
  >
    <VictoryArea data={sampleData}/>
    <VictoryAxis/>
  </VictoryChart>
  <VictoryChart polar
    theme={VictoryTheme.material}
  >
    <VictoryArea data={sampleData}/>
  	<VictoryPolarAxis/>
  </VictoryChart>
</div>
```

## Props

### animate

`VictoryChart` uses the standard `animate` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#animate)

See the [Animations Guide] for more detail on animations and transitions

**note: `VictoryChart` controls the `animate` prop of its children when set. To animate individual children of `VictoryChart`, set the `animate` prop only on children, and not on the `VictoryChart` wrapper.**

```js
  animate={{
    duration: 2000,
    onLoad: { duration: 1000 }
  )}
```

### children

`VictoryChart` works with any combination of the following children: [VictoryArea], [VictoryAxis] / [VictoryPolarAxis], [VictoryBar], [VictoryCandlestick], [VictoryErrorBar], [VictoryGroup], [VictoryLine], [VictoryScatter], [VictoryStack], and [VictoryVoronoi]. Children supplied to `VictoryChart` will be cloned and rendered with new props so that all children share common props such as `domain` and `scale`.

**Note: polar charts must use `VictoryPolarAxis` rather than `VictoryAxis`**


### containerComponent

`VictoryChart` uses the standard `containerComponent` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#containercomponent)

```js
containerComponent={<VictoryVoronoiContainer dimension="x"/>}
```

### domain

`VictoryChart` uses the standard `domain` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#domain)

**note: `VictoryChart` controls the `domain` prop of its children.**

```js
domain={{x: [0, 100], y: [0, 1]}}
```

### domainPadding

`VictoryChart` uses the standard `domainPadding` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#domainpadding)

**note: `VictoryChart` controls the `domainPadding` prop of its children.**

```js
domainPadding={{x: [10, -10], y: 5}}
```

### events

`VictoryChart` uses the standard `events` prop. [Read about it in more detail here](https://formidable.com/open-source/victory/docs/common-props#events)

See the [Events Guide] for more information on defining events.

**Note: `VictoryChart` coordinates events between children using the `VictorySharedEvents` and the `sharedEvents` prop**

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

`VictoryChart` uses the standard `groupComponent` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#groupcomponent)

*default:* `<g/>`

```js
groupComponent={<g transform="translate(10, 10)" />}
```

### height

`VictoryChart` uses the standard `height` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#height)

**note: `VictoryChart` controls the `height` prop of its children.**

*default (provided by default theme):* `height={300}`

```jsx
height={400}
```

### padding

`VictoryChart` uses the standard `padding` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#padding)

**note: `VictoryChart` controls the `padding` prop of its children.**

*default (provided by default theme):* `padding={50}`

```js
padding={{ top: 20, bottom: 60 }}
```

### polar

`VictoryChart` uses the standard `polar` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#polar)

**note: `VictoryChart` controls the `polar` prop of its children.**

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

**The `range` prop is usually calculated based on other props. It will not typically be necessary to set a `range` prop manually**

**note: `VictoryChart` controls the `range` prop of its children.**

[Read about the `range` prop in detail](https://formidable.com/open-source/victory/docs/common-props#range)


### scale

`VictoryChart` uses the standard `scale` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#scale)

**note: `VictoryChart` controls the `scale` prop of its children.**

*default:* `scale="linear"`

```js
scale={{x: "linear", y: "log"}}
```

### sharedEvents

**The `sharedEvents` prop is used internally to coordinate events between components. It should not be set manually.**

### standalone

`VictoryChart` uses the standard `standalone` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#standalone)

**note:** `VictoryChart` sets `standalone={false} for all of its children.

*default:* `standalone={true}`

```playground
<svg width={300} height={300}>
  <circle cx={150} cy={150} r={150} fill="#c43a31"/>
  <VictoryChart
    standalone={false}
    width={300} height={300}
  />
</svg>
```


### style

`VictoryChart` uses the standard `style` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#style)

*default (provided by default theme):* See [grayscale theme] for more detail

```playground
<VictoryChart
  style={{
    parent: {
      border: "1px solid #ccc"
    }
  }}
/>
```

### theme

`VictoryChart` uses the standard `theme` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#theme)

See the [Themes Guide] for information about creating custom themes.

*default:* `theme={VictoryTheme.grayscale}`

```jsx
theme={VictoryTheme.material}
```

### width

`VictoryChart` uses the standard `width` prop. [Read about it in detail here](https://formidable.com/open-source/victory/docs/common-props#width)

**note: `VictoryChart` controls the `width` prop of its children.**

*default (provided by default theme):* `width={450}`

```jsx
width={400}
```

[VictoryArea]: https://formidable.com/open-source/victory/docs/victory-area
[VictoryAxis]: https://formidable.com/open-source/victory/docs/victory-axis
[VictoryPolarAxis]: https://formidable.com/open-source/victory/docs/victory-polar-axis
[VictoryBar]: https://formidable.com/open-source/victory/docs/victory-bar
[VictoryCandlestick]: https://formidable.com/open-source/victory/docs/victory-candlestick
[VictoryErrorBar]: https://formidable.com/open-source/victory/docs/victory-error-bar
[VictoryGroup]: https://formidable.com/open-source/victory/docs/victory-group
[VictoryLine]: https://formidable.com/open-source/victory/docs/victory-line
[VictoryScatter]: https://formidable.com/open-source/victory/docs/victory-scatter
[VictoryStack]: https://formidable.com/open-source/victory/docs/victory-stack
[VictoryVoronoi]: https://formidable.com/open-source/victory/docs/victory-voronoi
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Animations Guide]: https://formidable.com/open-source/victory/guides/animations
[Data Accessors Guide]: https://formidable.com/open-source/victory/guides/data-accessors
[Custom Components Guide]: https://formidable.com/open-source/victory/guides/custom-components
[Events Guide]: https://formidable.com/open-source/victory/guides/events
[Themes Guide]: https://formidable.com/open-source/victory/guides/themes

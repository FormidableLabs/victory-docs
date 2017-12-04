# VictoryLegend

`VictoryLegend` renders a chart legend component.

```playground
<VictoryChart domain={[0, 10]}>
  <VictoryLegend x={125} y={50}
  	title="Legend"
    centerTitle
    orientation="horizontal"
    gutter={20}
    style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
    data={[
      { name: "One", symbol: { fill: "tomato" } },
      { name: "Two", symbol: { fill: "orange" } },
      { name: "Three", symbol: { fill: "gold" } }
    ]}
  />
  <VictoryBar
      data={[
      { x: 2, y: 6, fill: "tomato" },
      { x: 4, y: 4, fill: "orange" },
      { x: 6, y: 2, fill: "gold" },
      { x: 8, y: 4, fill: "tomato" },
    ]}
  />
</VictoryChart>
```

## Props

### borderComponent

The `borderComponent` prop takes a component instance which will be responsible for rendering a border around the legend. The new element created from the passed `borderComponent` will be provided with the following properties calculated by `VictoryLegend`: `x`, `y`, `width`, `height`, and `style`. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If a `borderComponent` is not provided, `VictoryLegend` will use its default [Border component]. Please note that the default width and height calculated for the border component is based on _approximated_ text measurements, and may need to be adjusted.

*default:* `<Border/>`

```jsx
borderComponent={<Border width={300}/>}
```

### borderPadding

The `borderPadding` specifies the amount of padding that should be added between the legend items and the border. This prop may be given as a number, or as an object with values specified for `top`, `bottom`, `left`, and `right`. Please note that the default width and height calculated for the border component is based on _approximated_ text measurements, so padding may need to be adjusted.

```jsx
borderPadding={{ top: 20, bottom: 10 }}
```

### centerTitle

The `centerTitle` boolean prop specifies whether a legend title should be centered.

```playground
<VictoryLegend x={125} y={10}
  title="Legend"
  centerTitle
  orientation="horizontal"
  gutter={20}
  style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }
  ]}
/>
```

### colorScale

The `colorScale` prop defines a color scale to be applied to each data symbol in `VictoryLegend`. This prop should be given as an array of CSS colors, or as a string corresponding to one of the built in color scales: "grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue". `VictoryLegend` will assign a color to each symbol by index, unless they are explicitly specified in the data object. Colors will repeat when there are more symbols than colors in the provided `colorScale`.

```playground
<VictoryLegend x={125} y={10}
  orientation="horizontal"
  gutter={20}
  style={{ border: { stroke: "black" } }}
  colorScale={[ "navy", "blue", "cyan" ]}
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }
  ]}
/>
```


### containerComponent

`VictoryLegend` uses the standard `containerComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#containercomponent)

**Note:** `VictoryLegend` only works with the `VictoryContainer` component

*default:* `containerComponent={<VictoryContainer/>}`

```jsx
containerComponent={<VictoryContainer responsive={false}/>}
```


### data

Specify data via the `data` prop. `VictoryLegend` expects data as an array of objects with `name` (required), `symbol`, and `labels` properties. The `data` prop must be given as an array.

*default:* `data={[{ name: "Series 1" }, { name: "Series 2" }]}`

```playground
<VictoryLegend x={125} y={50}
  orientation="horizontal"
  gutter={20}
  style={{ border: { stroke: "black" } }}
  data={[
    { name: "One", symbol: { fill: "tomato", type: "star" } },
    { name: "Two", symbol: { fill: "orange" }, labels: { fill: "orange" } },
    { name: "Three", symbol: { fill: "gold" } }
  ]}
/>
```

### dataComponent
`VictoryLegend` uses the standard `dataComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#datacomponent)

`VictoryLegend` supplies the following props to its `dataComponent`: `data`, `datum`, `events`, `index`, `x`, `y`, `size`, `style`, and `symbol`. `VictoryLegend` renders a [Point component] by default.

See the [Custom Components Guide] for more detail on creating your own `dataComponents`

*default:* `<Point/>`

```jsx
dataComponent={<Point events={{ onClick: handleClick }}/>}
```

### eventKey

`VictoryLegend` uses the standard `eventKey` prop to specify how event targets are addressed. **This prop is not commonly used.** [Read about the `eventKey` prop in more detail here](https://formidable.com/open-source/victory/docs/common-props#eventkey)

```jsx
eventKey="x"
```

### events

`VictoryLegend` uses the standard `events` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#events)

See the [Events Guide] for more information on defining events.

```playground
<div>
  <h3>Click Me</h3>
  <VictoryLegend
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
    data={[
      { name: "One" }, { name: "Two" }, { name: "Three" }
    ]}
  />
</div>
```

### groupComponent

`VictoryLegend` uses the standard `groupComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#groupcomponent)

*default:* `<g/>`

```jsx
groupComponent={<g transform="rotate(90)" />}
```

### gutter

The `gutter` prop defines the number of pixels between columns. If `gutter` is a number, the space will be added to the right of each column. If `gutter` is an object, it may contain `left` and `right` properties specifying the number of pixels to add to each side. To add space between rows, use the `rowGutter` prop.

*default:* `gutter={10}`

```playground
<VictoryLegend x={125} y={50}
  orientation="horizontal"
  gutter={50}
  style={{ border: { stroke: "black" } }}
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }
  ]}
/>
```

### height

`VictoryLegend` uses the standard `height` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#height)

*default (provided by default theme):* `height={400}`

```jsx
height={400}
```

### itemsPerRow

The `itemsPerRow` prop determines how many items to render in each row of a horizontal legend, or in each column of a vertical legend. This prop should be given as an integer. When this prop is not given, legend items will be rendered in a single row or column.

```playground
<VictoryLegend x={125} y={50}
  orientation="horizontal"
  itemsPerRow={3}
  gutter={20}
  style={{ border: { stroke: "black" } }}
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }, { name: "Four" }
  ]}
/>
```

### labelComponent

`VictoryLegend` uses the standard `labelComponent` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#labelcomponent)

*default:* `<VictoryLabel/>`

```playground
<VictoryLegend
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }
  ]}
  labelComponent={<VictoryLabel angle={45}/>}
/>
```

### orientation

The `orientation` prop takes a string that defines whether legend data are displayed in a row or column. When `orientation` is `"horizontal"`, legend items will be displayed in rows. When `orientation` is `"vertical"`, legend items will be displayed in columns.

*default:* `orientation="vertical"`

### padding

`VictoryLegend` uses the standard `padding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#padding)

*default (provided by default theme):* `padding={50}`

```jsx
padding={{ top: 20, bottom: 60 }}
```

### rowGutter

The `rowGutter` prop defines the number of pixels between rows. If `rowGutter` is a number, the space will be added to the bottom of each row. If `rowGutter` is an object, it may contain `top` and `bottom` properties specifying the number of pixels to add to each side.

```playground
<VictoryLegend x={125} y={50}
  orientation="vertical"
  rowGutter={50}
  style={{ border: { stroke: "black" } }}
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }
  ]}
/>
```

### sharedEvents

**The `sharedEvents` prop is used internally to coordinate events between components. It should not be set manually.**

### standalone

The `standalone` props specifies whether the component should be rendered in an independent `<svg>` element or in a `<g>` tag. This prop defaults to true, and renders an `svg`.

*default:* `standalone={true}`

### style

The `style` prop defines the style of the component. The style prop should be given as an object with styles defined for `parent`, `data`, `labels`, `title`, and `border`. Any valid svg styles are supported, but `width`, `height`, and `padding` should be specified via props as they determine relative layout for components in VictoryChart. Functional styles may be defined for `data`, and `labels` style properties, and they will be evaluated with each datum.

**note:** When a component is rendered as a child of another Victory component, or within a custom `<svg>` element with `standalone={false}` parent styles will be applied to the enclosing `<g>` tag. Many styles that can be applied to a parent `<svg>` will not be expressed when applied to a `<g>`.

**note:** custom `angle` and `verticalAnchor` properties may be included in `labels` and `title` styles.

*default (provided by default theme):* See [grayscale theme] for more detail

```playground
<VictoryLegend x={125} y={50}
  title="Legend"
  centerTitle
  orientation="horizontal"
  gutter={20}
  style={{
    data: { fill: "blue", stroke: "navy", strokeWidth: 2 },
    labels: { fill: "navy" },
    border: { stroke: "black" },
    title: {fontSize: 20 }
  }}
  data={[
    { name: "One", symbol: { fill: "tomato" } },
    { name: "Two", labels: { fill: "orange" } },
    { name: "Three" }
  ]}
/>
```

### symbolSpacer

The `symbolSpacer` prop defines the number of pixels between data components and label components. When a `symbolSpacer` is not defined, spacing is calculated based on symbol size and label font size.

```playground
<VictoryLegend x={125} y={50}
  orientation="horizontal"
  symbolSpacer={5}
  gutter={20}
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }
  ]}
/>
```

### theme

The `theme` prop specifies a theme to use for determining styles and layout properties for a component. Any styles or props defined in `theme` may be overridden by props specified on the component instance. By default, components use a [grayscale theme]. [Read more about themes here].

*default:* `theme={VictoryTheme.grayscale}`

### title

The `title` prop specifies a title to render with the legend. This prop should be given as a string, or an array of strings for multi-line titles.

```playground
<VictoryLegend x={125} y={50}
  title="Legend Title"
  gutter={20}
  orientation="horizontal"
  style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }
  ]}
/>
```

### titleComponent

The `titleComponent` prop takes a component instance which will be used to render a title for the component. The new element created from the passed `labelComponent` will be supplied with the following properties: `x`, `y`, `index`, `data`, `datum`, `verticalAnchor`, `textAnchor`, `style`, `text`, and `events`. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `labelComponent` is omitted, a new [VictoryLabel] will be created with the props described above.

*default:* `<VictoryLabel/>`


```playground
<VictoryLegend x={125} y={50}
  title={["Legend Title", "subtitle"]}
  gutter={20}
  orientation="horizontal"
  style={{ border: { stroke: "black" } }}
  titleComponent={<VictoryLabel style={[{ fontSize: 20 }, { fontSize: 12 }]}/>}
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }
  ]}
/>
```

### titleOrientation

The `titleOrientation` prop specifies where the a title should be rendered in relation to the rest of the legend. Possible values for this prop are "top", "bottom", "left", and "right".

*default (provided by default theme):* `titleOrientation="top"`

```playground
<VictoryLegend x={50} y={50}
  title="Legend Title"
  titleOrientation="left"
  gutter={20}
  orientation="horizontal"
  style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
  data={[
    { name: "One" }, { name: "Two" }, { name: "Three" }
  ]}
/>
```

### width

`VictoryLegend` uses the standard `width` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#width)

*default (provided by default theme):* `width={400}`

```jsx
width={400}
```

### x

The `x` prop defines the x coordinate corresponding to the upper left corner of the legend.

### y

The `y` prop defines the y coordinate corresponding to the upper left corner of the legend.

[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[Point component]: https://formidable.com/open-source/victory/docs/victory-primitives#point
[Border component]: https://formidable.com/open-source/victory/docs/victory-primitives#border
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: https://formidable.com/open-source/victory/guides/themes
[Custom Components Guide]: https://formidable.com/open-source/victory/guides/custom-components
[Events Guide]: https://formidable.com/open-source/victory/guides/events

# VictoryLegend

`VictoryLegend` renders a chart legend component.

```playground
<VictoryLegend
  data={[
    {name: 'A', symbol: { type: 'circle'}},
    {name: 'B', symbol: { type: 'square'}},
    {name: 'C', symbol: { type: 'star'}}
    ]}
/>
```

## Props

### colorScale

The `colorScale` prop defines a color scale to be applied to each data symbol in `VictoryLegend`. This prop should be given as an array of CSS colors, or as a string corresponding to one of the built in color scales: "grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue". `VictoryLegend` will assign a color to each symbol by index, unless they are explicitly specified in the data object. Colors will repeat when there are more symbols than colors in the provided `colorScale`.

### containerComponent

The `containerComponent` prop takes a component instance which will be used to create a container element for standalone legends. The new element created from the passed `containerComponent` will be provided with the following props: `height`, `width`, `children` (the legend itself) and `style`. If a `containerComponent` is not provided, the default `VictoryContainer` component will be used. `VictoryContainer` supports `title` and `desc` props, which are intended to add accessibility to Victory components. The more descriptive these props are, the more accessible your data will be for people using screen readers. These props may be set by passing them directly to the supplied component. By default, `VictoryContainer` renders a responsive `svg` using the `viewBox` attribute. To render a static container, set `responsive={false}` directly on the instance of `VictoryContainer` supplied via the `containerComponent` prop. `VictoryContainer` also renders a `Portal` element that may be used in conjunction with [VictoryPortal] to force components to render above other children.

*examples:* `containerComponent={<VictoryContainer responsive={false} title="Legend for Q1 Profit Chart"/>}`

*default:* `containerComponent={<VictoryContainer/>}`

### data

Specify data via the `data` prop. `VictoryLegend` expects data as an array of objects with `name` (required), `symbol`, and `labels` properties. The `data` prop must be given as an array.

*examples:* `data={[{ name: "Series 1", symbol: { type: "star" } }, { name: "Series 2", labels: { fill: "blue" } }]}`

*default:* `data={[{ name: "Series 1" }, { name: "Series 2" }]}`

### dataComponent

The `dataComponent` prop takes a component instance which will be responsible for rendering a data element used to associate a symbol or color with each data series. The new element created from the passed `dataComponent` will be provided with the following properties calculated by `VictoryLegend`: `x`, `y`, `size`, `style`, and `symbol`. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If a `dataComponent` is not provided, `VictoryLegend` will use its default [Point component].

*examples:* `dataComponent={<Point events={{onClick: () => console.log("wow")}}/>}`, `dataComponent={<MyCustomPoint/>}`

*default:* `<Point/>`

### groupComponent

The `groupComponent` prop takes a component instance which will be used to create group elements for use within container elements. This prop defaults to a `<g>` tag.

*default:* `groupComponent={<g/>}`

### gutter

The `gutter` prop defines the number of pixels between legend rows or columns, depending on `orientation`. When `orientation` is horizontal, gutters are between columns. When `orientation` is vertical, gutters are the space between rows.

*default:* `gutter={10}`

### labelComponent

The `labelComponent` prop takes a component instance which will be used to render each legend label. The new element created from the passed `labelComponent` will be supplied with the following properties: `x`, `y`, `style`, and `text`. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `labelComponent` is omitted, a new [VictoryLabel] will be created with the props described above.

*examples:* `labelComponent={<VictoryLabel dy={20}/>}`, `labelComponent={<MyCustomLabel/>}`

*default:* `<VictoryLabel/>`

### orientation

The `orientation` prop takes a string that defines whether legend data are displayed in a row or column. When `orientation` is `"horizontal"`, legend items will be displayed in a single row. When `orientation` is `"vertical"`, legend items will be displayed in a single column. Line and text-wrapping is not currently supported, so `"vertical"` orientation is both the default setting and recommended for displaying many series of data.

*default:* `orientation="vertical"`

### padding

The `padding` prop specifies the amount of padding in pixels between the edge of the legend and any rendered child components. This prop can be given as a number or as an object with padding specified for `top`, `bottom`, `left` and `right`. As with [width and height], the absolute padding will depend on whether the component is rendered in a responsive container. When a component is nested within `VictoryLegend`, setting `padding` on the child component will have no effect.

*examples:* `padding={{ top: 20, bottom: 60 }}` or `padding={40}`

### standalone

The `standalone` props specifies whether the component should be rendered in an independent `<svg>` element or in a `<g>` tag. This prop defaults to true, and renders an `svg`.

*default:* `standalone={true}`

### style

The `style` prop defines the style of the component. The style prop should be given as an object with styles defined for `data`, `labels` and `parent`. Any valid `svg` styles are supported, but `width`, `height`, and `padding` should be specified via props as they determine relative layout for components in `VictoryLegend`.

```jsx
style={{
  data: { fill: "tomato", opacity: 0.7 },
  labels: { fontSize: 12 },
  parent: { border: "1px solid #ccc" }
}}
```

**note:** When a component is rendered as a child of another Victory component, or within a custom `<svg>` element with `standalone={false}` parent styles will be applied to the enclosing `<g>` tag. Many styles that can be applied to a parent `<svg>` will not be expressed when applied to a `<g>`.

**note:** custom `angle` and `verticalAnchor` properties maybe included in labels styles.

*default (provided by default theme):* See [grayscale theme] for more detail

### symbolSpacer

The `symbolSpacer` prop defines the number of pixels between data components and label components.

*default:* `symbolSpacer={8}`

### theme

The `theme` prop specifies a theme to use for determining styles and layout properties for a component. Any styles or props defined in `theme` may be overridden by props specified on the component instance. By default, components use a [grayscale theme]. [Read more about themes here].

*default:* `theme={VictoryTheme.grayscale}`

### width and height

The `width` and `height` props define the width and height of the legend. These props may be given as positive numbers or functions of data. If these props are not set, `width` and `height` will be determined based on an [approximate text size] calculated from the `text` and `style` props provided to `VictoryLegend`.

### x and y

The `x` and `y` props define the base position of the legend element.

*default:* `x={0}`, `y={0}`

[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[Point component]: https://formidable.com/open-source/victory/docs/victory-primitives#point
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[width and height]: https://formidable.com/open-source/victory/docs/victory-legend#width-and-height
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: https://formidable.com/open-source/victory/guides/themes
[approximate text size]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-util/textsize.js

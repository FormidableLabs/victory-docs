# VictoryBrushContainer

`VictoryBrushContainer` adds the ability to highlight a region of a chart, and interact with
highlighted regions, either by moving the region, expanding the region, or selecting a new region.
To add these behaviors, add `VictoryBrushContainer` as the `containerComponent` of your chart.

```jsx
<VictoryChart containerComponent={<VictoryBrushContainer/>}>
  <VictoryLine data={data} />
  <VictoryBar data={moreData}/>
</VictoryChart>
```

## Props

`VictoryBrushContainer` uses a superset of props used by [VictoryContainer].


### selectedDomain

The optional `selectedDomain` prop describes the highlighted state. This prop is an object that
specifies separate arrays for x and y. Each array is a tuple that describes the minimum and maximum
values to render. If this prop is not provided initially, the chart will render with the entire
domain highlighted. When this prop changes, the chart will render with a new highlighted domain.

*examples:* `selectedDomain={{x: [50, 100], y: [0, 100]}`

## dimension

When the `dimension` prop is set, brushing will only be specific to the to the given dimension
(either x or y), and the entire domain of the other dimension will be highlighted. When this prop
is not specified, highlighting will occur along both dimensions.

### onDomainChange

The optional `onDomainChange` prop accepts an function to be called on each update to the
highlighted domain. The function accepts a single parameter of `domain`.

### selectionStyle

The `selectionStyle` prop should be given as an object of style attributes to be applied to the
`selectionComponent`

*default:* `selectionStyle={{stroke: "transparent", fill: "black", fillOpacity: 0.1}}

### selectionComponent

The `selectionComponent` prop specifies the element to be rendered for for the highlighted area.
When this prop is not specified, a `<rect/>` will be rendered. This component will be supplied with
the following props: x, y, width, height, and style.

*default:* `selectionComponent={<rect/>}`

### handleStyle

The `handleStyle` prop should be given as an object of style attributes to be applied to the
`handleComponent`. Handles refer to the region on each highlighted area where the the area may be
expanded. Only handles relevent to the given `dimension` will be rendered. For example, when
`dimension="x"` only "left" and "right" handles will be rendered. Handler are automatically styled
with cursors appropriate to their orientation.

*default:* `handleStyle={{stroke: "transparent", fill: "transparent"}}

### handleComponent

The `handleComponent` prop specifies the element to be rendered for each handle for the highlighted
area. When this prop is not specified, a `<rect/>` will be rendered. This component will be supplied
with the following props: x, y, width, height, cursor, and style.

*default:* `handleComponent={<rect/>}`


[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container

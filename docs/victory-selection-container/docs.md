# VictorySelectionContainer

`VictorySelectionContainer` is used to enable selecting data points When `VictorySelectionContainer`
is added as the `containerComponent` of your chart, clicking and dragging will select an x, y
region, and add the `active` prop to any elements corresponding to data points within the region.


```jsx
<VictoryChart containerComponent={<VictorySelectionContainer/>}>
  <VictoryLine data={data} />
  <VictoryBar data={moreData}/>
</VictoryChart>
```

## Props

`VictorySelectionContainer` uses a superset of props used by [VictoryContainer].

### dimension

When the `dimension` prop is set, the selection will only take the given dimension into account.
For example, when `dimension` is set to "x", the selected area will cover the entire y domain
regardless of mouse position.

### selectionStyle

The `selectionStyle` prop should be given as an object of style attributes to be applied to the
`selectionComponent`

*default:* `selectionStyle={{stroke: "transparent", fill: "black", fillOpacity: 0.1}}

### selectionComponent

The `selectionComponent` prop specifies the element to be rendered for the selected area. When
this prop is not specified, a `<rect/>` will be rendered. This component will be supplied with the
following props: x, y, width, height, and style.

*default:* `selectionComponent={<rect/>}`

### onSelection

The `onSelection` prop accepts a function to be called whenever new data points are selected. The
function is called with the parameters `points`, an array of objects with `childName`, `eventKey`,
and `data`; and `bounds`, an object with min / max arrays specified for x and y.

[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container

---
id: 23
title: VictorySelectionContainer
category: containers
scope: null
---
# VictorySelectionContainer

`VictorySelectionContainer` is used to enable selecting data points within a highlighted region.
Clicking and dragging will select an x-y region, and add the `active` prop to any elements
corresponding to data points within the region. Create a select-box control by tying the set of
selected data points to other elements, such as filtered table.

`VictorySelectionContainer` is similar to `VictoryBrushContainer`. `VictoryBrushContainer` may be
used to identify the domain of a selected region, whereas `VictorySelectionContainer` may be used to
identify a list of data points within a selected region. `VictoryBrushContainer` will also create
persistent highlighted regions, whereas regions created by `VictorySelectionContainer`
disappear after `onMouseUp` events.

`VictorySelectionContainer` may be used with any Victory component that works with an x-y coordinate
system, and should be added as the `containerComponent` of the top-level component.
However, the component that uses it must be standalone
(`standalone={true}`), which is the default for all top-level Victory components.

```playground
<VictoryChart containerComponent={<VictorySelectionContainer/>}>
  <VictoryScatter
    style={{ data: { fill: (d, active) => active ? "tomato" : "gray" } }}
  />
</VictoryChart>
```

## Props

`VictorySelectionContainer` uses a superset of props used by [VictoryContainer]. All props are optional.

### selectionDimension

When the `selectionDimension` prop is set, the selection will only take the given dimension into account.
For example, when `dimension` is set to "x", the selected area will cover the entire y domain
regardless of mouse position.

*example:* `selectionDimension="x"`

```playground
<VictoryChart
  containerComponent={
    <VictorySelectionContainer selectionDimension="x"/>
  }
>
  <VictoryScatter
    style={{ data: { fill: (d, active) => active ? "tomato" : "gray" } }}
  />
</VictoryChart>
```

### selectionStyle

The `selectionStyle` prop should be given as an object of style attributes to be applied to the
`selectionComponent`

*default:* `selectionStyle={{stroke: "transparent", fill: "black", fillOpacity: 0.1}}`

```playground
<VictoryChart
  containerComponent={
    <VictorySelectionContainer
      selectionStyle={{
        fill: "tomato", fillOpacity: 0.5,
        stroke: "tomato", strokeWidth: 2
      }}
    />
  }
>
  <VictoryScatter
    style={{ data: { fill: (d, active) => active ? "tomato" : "gray" } }}
  />
</VictoryChart>
```

### selectionComponent

The `selectionComponent` prop specifies the element to be rendered for the selected area. When
this prop is not specified, a `<rect/>` will be rendered. This component will be supplied with the
following props: `x`, `y`, `width`, `height`, and `style`.

*default:* `selectionComponent={<rect/>}`

### onSelection

The `onSelection` prop accepts a function to be called whenever new data points are selected. The
function is called with the parameters `points` (an array of objects with `childName`, `eventKey`,
and `data`) and `bounds` (an object with min / max arrays specified for `x` and `y`).

*example:* `onSelection={(points, bounds) => handleSelection(points, bounds)}`

### onSelectionCleared

The `onSelectionCleared` prop accepts a function to be called whenever the selection is cleared.

*example:* `onSelectionCleared={() => handleSelectionCleared()}`

[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container

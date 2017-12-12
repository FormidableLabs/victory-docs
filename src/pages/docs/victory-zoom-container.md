---
id: 31
title: VictoryZoomContainer
category: containers
scope: null
---
# VictoryZoomContainer

`VictoryZoomContainer` provides pan and zoom behavior for any Victory component that works with an
x, y axis. Zoom events are controlled by scrolling, and panning events are controlled by dragging.
[See an example of a zoomable chart][]

`VictoryZoomContainer` may be used with any Victory component that works with an x-y coordinate
system, and should be added as the `containerComponent` of the top-level component. However, the component that uses it must be standalone
(`standalone={true}`), which is the default for all top-level Victory components.

```playground
<VictoryChart domainPadding={{ y: 10 }}
  containerComponent={
    <VictoryZoomContainer/>
  }
>
  <VictoryScatter
    y={(datum) => Math.sin(2 * Math.PI * datum.x)}
  />
</VictoryChart>
```

## Props

`VictoryZoomContainer` uses a superset of props used by [VictoryContainer][]. All props are optional.

### allowPan

The optional `allowPan` prop accepts a boolean that enables the panning functionality. Zooming will still be enabled when the `allowPan` prop is set to false.

*default:* `allowPan={true}`

### allowZoom

The optional `allowZoom` prop accepts a boolean that enables the zoom functionality. Panning will still be enabled when the `allowZoom` prop is set to false.

*default:* `allowZoom={true}`

### clipContainerComponent

`VictoryZoomContainer` works by clipping data outside of a given domain. `VictoryZoomContainer` uses `VictoryClipContainer` by default. This prop should not be replaced with a custom component, but you may want to set props on `VictoryClipContainer`, such as `clipPadding`

*example:* `clipContainerComponent={<VictoryClipContainer clipPadding={{top: 10, right: 10}}}/>}`

### downsample

The `downsample` prop limits the number of points that will be displayed. This prop may be given as a boolean or a number corresponding to maximum number of points. When given as a boolean, the maximum number of points that will be plotted is 150.

### minimumZoom

The `minimumZoom` prop sets a minimum domain extent for the zoomed chart. When the difference between
the maximum and minimum of a zoomed domain is equal to the `minimumZoom` in either dimension, the
component will stop responding to events that would normally trigger zooming in. Zooming out and
panning will still be enabled. When this prop is not specified, the default minimum zoom will
cover 1 / 1000th of the original domain. This prop should be given as an object with numeric values
for x and y.

*example:* `minimumZoom={{x: 1, y: 0.01}}`

### onZoomDomainChange

The optional `onZoomDomainChange` prop accepts an function to be called on each update to the visible domain. The function accepts the parameters `domain` (the updated domain) and `props` (the props used by `VictoryZoomContainer`).

*example:* `onZoomDomainChange={(domain, props) => handleDomainChange(domain, props)}`

### zoomDomain

The `zoomDomain` prop describes the zoomed state. This prop is an object that
specifies separate arrays for x and y. Each array is a tuple that describes the minimum and maximum
values to render. If this prop is not provided initially, the chart will render without an initial
zoom, displaying the entire dataset. Updates to `zoomDomain` will trigger a re-render of the chart
with the new domain.

*example:* `zoomDomain={{x: [0, 100]}}`

### zoomDimension

When the `zoomDimension` prop is set, panning and zooming will be restricted to the given dimension
(either x or y), and the domain of the other dimension will remain static. When this prop is not
specified, both x and y dimensions will pan and zoom.

*example:* `zoomDimension="x"`

[VictoryContainer]: /docs/victory-container
[See an example of a zoomable chart]: /guides/brush-and-zoom

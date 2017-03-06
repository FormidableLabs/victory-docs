# VictoryZoomContainer

`VictoryZoomContainer` provides pan and zoom behavior for any Victory component that works with an
x, y axis. To add panning and zooming behavior, add `VictoryZoomContainer` as the
`containerComponent` of your chart.

```jsx
<VictoryChart containerComponent={<VictoryZoomContainer/>}>
  <VictoryLine data={data} />
  <VictoryBar data={moreData}/>
</VictoryChart>
```

## Props

`VictoryZoomContainer` uses a superset of props used by [VictoryContainer].


### zoomDomain

The optional `zoomDomain` prop describes the zoomed and panned state. This prop is an object that
specifies separate arrays for x and y. Each array is a tuple that describes the minimum and maximum
values to render. If this prop is not provided initially, the chart will render without an initial
zoom. Updates to `zoomDomain` will trigger a re-render of the chart with the new domain.

*examples:* `zoomDomain={{x: [0, 100]}`

# minimumZoom

The optional `minimumZoom` prop sets a minimum domain extent for the zoomed chart. When this prop
is not specified, the default minimum zoom will cover 1 / 1000th of the original domain. This prop
should be given as an object with numeric values for x and y. These values will be used to calculate
the minimum domain around a zoomed in point.

*examples:* `minimumDomain={{x: 1, y: 0.01}`

## dimension

When the `dimension` prop is set, panning and zooming will be restricted to the given dimension
(either x or y), and the domain of the other dimension will remain static. When this prop is not
specified, both x and y dimensions will pan and zoom.

### onDomainChange

The optional `onDomainChange` prop accepts an function to be called on each update to the visible
domain. The function accepts a single parameter of `domain`.

### allowZoom

The optional `allowZoom` prop accepts a boolean that enable the zoom functionality. Panning will
still be possible when `allowZoom` prop is set to false, but

*default:* `allowZoom={true}`

## clipContainerComponent

`VictoryZoomContainer` works by clipping data outside of a given domain. `VictoryZoomContainer` uses
`VictoryClipContainer` by default. This prop should not be replaced with a custom component, but you
may want to set props on `VictoryClipContainer`, such as `clipPadding`


[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container

# VictoryZoom

`VictoryZoom` provides pan and zoom behaviour for a single child of `VictoryChart` or `VictoryGroup`. `VictoryZoom` will attach to mouse or touch events and update the visible `domain` accordingly.

|          |      Web      |    Mobile     |
| -------- | ------------- | ------------- |
| **Pan**  |  Mouse move   |  Touch move   |
| **Zoom** |  Mouse wheel  |    Pinch      |

`VictoryZoom` must the top level component in the victory hierarchy with a single child node of either `VictoryChart` or `VictoryGroup`.

```jsx
<VictoryZoom>
  <VictoryChart>
    <VictoryLine data={data} />
    <VictoryBar />
  </VictoryChart>
</VictoryZoom>
```

## Props

### children

`VictoryZoom` requires a single child, which must be an node of either VictoryChart or VictoryGroup.

### zoomDomain

The optional `zoomDomain` prop describes the zoomed and panned state. This prop is an object that specifies separate arrays for x and y. Each array is a tuple that describes the minimum and maximum values to render. If this prop is not provided initially, the chart will render without an initial zoom. Updates to `zoomDomain` will trigger a re-render of the chart with the new domain.

*Note: Currently only x domains are supported. Y domains will not be computed*

*examples:* `zoomDomain={{x: [0, 100]}`

### onDomainChange

The optional `onDomainChange` prop accepts an function to be called on each update to the visible domain. The function accepts a single parameter of `domain`.

### allowZoom

The optional `allowZoom` prop accepts a boolean that enable the zoom functionality.

*default:* `allowZoom={true}`

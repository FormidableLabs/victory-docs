# VictoryPortal

`VictoryPortal` is a wrapper component that renders a child in a top-level [Portal] element within [VictoryContainer]. This is useful in instances where elements should always be rendered above others, like tooltips and labels. If a Portal element is not found, `VictoryPortal` will render its child in place.

## Props

### children 

`VictoryPortal` takes single `children`, and renders them in a top level portal element. Any additional props passed to `VictoryPortal` will be spread onto the child. In the following example, the `labelComponent` passed to the first series of bars has been wrapped in `VictoryPortal`. The resulting labels will be rendered in a the top-level portal container, and will not be overlapped by subsequent data series, as they otherwise would have.

```jsx
<VictoryChart>
  <VictoryGroup offset={12}>
    <VictoryBar
      labels={["apples", "bananas", "cherries"]}
      labelComponent={<VictoryPortal><VictoryLabel/></VictoryPortal>}
      data={[{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 5}]}
    />
    <VictoryBar
      data={[{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 7}]}
    />
    <VictoryBar
      data={[{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 9}]}
    />
  </VictoryGroup>
</VictoryChart>

```


[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[Portal]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-portal/portal.js

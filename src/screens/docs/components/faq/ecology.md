# Frequently Asked Questions (FAQ)

## Styles

### How can I change the colors of lines and other elements in Victory?

Most components in Victory use a standard `style` prop with style namespaces for "data" and "labels". Any styles added to the "data" namespace will be applied to all the svg elements rendered for a given dataset.

```playground
<VictoryChart domain={{ x: [0, 4] }}>
  <VictoryBar
    style={{ data: { fill: "red" } }}
    data={[
      { x: 1, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 6 }
    ]}
  />
  <VictoryLine
    style={{ data: { stroke: "blue", strokeWidth: 5 } }}
    y={(d) => d.x}
  />
</VictoryChart>
```

### How can I change the color of an individual point or bar?

Individual elements in Victory can be styled by adding style attributes directly to your data object. Functional styles and props can also be used to change the appearance of an element based on the data point it represents.

```playground
<VictoryChart>
  <VictoryBar
    data={[
      { x: 1, y: 2, fill: "red", width: 5 },
      { x: 2, y: 4 , fill: "orange", width: 10},
      { x: 3, y: 6, fill: "gold", width: 20 }
    ]}
  />
  <VictoryScatter
    style={{ data: {
      fill: (d) => d.x > 2 ? "blue" : "grey",
      stroke: (d) => d.y < 6 ? "red" : "black",
      strokeWidth: 2
    } }}
    symbol={(d) => d.x > 1 ? "plus" : "square"}
    size={(d) => d.y + 2}
    data={[
       { x: 0, y: 2 }, { x: 1, y: 4 }, { x: 2, y: 6 }, { x: 3, y: 8 }, { x: 4, y: 10 }
    ]}
  />
</VictoryChart>
```
Note that continuous data types such as `VictoryLine` and `VictoryArea` cannot be styled in this way, as they only render a single element for a given dataset.

### How can I use gradient fills in Victory?

Create a gradient def as usual and then reference it by id in your style object. A more complicated example using gradient fills can be found [here](https://formidable.com/open-source/victory/gallery/stream-graph)

```playground
<div>
  <svg>
    <defs>
      <linearGradient id="myGradient">
        <stop offset="0%" stopColor="red"/>
        <stop offset="25%" stopColor="orange"/>
        <stop offset="50%" stopColor="gold"/>
        <stop offset="75%" stopColor="yellow"/>
        <stop offset="100%" stopColor="green"/>
      </linearGradient>
    </defs>
  </svg>
  <VictoryChart>
    <VictoryArea
      style={{
        data: {fill: "url(#myGradient)"}
      }}
      data={[
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 7 },
        { x: 4, y: 4 },
        { x: 5, y: 5 }
      ]}
    />
  </VictoryChart>
</div>
```

## Annotations

### How can I add arbitrary labels to my charts?

Use `VictoryLabel` to as a child of `VictoryChart` to add arbitrary labels. Labels can be positioned with the `x` and `y` props, or with `datum` when used within `VictoryChart` or `VictoryGroup`.

```playground
<VictoryChart domain={[0, 10]}>
  <VictoryLabel text="Chart Title" x={225} y={30} textAnchor="middle"/>
  <VictoryLine
    style={{ data: { stroke: "blue", strokeWidth: 5 } }}
    y={(d) => d.x}
  />
  <VictoryLabel text="Annotation" datum={{ x: 4, y: 6 }} textAnchor="middle"/>
</VictoryChart>
```


### How can I annotate my charts with lines and markers?

Victory doesn't have specific components for annotations. Instead, use standard component such as `VictoryLine` and `VictoryScatter` to add lines and markers to your chart.

```playground
<VictoryChart domain={[0, 10]}>
  <VictoryLine
    style={{ data: { stroke: "blue", strokeWidth: 3 } }}
    y={(d) => d.x}
  />
  <VictoryLine
    style={{
      data: { stroke: "red", strokeWidth: 2 },
      labels: { angle: -90, fill: "red", fontSize: 20 }
    }}
    labels={["Important"]}
    labelComponent={<VictoryLabel y={100}/>}
    x={() => 5}
  />
  <VictoryScatter
    data={[{ x: 5, y: 5, fill: "red", symbol: "star", size: 8 }]}
  />
</VictoryChart>
```

## Axes

### How do I turn off the axes on VictoryChart?

`VictoryChart` uses default axes. If you want to plot data without using any axes, use `VictoryGroup` instead.

```playground
<VictoryGroup>
  <VictoryBar
    style={{ data: { fill: "red" } }}
    data={[
      { x: 1, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 6 }
    ]}
  />
  <VictoryLine domain={{ x: [0, 4] }}
    style={{ data: { stroke: "blue", strokeWidth: 5 } }}
    y={(d) => d.x}
  />
</VictoryGroup>
```

### Why is VictoryChart rendering only one axis?

When no axes are supplied to `VictoryChart` it will render pair of default axes. If any axes are supplied as children to `VictoryChart` it will render _only_ those axes.

```playground
<div style={{ display: "flex", flexWrap: "wrap" }}>
  <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
    <VictoryLabel text="Default Axes" x={225} y={30} textAnchor="middle"/>
    <VictoryLine/>
  </VictoryChart>
  <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
    <VictoryLabel text="Two VictoryAxis Children" x={225} y={30} textAnchor="middle"/>
    <VictoryAxis/>
    <VictoryAxis dependentAxis/>
    <VictoryLine/>
  </VictoryChart>
  <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
    <VictoryLabel text="Single Dependent Axis" x={225} y={30} textAnchor="middle"/>
    <VictoryAxis dependentAxis/>
    <VictoryLine/>
  </VictoryChart>
  <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
    <VictoryLabel text="Single Independent Axis" x={225} y={30} textAnchor="middle"/>
    <VictoryAxis/>
    <VictoryLine/>
  </VictoryChart>
</div>
```

### How can I change the position of my axis?

`VictoryChart` automatically aligns axes so that they cross at their origin. Use the `offsetX` and `offsetY` props on `VictoryAxis` to alter this default behavior. *Note:* Axes that typically cross at zero will not display ticks or tick labels at zero. To change this behavior, set the `crossAxis` prop to false.
[Read more about VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)

```playground
<VictoryChart domain={{ y: [-10, 10] }}>
  <VictoryAxis offsetY={50}/>
  <VictoryAxis dependentAxis offsetX={50} crossAxis={false}/>
  <VictoryLine/>
</VictoryChart>
```


### How can I format my axis labels?

Axis tick labels are controlled via two props. `tickValues` controls the _positions_ of ticks along the axis, and `tickFormat` controls how labels are displayed. Use the `tickFormat` prop to customize axis labels. This prop can be given as an array of strings, or as a function that returns a string. Functions provided to `tickFormat` are called with the following arguments: `tickValue`, `index` and `tickArray`.
[Read more about VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)

```playground
<VictoryChart domain={[0, 5]}>
  <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={["first", "second", "third", "fourth"]}/>
  <VictoryAxis dependentAxis tickFormat={(tick) => `$${Math.round(tick)}M`}/>
  <VictoryLine/>
</VictoryChart>
```

### My axis labels are cut off. How can I fix them?

Long axis labels can be problematic. There are several ways to address the issue. The best solution will depend on the specific requirements of your project. The following examples demonstrate:
- Altering `padding`
- Splitting labels onto multiple lines
- Using angled labels
- Allowing labels to overflow the container with VictoryPortal

```playground
<div style={{ display: "flex", flexWrap: "wrap" }}>
  <VictoryChart style={{ parent: { maxWidth: "50%" } }}
    padding={{ left: 90, top: 50, right: 10, bottom: 50 }}
  >
    <VictoryLabel text="Altering padding" x={225} y={30} textAnchor="middle"/>
    <VictoryAxis dependentAxis
      tickFormat={[
        "first label",
        "second label",
        "third label",
        "forth label"
      ]}
    />
    <VictoryAxis/>
    <VictoryLine/>
  </VictoryChart>

  <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
    <VictoryLabel text="Splitting Labels into multiple lines" x={225} y={30} textAnchor="middle"/>
    <VictoryAxis dependentAxis
      tickFormat={[
        `first\nlabel`,
        `second\nlabel`,
        `third\nlabel`,
        `forth\nlabel`,
        `fifth\nlabel`
      ]}
    />
    <VictoryAxis/>
    <VictoryLine/>
  </VictoryChart>

  <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
    <VictoryLabel text="Angled labels" x={225} y={30} textAnchor="middle"/>
    <VictoryAxis dependentAxis
      style={{ tickLabels: { angle: -60 } }}
      tickFormat={[
        "first label",
        "second label",
        "third label",
        "forth label",
        "fifth label"
      ]}
    />
    <VictoryAxis/>
    <VictoryLine/>
  </VictoryChart>

  <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
    <VictoryLabel text="overflowing labels with VictoryPortal" x={225} y={30} textAnchor="middle"/>
    <VictoryAxis dependentAxis
      tickLabelComponent={<VictoryPortal><VictoryLabel/></VictoryPortal>}
      tickFormat={[
        "first label",
        "second label",
        "third label",
        "forth label",
        "fifth label"
      ]}
    />
    <VictoryAxis/>
    <VictoryLine/>
  </VictoryChart>
</div>
```

## Labels and Tooltips

### How can I add tooltips to a line?

`VictoryLine` only renders a single element to represent an entire dataset, so replacing its `labelComponent` with `VictoryTooltip` wont work as expected, since there will be only a single event trigger. Voronoi tooltips can be used to add tooltips and other interactions components without unique event triggers, or with event triggers that are too small, or too close together to be useful. Use `VictoryVoronoiContainer` to associate mouse position with the nearest data points. [Read more about Voronoi Tooltips](https://formidable.com/open-source/victory/guides/tooltips#tooltips-with-victoryvoronoicontainer) and [`VictoryVoronoiContainer`](https://formidable.com/open-source/victory/docs/victory-voronoi-container)


### How can I add my own events when I'm using `VictoryTooltip`?

`VictoryTooltip` uses `defaultEvents` which are prepended onto any events array provided in props. When `events` container `onMouseOver` and `onMouseOut` events, they will interfere with the `defaultEvents` on `VictoryTooltip` to correct this, your events prop will need to return the same mutations as `defaultEvents`. [Read about tooltip events here](https://formidable.com/open-source/victory/guides/tooltips)

### Why are my bars in my bar chart overlapping with the axis?
### How can I make responsive charts?

## Containers and Behaviors

### Why isn't my container working?
### How can I make a chart with voronoi tooltips that can also zoom?




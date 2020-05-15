---
id: 1
title: New Features
category: introduction
slug: new
type: docs
scope:
  - range
  - sampleData
---

# New Features

Victory is actively developed. You can read about some of our newest feature here. For more information on improvements and bug fixes, check out our [changelog](https://github.com/FormidableLabs/victory/blob/master/CHANGELOG.md).

## Backgrounds for VictoryChart

We wanted to make it easier to style the chart backgrounds, so we added a [`backgroundComponent`](/docs/victory-chart#backgroundcomponent) for `VictoryChart`. Now, when you include `background` styles, `VictoryChart` will render [`Background`](/docs/victory-primitives#background),  a styled element that fills the area between your axes.

Try it out!

```playground
<VictoryChart
  style={{
    background: { fill: "lavender" }
  }}
>
  <VictoryLine />
</VictoryChart>
```

Polar charts are also supported, with `Background` rendering a `circle` instead of a `rect` element`:

```playground
<div>
  <svg>
    <defs>
      <radialGradient id="radial_gradient">
        <stop offset="10%" stopColor="red" />
        <stop offset="95%" stopColor="gold" />
        />
      </radialGradient>
    </defs>
  </svg>

  <VictoryChart
    polar
    style={{
      background: { fill: "url(#radial_gradient)" }
    }}
  >
    <VictoryScatter />
    <VictoryPolarAxis
      style={{
        tickLabels: { angle: 0 }
      }}
    	tickValues={[0, 90, 180, 270]}
    />
  </VictoryChart>
</div>
```

As with other components Victory renders, you can add props directly to `Background`, or create your own custom `backgroundComponent`.

```playground_norender
const CustomBackground = props => {
  return (
    <image
      href={"https://i.picsum.photos/id/425/525/300.jpg"}
      {...props}
    />
  );
};

const App = props => {
  return (
    <VictoryChart
      domainPadding={{x: 20 }}
      style={{ background: { opacity: 0.6} }}
      backgroundComponent={<CustomBackground />}
    >
      <VictoryBar
      	barWidth={40}
        style={{
         data: { strokeWidth: 4, fillOpacity: 0.2 }
       }}
      />
    </VictoryChart>
  )
};

ReactDOM.render(<App/>, mountNode);
```

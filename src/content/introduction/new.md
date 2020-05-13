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

An intro about new features! A link to the changelog

## Backgrounds for VictoryChart

VictoryChart now includes an optional [`backgroundComponent`](/docs/victory-chart#backgroundcomponent) prop. It will also render the new [`Background`](/docs/victory-primitives#backgroundcomponent) simple component as the default `backgroundComponent` when the "background" property is included in the VictoryChart [`style`](/docs/victory-chart#style) prop.

Try it out below!

```playground
<VictoryChart
  horizontal
  style={{
    background: { fill: "lavender" }
  }}
>
  <VictoryGroup labels={["a", "b", "c"]} offset={20} colorScale={"qualitative"}>
    <VictoryBar data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]} />
    <VictoryBar data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]} />
    <VictoryBar data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]} />
  </VictoryGroup>
</VictoryChart>
```

A cool rainbow example

```playground
<div>
  <svg>
    <defs>
      <linearGradient id="linear_gradient">
        <stop offset="0%" stopColor="red" />
        <stop offset="15%" stopColor="orange" />
        <stop offset="30%" stopColor="yellow" />
        <stop offset="45%" stopColor="lime" />
        <stop offset="60%" stopColor="aqua" />
        <stop offset="75%" stopColor="blue" />
        <stop offset="100%" stopColor="magenta" />
      </linearGradient>
    </defs>
  </svg>

  <VictoryChart
    style={{
      background: { fill: "url(#linear_gradient)" }
    }}
  >
    <VictoryLabel text={ "WOW" } x={ 150 } y={ 150 } />
    <VictoryScatter />
  </VictoryChart>
</div>
```

and a radial gradient on a polar chart!

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
  </VictoryChart>
</div>
```

You can also pass `Background` as the `backgroundComponent` prop value on `VictoryChart` to override props calculated for the default rendered `Background`

```playground
  <VictoryChart
    style={{ background: { fill: "lavender" } }}
    backgroundComponent={ <Background y={ "40%" } height={ "20%" }/> }
  >
    <VictoryScatter />
  </ VictoryChart>
```

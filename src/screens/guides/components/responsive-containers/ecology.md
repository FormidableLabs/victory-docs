# Responsive Containers

Victory renders components into responsive `svg` containers by default. Responsive containers will have a `viewBox` attribute set to `viewBox={"0 0 width, height"}` and styles `width: "100%" height: "auto"` in addition to any styles provided via props. Responsive containers are not appropriate for every application, so Victroy provides a couple of options for rendering static containers.

## Altering VictoryContainer

The easiest way to render a static container rather than a responsive one is by setting the `responsive` prop to false directly on the `containerComponent` instance.

```playground

<VictoryChart
  containerComponent={<VictoryContainer responsive={false}/>}
>
  <VictoryLine y={(data) => Math.sin(2 * Math.PI * data.x)}/>
</VictoryChart>

```


## Rendering components in custom containers

To render a Victory component in a completely custom container set the `standalone` prop on the component to false. The component will render a `g` tag rather than an `svg` tag. 

pie with label example
```playground
<svg viewBox="0 0 400 400" >
  <VictoryPie 
    standalone={false}
    width={400} height={400}
    data={[
      {x: "A", y: 33},
      {x: "B", y: 33},
      {x: "C", y: 33}
    ]}
    innerRadius={70} labelRadius={100}
    style={{ labels: { fontSize: 20, fill: "white"}}}
  />
  <circle cx="200" cy="200" r="65" fill="none" stroke="black" strokeWidth={3}/>
  <circle cx="200" cy="200" r="155" fill="none" stroke="black" strokeWidth={3}/>
  <VictoryLabel 
    textAnchor="middle" verticalAnchor="middle"
    x={200} y={200}
    style={{fontSize: 30}}
    text="Label"
  />
</svg>
```

*caveats:* `VictoryPortal` will not work with components that are not rendered within `VictoryContainer`.
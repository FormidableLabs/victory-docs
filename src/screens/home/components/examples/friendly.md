```playground
<VictoryChart>
  <VictoryLine
    y={(data) => Math.sin(1.5 * Math.PI * data.x)} />
  <VictoryLine
    style={{data: {stroke: "#c33b33"}}}
    y={(data) => Math.cos(2 * Math.PI * data.x)} />
</VictoryChart>
```

```playground
<VictoryChart theme={VictoryTheme.material}>
  <VictoryLine
    y={(data) => Math.sin(1.5 * Math.PI * data.x)} // Try changing 1.5 to 15
  />
  <VictoryLine
    style={{data: {stroke: "#c33b33"}}} // Add strokeWidth: 5
    y={(data) => Math.cos(2 * Math.PI * data.x)}
  />
</VictoryChart>
```

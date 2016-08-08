```playground
<VictoryChart theme={VictoryTheme.material}>
  <VictoryLine
    // Try changing 1.5 to 5
    y={(data) => Math.sin(1.5 * Math.PI * data.x)} 
  />
  <VictoryLine
    // Try adding a strokeWidth
    style={{data: {stroke: "tomato"}}}
    y={(data) => Math.cos(2 * Math.PI * data.x)}
  />
</VictoryChart>
```

Custom Central Axis
=============

```playground_norender
// Data sets
const dataA = [
  {x: "Personal Drones", y: 57},
  {x: "Smart Thermostat", y: 40},
  {x: "Television", y: 38},
  {x: "Smartwatch", y: 37},
  {x: "Fitness Monitor", y: 25},
  {x: "Tablet", y: 19},
  {x: "Camera", y: 15},
  {x: "Laptop", y: 13},
  {x: "Phone", y: 12}
];

const dataB = dataA.map(point => {
  const y = Math.round(point.y + 3 * (Math.random() - 0.5));
  return { ...point, y };
});

class CentralAxis extends React.Component {
  render() {
    return (
      <svg style={{width: "100%", height: "auto"}} viewBox="0 0 500 300">

        <VictoryStack horizontal
          /* setting a symmetric domain makes it much easier to center the axis */
          domain={{x: [-60, 60]}}
          /*
            When not using two adjacent Victory components without a wrapper component
            like VictoryChart or VictoryStack width, height and padding padding must be
            set in top level component so that they match up with each other.
          */
          height={300}
          width={500}
          standalone={false}
          style={{
            data: {width: 20},
            labels: {fontSize: 11}
          }}
        >
          <VictoryBar
            style={{data: {fill: "tomato"}}}
            data={dataA}
            x={"x"}
            y={(data) => (-Math.abs(data.y))}
            labels={(data) => (`${Math.abs(data.y)}%`)}
          />
          <VictoryBar
            style={{data: {fill: "orange"}}}
            data={dataB}
            labels={(data) => (`${Math.abs(data.y)}%`)}
          />
        </VictoryStack>

        <VictoryAxis dependentAxis
          height={300}
          width={500}
          style={{
            axis: {stroke: "transparent"},
            ticks: {stroke: "transparent"},
            tickLabels: {fontSize: 11, fill: "black"}
          }}
          /*
            Use a custom tickLabelComponent with an absolutely positioned x value
            to position your tick labels in the center of the chart. The correct
            y values are still provided by VictoryAxis for each tick
          */
          tickLabelComponent={
            <VictoryLabel x={245} dy={-0.5} textAnchor="middle" verticalAnchor="start"/>
          }
          standalone={false}
          tickValues={dataA.map(point => point.x).reverse()}
        />
      </svg>
    );
  }
}

ReactDOM.render(<CentralAxis/>, mountNode)

```

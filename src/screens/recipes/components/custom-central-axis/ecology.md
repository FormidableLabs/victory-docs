Custom Central Axis
=============

```playground_norender
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
          padding={50}
          standalone={false}
          style={{
            data: {width: 20},
            labels: {fontSize: 11}
          }}
        >
          <VictoryBar
            style={{data: {fill: "tomato"}}}
            data={[
              {x: "Smartphone", y: 57},
              {x: "Laptop", y: 36},
              {x: "Televsion", y: 38},
              {x: "Tablet", y: 38},
              {x: "Fitness Monitor", y: 12},
              {x: "Smartwatch", y: 12},
              {x: "Surveillance Camera", y: 10},
              {x: "Smart Thermostat", y: 9},
              {x: "Personal Drones", y: 6}
            ]}
            x={"x"}
            y={(data) => (-Math.abs(data.y))}
            labels={(data) => (`${Math.abs(data.y)}%`)}
          />
          <VictoryBar
            style={{data: {fill: "orange"}}}
            data={[
              {x: "Smartphone", y: 48},
              {x: "Laptop", y: 30},
              {x: "Television", y: 30},
              {x: "Tablet", y: 29},
              {x: "Fitness Monitor", y: 13},
              {x: "Smartwatch", y: 13},
              {x: "Surveillance Camera", y: 11},
              {x: "Smart Thermostat", y: 9},
              {x: "Personal Drones", y: 7}
            ]}
            labels={(data) => (`${Math.abs(data.y)}%`)}
          />
        </VictoryStack>

        <VictoryAxis dependentAxis
          height={300}
          width={500}
          padding={50}
          style={{
            axis: {stroke: "transparent"},
            ticks: {stroke: "transparent"},
            tickLabels: {fontSize: 7, fill: "black"}
          }}
          /*
            Use a custom tickLabelComponent with an absolutely positioned x value
            to position your tick labels in the center of the chart. The correct
            y values are still provided by VictoryAxis for each tick
          */
          tickLabelComponent={
            <VictoryLabel x={250} textAnchor="middle" verticalAnchor="middle"/>
          }
          standalone={false}
          tickValues={[
            "Smartphone",
            "Laptop",
            "Television",
            "Tablet",
            "Fitness Monitor",
            "Smartwatch",
            "Surveillance Camera",
            "Smart Thermostat",
            "Personal Drones"
          ]}
        />
      </svg>
    );
  }
}

ReactDOM.render(<CentralAxis/>, mountNode)

```

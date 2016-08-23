Custom Data Component
=============

```playground_norender
class CustomPie extends React.Component {
  static propTypes = {
    datum: React.PropTypes.object,
    x: React.PropTypes.number,
    y: React.PropTypes.number
  };

  render() {
    const {datum, x, y} = this.props;
    const pieWidth = 120;

    return (
      <g transform={
        `translate(${x - pieWidth / 2}, ${y - pieWidth / 2})`
        }
      >
        <VictoryPie
          standalone={false}
          height={pieWidth}
          width={pieWidth}
          data={datum.pie}
          style={{
            labels: {fontSize: 0},
            data: {stroke: "none"}
          }}
          colorScale={["#f77", "#55e", "#8af"]}
        />
      </g>
    );
  }
}

class CustomDataComponent extends React.Component {
  getStyles() {
    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        width: "100%",
        height: "100%",
        padding: 50
      }
    };
  }

  render() {
    const styles = this.getStyles();

    const data = [
      {x: 1, y: 30},
      {x: 2, y: 32},
      {x: 3, y: 65},
      {x: 4, y: 38},
      {x: 5, y: 50},
      {x: 6, y: 47},
      {x: 7, y: 38},
      {x: 8, y: 48},
      {x: 9, y: 80},
      {x: 10, y: 73},
      {x: 11, y: 76},
      {x: 12, y: 100}
    ];

    const pieData = data.map((datum) => {
      datum.pie = [
        {x: "Lions", y: Math.round(Math.random() * 10)},
        {x: "Tigers", y: Math.round(Math.random() * 10)},
        {x: "Bears", y: Math.round(Math.random() * 10)}
      ];
      return datum;
    });

    return (
      <svg style={styles.parent} viewBox="0 0 500 300">
        <VictoryChart domain={{x: [1, 12], y: [0, 100]}}>
          <VictoryAxis
            tickValues={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "June",
              "July",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ]}
            style={{
              axis: {strokeWidth: 1},
              ticks: {strokeWidth: 1},
              tickLabels: {fontSize: 8}
            }}
          />

          <VictoryLine
            data={pieData}
            style={{
              data: {strokeWidth: 1}
            }}
          />

          <VictoryScatter
            data={pieData}
            dataComponent={<CustomPie />}
          />
        </VictoryChart>
      </svg>
    );
  }
}

ReactDOM.render(<CustomDataComponent/>, mountNode)

```

Multiple Axes
=============

```playground_norender
class MultipleAxes extends React.Component {
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

    return (
      <svg style={styles.parent} viewBox="0 0 500 300">
        <VictoryAxis
          style={{
            data: {
              strokeWidth: 2
            },
            labels: {
              fontSize: 16
            }
          }}
          orientation="bottom"
          domain={[0, 20]}
          label="Time in microseconds"
          standalone={false}
        />

        <VictoryAxis dependent
          style={{
            axis: {stroke: "orange", strokeWidth: 2},
            ticks: {stroke: "orange"},
            tickLabels: {fontSize: 12}
          }}
          orientation="left"
          domain={[-200, 200]}
          label="Low Frequency"
          standalone={false}
        />

        <VictoryAxis dependent
          style={{
            axis: {stroke: "blue", strokeWidth: 2},
            ticks: {stroke: "blue"},
            tickLabels: {fontSize: 12}
          }}
          orientation="right"
          domain={[-0.8, 0.8]}
          label="High Frequency"
          standalone={false}
        />

        <VictoryLine
          style={{
            data: {
              stroke: "orange",
              strokeWidth: 2
            }
          }}
          y={(data) =>
            200 * Math.exp(-0.05 * data.x) * Math.sin(data.x)
          }
          interpolation="basis"
          domain={{
            x: [0, 20],
            y: [-200, 200]
          }}
          standalone={false}
        />

        <VictoryLine
          style={{
            data: {
              stroke: "blue", strokeWidth: 1
            }
          }}
          y={(data) =>
            0.8 * Math.exp(-0.5 * data.x) * Math.sin(10 * data.x)
          }
          interpolation="basis"
          samples={500}
          domain={{
            x: [0, 20],
            y: [-0.8, 0.8]
          }}
          standalone={false}
        />
      </svg>
    );
  }
}

ReactDOM.render(<MultipleAxes/>, mountNode)

```

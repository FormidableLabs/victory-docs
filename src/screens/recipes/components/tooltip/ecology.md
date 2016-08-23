Tooltip
=============

A custom tooltip is achieved by creating a `Flyout` React component and passing it as `labelComponent` to `VictoryScatter`.

```playground_norender
class Flyout extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool
  };

  getFlyoutPath(props) {
    const padding = 4;
    const size = 10;
    const y = props.y + padding;
    const x = props.x;
    const height = (size / 2 * Math.sqrt(3));
    return `M ${x - size - 1}, ${y - size + 1}
      A ${size} ${size + 3} 0 0 1 ${x + size}, ${y - size}
      L ${x + size}, ${y - size}
      L ${x}, ${y + height}
      z`;
  }

  render() {
    const path = this.getFlyoutPath(this.props);
    const pathStyle = {stroke: "teal", fill: "teal"};
    const group = (
      <g>
        <path d={path} style={pathStyle}/>
        <VictoryLabel {...this.props}/>
      </g>
    );
    return this.props.active ? group : null;
  }

}

class Tooltip extends React.Component {
  getStyles() {
    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        width: "100%",
        height: "100%",
        padding: 50
      },
      area: {
        data: {
          fill: "teal",
          stroke: "teal",
          strokeWidth: 2,
          fillOpacity: 0.4
        }
      },
      scatter: {
        data: {
          stroke: "teal",
          fill: "white",
          strokeWidth: 2
        },
        labels: {
          fill: "white",
          padding: 18
        }
      },
      axis: {
        axis: { stroke: "none" },
        ticks: { stroke: "none" },
        grid: {stroke: "teal", opacity: 0.2},
        tickLabels: {fill: "teal"}
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <VictoryChart
        style={styles.parent}
      >
        <VictoryAxis
          style={styles.axis}
          tickValues={[1, 2, 3, 4]}
        />
        <VictoryAxis dependentAxis
          style={styles.axis}
          tickValues={[1, 2, 3, 4]}
        />
        <VictoryArea
          style={styles.area}
          data={[
            {x: 0, y: 0},
            {x: 1, y: 3},
            {x: 2, y: 2},
            {x: 3, y: 4},
            {x: 4, y: 3},
            {x: 5, y: 5}
          ]}
          interpolation="natural"
        />
        <VictoryScatter
          style={styles.scatter}
          data={[
            {x: 1, y: 3},
            {x: 2, y: 2},
            {x: 3, y: 4},
            {x: 4, y: 3}
          ]}
          labels={["a", "b", "c", "d", "e"]}
          labelComponent={<Flyout/>}
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "labels",
                      mutation: () => {
                        return {active: true};
                      }
                    }, {
                      mutation: (props) => {
                        return { style:
                          Object.assign({}, props.style, {fill: "teal"})
                        };
                      }
                    }
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "labels",
                      mutation: () => {
                        return {active: false};
                      }
                    }, {
                      mutation: (props) => {
                        return { style:
                          Object.assign({}, props.style, {fill: "white"})
                        };
                      }
                    }
                  ];
                }
              }
            }
          ]}
        />
      </VictoryChart>
    );
  }
}

ReactDOM.render(<Tooltip/>, mountNode)

```

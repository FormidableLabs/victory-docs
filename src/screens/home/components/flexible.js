import React from "react";
import Radium from "radium";

// VComponents
import { VictoryAxis, VictoryLine } from "victory-chart";
import { VictoryLabel } from "victory-core";

class MultipleAxes extends React.Component {
  getDataSetOne() {
    return [
      {x: new Date(2000, 1, 1), y: 12},
      {x: new Date(2000, 2, 1), y: 10},
      {x: new Date(2000, 3, 1), y: 11},
      {x: new Date(2001, 1, 1), y: 5},
      {x: new Date(2002, 1, 1), y: 4},
      {x: new Date(2003, 1, 1), y: 6},
      {x: new Date(2004, 1, 1), y: 5},
      {x: new Date(2005, 1, 1), y: 7},
      {x: new Date(2006, 1, 1), y: 8},
      {x: new Date(2007, 1, 1), y: 9},
      {x: new Date(2008, 1, 1), y: -8.5},
      {x: new Date(2009, 1, 1), y: -9},
      {x: new Date(2010, 1, 1), y: 5},
      {x: new Date(2013, 1, 1), y: 1},
      {x: new Date(2014, 1, 1), y: 2},
      {x: new Date(2015, 1, 1), y: -5}
    ];
  }

  getDataSetTwo() {
    return [
      {x: new Date(2000, 1, 1), y: 5},
      {x: new Date(2003, 1, 1), y: 6},
      {x: new Date(2004, 1, 1), y: 4},
      {x: new Date(2005, 1, 1), y: 10},
      {x: new Date(2006, 1, 1), y: 12},
      {x: new Date(2007, 2, 1), y: 48},
      {x: new Date(2008, 1, 1), y: 19},
      {x: new Date(2009, 1, 1), y: 31},
      {x: new Date(2011, 1, 1), y: 49},
      {x: new Date(2014, 1, 1), y: 40},
      {x: new Date(2015, 1, 1), y: 21}
    ];
  }

  getStyles() {
    const BABY_BLUE_COLOR = "#ccdee8";
    const BLUE_COLOR = "#00a3de";
    const RED_COLOR = "#7c270b";

    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        margin: 0,
        padding: 0,
        backgroundColor: BABY_BLUE_COLOR,
        fontFamily: "'Fira Sans', 'Helvetica Neue', Helvetica, sans-serif",
        width: "100%",
        height: "auto"
      },
      labelNumber: {
        fill: "#ffffff",
        fontFamily: "inherit",
        fontSize: "14px"
      },
      axisYears: {
        axis: {
          stroke: "black",
          strokeWidth: 1
        },
        ticks: {
          size: 10,
          /*
          TODO: Adjust tick size based on whether the year is divisible by 5.
          I believe the following should work (but it does not):
          ticks: {
            size: (tick) => {
              const tickSize = tick.getFullYear() % 5 === 0 ? 10 : 5;
              return tickSize;
            }
          */
          stroke: "black",
          strokeWidth: 1
        },
        tickLabels: {
          fill: "black",
          fontFamily: "inherit",
          fontSize: 16
        }
      },
      // DATA SET ONE
      axisOne: {
        grid: {
          stroke: (tick) => tick === -10 ? "transparent" : "#ffffff", //eslint-disable-line no-arrow-condition
          strokeWidth: 2
        },
        axis: {
          stroke: BLUE_COLOR,
          strokeWidth: 0
        },
        ticks: {
          strokeWidth: 0
        },
        tickLabels: {
          fill: BLUE_COLOR,
          fontFamily: "inherit",
          fontSize: 16
        }
      },
      labelOne: {
        fill: BLUE_COLOR,
        fontFamily: "inherit",
        fontSize: 12,
        fontStyle: "italic"
      },
      lineOne: {
        data: {
          stroke: BLUE_COLOR,
          strokeWidth: 4.5
        }
      },
      axisOneCustomLabel: {
        fill: BLUE_COLOR,
        fontFamily: "inherit",
        fontWeight: 300,
        fontSize: 21
      },
      // DATA SET TWO
      axisTwo: {
        axis: {
          stroke: RED_COLOR,
          strokeWidth: 0
        },
        ticks: {
          strokeWidth: 0
        },
        tickLabels: {
          fill: RED_COLOR,
          fontFamily: "inherit",
          fontSize: 16
        }
      },
      labelTwo: {
        fill: RED_COLOR,
        fontFamily: "inherit",
        fontSize: 12,
        fontStyle: "italic"
      },
      lineTwo: {
        data: {
          stroke: RED_COLOR,
          strokeWidth: 4.5
        }
      },
      // HORIZONTAL LINE
      lineThree: {
        data: {
          stroke: "#e95f46",
          strokeWidth: 2
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const dataSetOne = this.getDataSetOne();
    const dataSetTwo = this.getDataSetTwo();

    return (
      <svg style={styles.parent} viewBox="0 0 450 350">
        <rect x="0" y="0" width="10" height="30" fill="#f01616"/>

        <rect x="420" y="10" width="20" height="20" fill="#458ca8" />

        <VictoryLabel
          x={430} y={27}
          textAnchor="middle"
          verticalAnchor="end"
          style={styles.labelNumber}
        >
          1
        </VictoryLabel>

        <VictoryLabel
          x={25} y={15}
          textAnchor="start"
          verticalAnchor="start"
          lineHeight={1.2}
          style={{
            fill: "#000000",
            fontFamily: "inherit",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          An outlook
        </VictoryLabel>

        <VictoryLabel
          x={25} y={70}
          verticalAnchor="end"
          lineHeight={1.2}
          style={styles.labelOne}
        >
          {"Economy \n % change on a year earlier"}
        </VictoryLabel>

        <VictoryLabel
          x={425} y={70}
          textAnchor="end"
          verticalAnchor="end"
          lineHeight={1.2}
          style={styles.labelTwo}
        >
          {"Dinosaur exports\n $bn"}
        </VictoryLabel>

        <g transform={"translate(0, 40)"}>
          <VictoryLabel
            x={37} y={161}
            textAnchor="middle"
            verticalAnchor="end"
            style={styles.axisOneCustomLabel}
          >
            {"+"}
          </VictoryLabel>

          <VictoryLabel
            x={37} y={199}
            textAnchor="middle"
            verticalAnchor="end"
            style={styles.axisOneCustomLabel}
          >
            {"-"}
          </VictoryLabel>

          <VictoryAxis dependent
            domain={[-10, 15]}
            offsetX={51}
            orientation="left"
            standalone={false}
            style={styles.axisOne}
            tickFormat={
              (x) => { return Math.abs(x).toString(); }
            }
          />

          <VictoryAxis dependent
            domain={[0, 50]}
            orientation="right"
            standalone={false}
            style={styles.axisTwo}
          />

          <VictoryAxis
            scale="time"
            standalone={false}
            style={styles.axisYears}
            tickValues={[
              new Date(1999, 1, 1),
              new Date(2000, 1, 1),
              new Date(2001, 1, 1),
              new Date(2002, 1, 1),
              new Date(2003, 1, 1),
              new Date(2004, 1, 1),
              new Date(2005, 1, 1),
              new Date(2006, 1, 1),
              new Date(2007, 1, 1),
              new Date(2008, 1, 1),
              new Date(2009, 1, 1),
              new Date(2010, 1, 1),
              new Date(2011, 1, 1),
              new Date(2012, 1, 1),
              new Date(2013, 1, 1),
              new Date(2014, 1, 1),
              new Date(2015, 1, 1),
              new Date(2016, 1, 1)
            ]}
            tickFormat={
              (x) => {
                if (x.getFullYear() === 2000) {
                  return x.getFullYear();
                }
                if (x.getFullYear() % 5 === 0) {
                  return x.getFullYear().toString().slice(2);
                }
              }
            }
          />

          <VictoryLine
            data={[
              {x: new Date(1999, 1, 1), y: 0},
              {x: new Date(2014, 4, 1), y: 0}
            ]}
            domain={{
              x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
              y: [-10, 15]
            }}
            interpolation="monotoneX"
            scale={{x: "time", y: "linear"}}
            standalone={false}
            style={styles.lineThree}
          />

          <VictoryLine
            data={dataSetOne}
            domain={{
              x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
              y: [-10, 15]
            }}
            interpolation="monotoneX"
            scale={{x: "time", y: "linear"}}
            standalone={false}
            style={styles.lineOne}
          />

          <VictoryLine
            data={dataSetTwo}
            domain={{
              x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
              y: [0, 50]
            }}
            interpolation="monotoneX"
            scale={{x: "time", y: "linear"}}
            standalone={false}
            style={styles.lineTwo}
          />
        </g>
      </svg>
    );
  }
}

export default Radium(MultipleAxes); // eslint-disable-line new-cap

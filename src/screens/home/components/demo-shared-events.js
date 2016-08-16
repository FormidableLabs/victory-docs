import React from "react";
import Radium from "radium";

// Common
import { merge } from "lodash";
import { VictoryBar, VictoryLine, VictoryAxis,
VictorySharedEvents } from "victory";

class SharedEvents extends React.Component {
  getStyles() {
    return {
      parent: {
        display: "block",
        boxSizing: "border-box",
        margin: "0 auto",
        padding: 0,
        width: "auto",
        height: "100%",
        maxHeight: "280px"
      }
    };
  }
  render() {
    const styles = this.getStyles();
    const lineData = [
      {x: 1, y: 39},
      {x: 2, y: 31},
      {x: 3, y: 43},
      {x: 4, y: 54},
      {x: 5, y: 50}
    ];
    const barData = [
      {x: 1, y: 12, label: "Jan 2010"},
      {x: 2, y: 13, label: "Apr 2010"},
      {x: 3, y: 81, label: "Jul 2010"},
      {x: 4, y: 49, label: "Oct 2010"},
      {x: 5, y: 30, label: "Jan 2011"},
      {x: 6, y: 29, label: "Apr 2011"},
      {x: 7, y: 13, label: "Jul 2011"},
      {x: 8, y: 53, label: "Oct 2011"},
      {x: 9, y: 24, label: "Jan 2012"},
      {x: 10, y: 68, label: "Apr 2012"},
      {x: 11, y: 52, label: "Jul 2012"},
      {x: 12, y: 29, label: "Oct 2012"},
      {x: 13, y: 27, label: "Jan 2013"},
      {x: 14, y: 100, label: "Apr 2013"},
      {x: 15, y: 10, label: "Jul 2013"},
      {x: 16, y: 77, label: "Oct 2013"},
      {x: 17, y: 76, label: "Jan 2014"},
      {x: 18, y: 61, label: "Apr 2014"},
      {x: 19, y: 48, label: "Jul 2014"},
      {x: 20, y: 15, label: "Oct 2014"}
    ];
    return (
      <svg
        viewBox="0 0 450 350"
        className="fancyBorder"
        style={styles.parent}
      >
        <VictorySharedEvents
          width={450}
          height={350}
          events={[
            {
              childName: "bar",
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      childName: "line",
                      mutation: (props) => {
                        return {style: merge({}, props.style, {stroke: "blue"})};
                      }
                    },
                    {
                      mutation: (props) => {
                        return {style: merge({}, props.style, {fill: "gold"})};
                      }
                    },
                    {
                      target: "labels",
                      mutation: (props) => {
                        return {style: merge({}, props.style, {fill: "black"})};
                      }
                    }
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      childName: "line",
                      mutation: (props) => {
                        return {style: merge({}, props.style, {stroke: "transparent"})};
                      }
                    },
                    {
                      mutation: (props) => {
                        return {style: merge({}, props.style, {fill: "tomato"})};
                      }
                    },
                    {
                      target: "labels",
                      mutation: (props) => {
                        return {style: merge({}, props.style, {fill: "transparent"})};
                      }
                    }
                  ];
                }
              }
            }
          ]}
        >
          <VictoryBar
            name="bar"
            width={450}
            height={350}
            data={barData}
            style={{data: {fill: "tomato"}, labels: {fill: "transparent"}}}
            standalone={false}
          />
          <VictoryLine
            name={"line"}
            data={lineData}
            width={450}
            height={350}
            standalone={false}
            domain={{y: [0, 100]}}
            style={{data: {stroke: "transparent"}}}
          />
          <VictoryAxis
            standalone={false}
            width={450}
            label="Year"
            height={350}
            tickValues={["2010", "2011", "2012", "2013", "2014", "2015"]}
          />
        </VictorySharedEvents>
      </svg>
    );
  }
}

export default Radium(SharedEvents); // eslint-disable-line new-cap

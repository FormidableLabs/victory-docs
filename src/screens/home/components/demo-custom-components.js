/*global window:false */

import React from "react";
import { range, random } from "lodash";
import { Area, VictoryArea, VictoryAxis, VictoryChart, VictoryLine } from "victory";

class GradientArea extends Area {
  toGrayscale(color) {
    const integerColor = parseInt(color.replace("#", ""), 16);
    const r = (integerColor >> 16) & 255; // eslint-disable-line no-bitwise
    const g = (integerColor >> 8) & 255; // eslint-disable-line no-bitwise
    const b = integerColor & 255; // eslint-disable-line no-bitwise
    const gray = parseInt(0.299 * r + 0.587 * g + 0.114 * b, 10);
    return `rgb(${gray}, ${gray}, ${gray})`;
  }

  // This method exists in Area, and is completely overridden for the custom component.
  renderArea(paths, style, events) {
    const gradientId = `gradient-${Math.random()}`;

    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;
    const loc = isBrowser ? window.location.href : "";

    const areaStyle = Object.assign(
      {}, style, {fill: `url(${loc}#${gradientId})`}
    );
    const percent = `${this.props.percent}%`;
    const gray = this.toGrayscale(style.fill);
    return paths.map((path, index) => {
      return (
        <g key={index}>
          <defs>
            <linearGradient id={gradientId}>
                <stop offset="0%" stopColor={style.fill}/>
                <stop offset={percent} stopColor={style.fill}/>
                <stop offset={percent} stopColor={gray}/>
                <stop offset="100%" stopColor={gray}/>
            </linearGradient>
          </defs>
          <path key="area" style={areaStyle} d={path} {...events}/>
        </g>
      );
    });
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { percent: 62 };
  }

  getStreamData() {
    return range(7).map((i) => {
      return range(26).map((j) => {
        return {
          x: j,
          y: (10 - i) * random(10 - i, 20 - 2 * i),
          _y0: -1 * (10 - i) * random(10 - i, 20 - 2 * i)
        };
      });
    });
  }

  getStyles() {
    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        margin: "0 auto",
        padding: 0
      }
    };
  }

  render() {
    const streamData = this.getStreamData();

    const colors = [
      "#006064", "#00796B", "#8BC34A", "#DCE775",
      "#FFF59D", "#F4511E", "#c33409"
    ];

    const styles = this.getStyles();

    return (
      <div className="Benefits-demo fancyBorder">
        <VictoryChart
          width={450} height={350}
          style={{parent: styles.parent}}
          domain={{x: [0, 25], y: [-300, 300]}}
        >
          <VictoryAxis
            style={{
              axis: {stroke: "none"},
              tickLabels: {fill: "none"},
              grid: {stroke: "gray"}
            }}
            tickValues={[2, 4, 6, 8, 10, 12, 14, 17, 19, 21, 23, 25]}
          />
          <VictoryAxis dependentAxis
            style={{tickLabels: {fontSize: 15}}}
            crossAxis={false}
          />

          {
            streamData.map((d, i) => {
              return (
                <VictoryArea key={i}
                  interpolation="monotoneX"
                  data={d}
                  style={{data: {fill: colors[i]}}}
                  dataComponent={
                    <GradientArea
                      percent={this.state.percent}
                    />
                  }
                />
              );
            })
          }
          <VictoryLine
            style={{
              data: {stroke: "#c33409", strokeWidth: 3}
            }}
            data={[
              {x: 25 * this.state.percent / 100, y: -300},
              {x: 25 * this.state.percent / 100, y: 300}
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

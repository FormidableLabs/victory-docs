import React from "react";
import { round } from "lodash";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter } from "victory-chart";

const leftPad = (str, len, ch) => {
  str = String(str);
  let i = -1;
  if (!ch && ch !== 0) {
    ch = " ";
  }
  len -= str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
};

const start = Date.now();

const makeDate = (period, count) => {
  const date = new Date(start + count * period);
  const hours = leftPad(date.getHours(), 2, 0);
  const minutes = leftPad(date.getMinutes(), 2, 0);
  const seconds = leftPad(date.getSeconds(), 2, 0);
  return `${hours}:${minutes}:${seconds}`;
};

const LiveChart = ({data, period, domain}) => (
  <VictoryChart
    animate={{ duration: 1000 }}
    padding={{
      left: 80,
      right: 50,
      top: 20,
      bottom: 30
    }}
  >
    <VictoryAxis
      tickFormat={makeDate.bind(null, period)}
      tickCount={3}
      style={{
        ticks: {stroke: "black", strokeWidth: 3}
      }}
    />
    <VictoryAxis dependentAxis
      label="Price"
      tickCount={4}
      tickFormat={(y) => round(y, 2)}
      domain={domain}
      style={{
        axisLabel: {
          padding: 50
        },
        ticks: {stroke: "black", strokeWidth: 3}
      }}
    />
    <VictoryLine
      data={data}
      interpolation="monotoneX"
      style={{
        data: { strokeWidth: 1 }
      }}
    />
    <VictoryScatter
      data={data}
      size={5}
      style={{
        data: {
          fill: "black",
          stroke: "white",
          strokeWidth: 3
        }
      }}
    />
  </VictoryChart>
);

export default LiveChart;

import React from "react";
// import PropTypes from "prop-types";

// VComponents
import {
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryLabel,
  VictoryAxis
} from "victory";
import styled from "styled-components";
import importedTheme from "../../styles/theme";

const HeroDemoContainer = styled.div`
  background-color: ${({ theme }) => theme.color.brownPod};
  height: 200px;
  display: none;
  font-size: 3rem;
  @media ${({ theme }) => theme.mediaQuery.md} {
    display: block;
  }
`;

const data = [
  { x: 1, y: 0 },
  { x: 2, y: 5 },
  { x: 3, y: 9 },
  { x: 4, y: 4 },
  { x: 5, y: 9 },
  { x: 6, y: 7 },
  { x: 7, y: 14 },
  { x: 8, y: 15 },
  { x: 9, y: 21 },
  { x: 10, y: 22 },
  { x: 11, y: 16 },
  { x: 12, y: 14 },
  { x: 13, y: 18 },
  { x: 14, y: 26 },
  { x: 15, y: 14 },
  { x: 16, y: 16 },
  { x: 17, y: 23 },
  { x: 18, y: 21 },
  { x: 19, y: 25 },
  { x: 20, y: 21 },
  { x: 21, y: 25 },
  { x: 22, y: 19 },
  { x: 23, y: 25 },
  { x: 24, y: 21 },
  { x: 25, y: 18 },
  { x: 26, y: 14 },
  { x: 27, y: 16 },
  { x: 28, y: 22 },
  { x: 29, y: 20 },
  { x: 30, y: 23 },
  { x: 31, y: 19 },
  { x: 32, y: 20 },
  { x: 33, y: 17 },
  { x: 34, y: 19 },
  { x: 35, y: 18 },
  { x: 36, y: 20 },
  { x: 37, y: 23 },
  { x: 38, y: 24 },
  { x: 39, y: 18 },
  { x: 40, y: 13 },
  { x: 41, y: 15 },
  { x: 42, y: 23 },
  { x: 43, y: 21 },
  { x: 44, y: 20 },
  { x: 45, y: 15 },
  { x: 46, y: 13 },
  { x: 47, y: 11 },
  { x: 48, y: 10 },
  { x: 49, y: 19 },
  { x: 50, y: 23 },
  { x: 51, y: 17 }
];

const font = color => ({
  fill: color || importedTheme.color.rouge,
  fontSize: 20,
  fontFamily: "Helvetica"
});

const axisLineProps = strokeWidth => ({
  dependentAxis: true,
  style: {
    axis: {
      stroke: importedTheme.color.red,
      ...(strokeWidth ? { strokeWidth } : {})
    }
  },
  tickFormat: () => ""
});

const HeroDemo = () => (
  <HeroDemoContainer>
    <VictoryChart
      height={250}
      width={1600}
      style={{
        parent: {
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem"
        }
      }}
    >
      <VictoryLabel
        text="JUL 2015"
        textAnchor="end"
        style={font()}
        x={40}
        y={190}
      />
      <VictoryLabel
        text="PROJECT START"
        textAnchor="end"
        style={font()}
        x={40}
        y={215}
      />
      <VictoryLabel
        text="TODAY"
        textAnchor="start"
        style={font()}
        x={1560}
        y={190}
      />
      <VictoryLabel
        text="V2.3"
        textAnchor="start"
        style={font()}
        x={1560}
        y={215}
      />
      <VictoryLabel
        text="V2.3"
        textAnchor="start"
        style={font(importedTheme.color.red)}
        x={1380}
        y={35}
      />
      <VictoryLabel
        text="V2"
        textAnchor="start"
        style={{ ...font(importedTheme.color.red), fontWeight: "bold" }}
        x={1020}
        y={35}
      />
      <VictoryLabel
        text="1,062"
        textAnchor="start"
        style={font(importedTheme.color.white)}
        x={415}
        y={30}
      />
      <VictoryLabel
        text="232"
        textAnchor="start"
        style={font(importedTheme.color.white)}
        x={1450}
        y={160}
      />
      <VictoryLabel
        text="460 COMMITS"
        textAnchor="start"
        style={font(importedTheme.color.white)}
        x={1560}
        y={105}
      />
      <VictoryLine
        data={data}
        style={{
          data: { stroke: importedTheme.color.white, strokeWidth: 4 }
        }}
      />
      <VictoryScatter
        data={data.filter(d => [14, 48, 51].includes(d.x))}
        size={5}
        style={{
          data: { fill: importedTheme.color.white }
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={() => ""}
        style={{ axis: { stroke: "none" } }}
      />
      <VictoryAxis
        tickFormat={() => ""}
        style={{ axis: { stroke: importedTheme.color.rouge } }}
        // style={{ axis: { stroke: "none" } }}
      />
      <VictoryAxis {...axisLineProps()} offsetX={80} />
      <VictoryAxis {...axisLineProps(3)} offsetX={150} />
      <VictoryAxis {...axisLineProps()} offsetX={280} />
      <VictoryAxis {...axisLineProps(3)} offsetX={340} />
      <VictoryAxis {...axisLineProps()} offsetX={610} />
      <VictoryAxis {...axisLineProps()} offsetX={640} />
      <VictoryAxis {...axisLineProps()} offsetX={650} />
      <VictoryAxis {...axisLineProps()} offsetX={730} />
      <VictoryAxis {...axisLineProps()} offsetX={790} />
      <VictoryAxis {...axisLineProps()} offsetX={810} />
      <VictoryAxis {...axisLineProps()} offsetX={1000} />
      <VictoryAxis {...axisLineProps()} offsetX={1000} />
      <VictoryAxis {...axisLineProps(3)} offsetX={1030} />
      <VictoryAxis {...axisLineProps()} offsetX={1090} />
      <VictoryAxis {...axisLineProps()} offsetX={1230} />
      <VictoryAxis {...axisLineProps()} offsetX={1400} />
    </VictoryChart>
  </HeroDemoContainer>
);

export default HeroDemo;

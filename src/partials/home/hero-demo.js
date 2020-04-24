import React from "react";
// import PropTypes from "prop-types";

// VComponents
import {
  VictoryLine,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
  VictoryScatter,
  VictoryVoronoiContainer,
  Point
} from "victory";
import moment from "moment";
import styled from "styled-components";
import importedTheme from "../../styles/theme";
import downloads from "../../data/downloads";
import versions from "../../data/versions";
import { maxBy, last } from "lodash";

const HeroDemoContainer = styled.div`
  background-color: ${({ theme }) => theme.color.deepBrown};
  height: 200px;
  display: none;
  font-size: 3rem;
  @media ${({ theme }) => theme.mediaQuery.md} {
    display: block;
  }
`;

const font = color => ({
  fill: color || importedTheme.color.brown,
  fontSize: 20,
  fontFamily: "Helvetica"
});

export const groupDownloadsByWeek = dates => {
  const downloadsGroupedByPeriod = {};

  dates.forEach(date => {
    const start = moment(date.day)
      .startOf("week")
      .format("YYYY-MM-DD");

    downloadsGroupedByPeriod[start] = downloadsGroupedByPeriod[start]
      ? downloadsGroupedByPeriod[start] + date.downloads
      : date.downloads;
  });

  return Object.entries(downloadsGroupedByPeriod).map(([key, value]) => ({
    date: key,
    downloads: value
  }));
};

const downloadsPerWeek = groupDownloadsByWeek(downloads.data);
const minorVersions = versions.data.filter(v => v.version.endsWith("0"));
const voronoiBlacklist = minorVersions.map(v => `ignore-${v.version}`);

const isPeak = (datum, index, data) => {
  if (index < 3 || index > data.length - 3) {
    return false;
  } else if (datum.downloads < 10000) {
    return false;
  } else if (maxBy(data, "downloads").downloads === datum.downloads) {
    return true;
  }
  const threshold = 1.2;
  const current = datum.downloads;
  const lowerBefore =
    current > data[index - 1].downloads &&
    current > data[index - 2].downloads * threshold;
  const lowerAfter =
    current > data[index + 1].downloads &&
    current > data[index + 2].downloads * threshold;
  return lowerBefore && lowerAfter;
};

const downloadPeaks = downloadsPerWeek.filter(isPeak);

const VoronoiLabel = props => {
  const labelStyles = {
    fill: importedTheme.color.white,
    fontSize: 20,
    fontFamily: "Helvetica",
    textAnchor: "middle",
    fontWeight: "bold"
  };
  return (
    <g>
      <Point x={props.x} y={props.y} size={6} style={{ fill: "white" }} />
      <rect
        x={props.x - 30}
        y={props.y - 30}
        width={60}
        height={20}
        fill={importedTheme.color.deepBrown}
      />
      <VictoryLabel {...props} style={labelStyles} dy={-20} />
    </g>
  );
}

// eslint-disable-next-line react/no-multi-comp
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
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => datum.downloads}
          voronoiBlacklist={voronoiBlacklist}
          labelComponent={<VoronoiLabel />}
        />
      }
    >
      <VictoryLabel
        text="DEC 2015"
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
        text="v34.1.3"
        textAnchor="start"
        style={font()}
        x={1560}
        y={215}
      />
      <VictoryAxis
        tickFormat={() => ""}
        style={{ axis: { stroke: importedTheme.color.brown, strokeWidth: 3 } }}
        scale={{ x: "time" }}
      />

      {minorVersions.map(v => (
        <VictoryLine
          name={`ignore-${v.version}`}
          key={v.version}
          x={() => new Date(v.date)}
          style={{
            labels: {
              fill: importedTheme.color.red,
              fontSize: 20,
              fontFamily: "Helvetica"
            },
            data: {
              stroke: importedTheme.color.red,
              strokeWidth: v.label ? 3 : 1
            }
          }}
          labels={({ index }) => (v.label && index == 0 ? v.label : null)}
          groupComponent={<g />}
          labelComponent={<VictoryLabel y={50} />}
          samples={2}
        />
      ))}
      <VictoryLine
        data={downloadsPerWeek}
        groupComponent={<g />}
        y="downloads"
        x={d => new Date(d.date)}
        style={{ data: { stroke: importedTheme.color.white, strokeWidth: 4 } }}
      />
      {/* <VictoryScatter
        data={downloadPeaks}
        y="downloads"
        x={d => new Date(d.date)}
        size={6}
        style={{
          data: { fill: "white" },
          labels: {
            fill: importedTheme.color.white,
            fontSize: 20,
            fontFamily: "Helvetica",
            textAnchor: "middle",
            verticalAnchor: "end"
          }
        }}
        labels={({ datum }) => datum.downloads}
      /> */}
      <VictoryScatter
        data={[last(downloadsPerWeek)]}
        y="downloads"
        x={d => new Date(d.date)}
        size={6}
        style={{
          data: { fill: "white" },
          labels: { verticalAnchor: "start" }
        }}
        labelComponent={
          <VictoryLabel
            dy={6}
            lineHeight={1.3}
            style={[
              {
                fill: importedTheme.color.white,
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Helvetica",
                textAnchor: "start"
              },
              {
                fill: importedTheme.color.white,
                fontSize: 15,
                fontFamily: "Helvetica",
                textAnchor: "start"
              }
            ]}
          />
        }
        labels={({ datum }) => `${datum.downloads}\nDOWNLOADS / WEEK`}
      />
    </VictoryChart>
  </HeroDemoContainer>
);

export default HeroDemo;

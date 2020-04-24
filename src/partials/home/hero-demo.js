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
import { last } from "lodash";

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

const numberWithCommas = x =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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

const LinkLabel = props => {
  /* eslint-disable react/prop-types */
  const { x, index, version } = props;
  /* eslint-disable react/prop-types*/
  if (Number(index) || !version.label) {
    return null;
  }
  const versionDate = `${version.version}-${version.date}`;
  const hash = versionDate.replace(/[^\w-]+/g, "");
  const linkStyle = font(importedTheme.color.red);
  return (
    <foreignObject x={x - 25} y={5} width={50} height={50}>
      <a
        href={`https://github.com/FormidableLabs/victory/blob/master/CHANGELOG.md#${hash}`}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        {version.label}
      </a>
    </foreignObject>
  );
};

// eslint-disable-next-line react/no-multi-comp
const VoronoiLabel = props => {
  /* eslint-disable react/prop-types */
  const { datum, x, y } = props;
  if (last(downloadsPerWeek).downloads === datum.downloads) {
    return null;
  }
  /* eslint-disable react/prop-types*/
  const labelStyles = {
    fill: importedTheme.color.white,
    fontSize: 20,
    fontFamily: "Helvetica",
    textAnchor: "middle",
    fontWeight: "bold"
  };
  return (
    <g>
      <Point x={x} y={y} size={6} style={{ fill: "white" }} />
      <rect
        x={x - 30}
        y={y - 30}
        width={60}
        height={20}
        fill={importedTheme.color.deepBrown}
      />
      <VictoryLabel {...props} style={labelStyles} dy={-20} />
    </g>
  );
};

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
          labels={({ datum }) => numberWithCommas(datum.downloads)}
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
            data: {
              stroke: importedTheme.color.red,
              strokeWidth: v.label ? 3 : 1
            }
          }}
          labels
          labelComponent={<LinkLabel version={v} />}
          groupComponent={<g />}
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
      <VictoryScatter
        name="ignore-scatter"
        data={[last(downloadsPerWeek)]}
        y="downloads"
        x={d => new Date(d.date)}
        size={6}
        style={{
          data: { fill: importedTheme.color.white },
          labels: { verticalAnchor: "start" }
        }}
        labelComponent={
          <VictoryLabel
            dy={7}
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
        labels={({ datum }) =>
          `${numberWithCommas(datum.downloads)}\nDOWNLOADS / WEEK`
        }
      />
    </VictoryChart>
  </HeroDemoContainer>
);

export default HeroDemo;

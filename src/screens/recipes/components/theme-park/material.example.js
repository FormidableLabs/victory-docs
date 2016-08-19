/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, DemoVictoryComponent, mountNode, assign */

/*
  "material" theme
  Try changing the theme. You could start with `colors` or `fontSize`.
*/

// Colors
const deepOrange600 = "#F4511E";
const yellow200 = "#FFF59D";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900
];
const blueGrey50 = "#ECEFF1";
const blueGrey300 = "#90A4AE";
const blueGrey700 = "#455A64";
const grey900 = "#212121";

// Typography
const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 16;

// Layout
const padding = 8;
const baseProps = {
  width: 350,
  height: 350
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700
};

// Strokes
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
const theme = {
  area: assign({
    style: {
      data: {
        fill: grey900
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  axis: assign({
    style: {
      axis: {
        fill: "none",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: assign({}, baseLabelStyles, {
        padding,
        stroke: "transparent"
      }),
      grid: {
        fill: "none",
        stroke: blueGrey50,
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin
      },
      ticks: {
        fill: "none",
        padding,
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: assign({}, baseLabelStyles, {
        fill: blueGrey700,
        stroke: "transparent"
      })
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        fill: blueGrey700,
        padding,
        stroke: "transparent",
        strokeWidth: 0,
        width: 5
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  candlestick: assign({
    style: {
      data: {
        stroke: blueGrey700
      },
      labels: baseLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: blueGrey700
    }
  }, baseProps),
  chart: baseProps,
  errorbar: assign({
    style: {
      data: {
        fill: "none",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: assign({}, baseLabelStyles, {
        stroke: "transparent",
        strokeWidth: 0,
        textAnchor: "start"
      })
    }
  }, baseProps),
  group: assign({
    colorScale: colors
  }, baseProps),
  line: assign({
    style: {
      data: {
        fill: "none",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: assign({}, baseLabelStyles, {
        stroke: "transparent",
        strokeWidth: 0,
        textAnchor: "start"
      })
    }
  }, baseProps),
  pie: assign({
    colorScale: colors,
    style: {
      data: {
        padding,
        stroke: blueGrey50,
        strokeWidth: 1
      },
      labels: assign({}, baseLabelStyles, {
        padding: 200,
        stroke: "transparent",
        strokeWidth: 0,
        textAnchor: "middle"
      })
    }
  }, baseProps),
  scatter: assign({
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: assign({}, baseLabelStyles, {
        stroke: "transparent",
        textAnchor: "middle"
      })
    }
  }, baseProps),
  stack: assign({
    colorScale: colors
  }, baseProps)
};

ReactDOM.render(<DemoVictoryComponent theme={theme}/>, mountNode);

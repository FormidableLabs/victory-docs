/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, DemoVictoryComponent, mountNode, VictoryTheme */
/* eslint-disable no-constant-condition */

/*
  "default" theme
  The default theme is called grayscale. Try witing your own!
  Change the if statement below to true and see how the styles change.
*/

let theme = VictoryTheme.grayscale;


if (false) { // won't run unless you change this to true!

  const accentColor = "#e82517";
  theme = {
    pie: {
      innerRadius: 50,
      style: {
        data: {
          stroke: accentColor
        }
      }
    },
    axis: {
      style: {
        axis: { stroke: accentColor },
        grid: { stroke: "none" },
        ticks: { padding: 10 }
      }
    },
    bar: {
      style: {
        data: {
          width: 15,
          stroke: accentColor
        }
      }
    },
    scatter: {
      symbol: "square",
      size: 5,
      style: {
        data: {
          stroke: accentColor,
          fill: "none"
        }
      }
    }
  };
}

ReactDOM.render(<DemoVictoryComponent theme={theme}/>, mountNode);

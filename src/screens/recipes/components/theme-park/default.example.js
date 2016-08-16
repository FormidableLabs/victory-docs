/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, DemoVictoryComponent, mountNode */
/* eslint-disable no-constant-condition */

/*
  "default" theme
  The default theme is just an empty object, {}.
  Change the if statement below to true and see how the styles change.
*/

let theme = {};

if (false) { // won't run unless you change this to true!
  theme = {
    pie: {
      props: {},
      style: {
        data: {
          stroke: "black",
          strokeWidth: 3
        },
        labels: {
          padding: 100,
          fontFamily: "monospace"
        }
      }
    }
  };
}

ReactDOM.render(<DemoVictoryComponent theme={theme}/>, mountNode);

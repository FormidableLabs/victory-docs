const theme = {
  color: {
    paleRed: "#ff9988",
    red: "#ff684f",
    darkRed: "#ad1b11",
    brown: "#bc5240",
    darkBrown: "#4c2e29",

    white: "#ffffff",
    gray: "#999999",
    nearBlack: "#242121",
    black: "#1f1f1f",

    codeMirror: {
      bgDim: "#ebe7e4",
      bg: "#fffefc",
      bgFocused: "#fffefc",
      bgSelected: "#b3d4fc",
      comment: "#586e75",
      punctuation: "#666",
      number: "#905",
      selector: "#007a71",
      operator: "#8a633e",
      keyword: "#0671bd",
      function: "#cc2345",
      variable: "#e90"
    }
  },

  font: {
    primary: "Helvetica, sans-serif",
    monospace: "Monaco, Courier, monospace"
  },

  spacing: {
    sm: "1.35rem",
    md: "2.5rem",
    lg: "4.5rem",
    xlg: "8rem"
  },

  mediaQuery: {
    sm: "only screen and (min-width: 650px)",
    md: "only screen and (min-width: 960px)",
    lg: "only screen and (min-width: 1200px)"
  }
};

export default theme;

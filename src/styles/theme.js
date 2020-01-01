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
      function: "#cc2345",
      keyword: "#0671bd",
      number: "#905",
      operator: "#8a633e",
      punctuation: "#666",
      selector: "#007a71",
      variable: "#e90"
    }
  },

  font: {
    primary: "Helvetica, sans-serif",
    monospace: "Monaco, Courier, monospace"
  },

  layout: {
    maxWidth: "1100px",
    pageGutterSide: "1.35rem",
    pageGutterTop: "1.35rem",
    pageGutterBottom: "4.5rem"
  },

  mediaQuery: {
    sm: "only screen and (min-width: 650px)",
    md: "only screen and (min-width: 960px)",
    lg: "only screen and (min-width: 1200px)"
  },

  spacing: {
    xs: "0.4rem",
    sm: "1.35rem",
    md: "2.5rem",
    lg: "4.5rem",
    xlg: "8rem"
  }
};

export default theme;

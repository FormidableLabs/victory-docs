const theme = {
  color: {
    paleRed: "#ff9988",
    red: "#ff684f",
    darkRed: "#ad1b11",
    brown: "#bc5240",
    darkBrown: "#4c2e29",

    white: "#ffffff",
    nearWhite: "#f2f2f2",
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
    footerMaxWidth: "900px",

    headerHeight: "64px",
    footerHeight: "432px",
    stripesWidth: "26px",
    sidebarWidth: "212px",

    pageGutterLeft: "1.35rem",
    pageGutterRight: "2.5rem",
    pageGutterTop: "1.35rem",
    pageGutterBottom: "4.5rem",

    // layout at md width and larger; use in conjunction with media query
    md: {
      footerHeight: "256px",

      pageGutterLeft: "4rem",
      pageGutterRight: "6rem",
      pageGutterTop: "1.35rem",
      pageGutterBottom: "4.5rem"
    }
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
    xl: "8rem"
  }
};

export default theme;

const theme = {
  color: {
    paleRed: "#ffad9f",
    red: "#ff684f",
    darkRed: "#ad1b11",
    brown: "#bc5240",
    deepBrown: "#4a1b13",
    otherBrown: "#793d33",
    accentBrown: "#531f17",
    darkBrown: "#4c2e29",

    white: "#ffffff",
    nearWhite: "#f2f2f2",
    lightGray: "#f0f0f0",
    gray: "#999999",
    darkGray: "#DDD",
    darkestGray: "#4d4d4d",
    nearBlack: "#242121",
    black: "#1f1f1f",

    homeCharts: ["#AD343E", "#48639C", "#9984D4", "#AA4465 ", "#893168"],

    inlineCodeBorder: "#d3d3d3",

    codeMirror: {
      bgDim: "#FFF5EF",
      bg: "#ffcec6",
      bgFocused: "#ffcec6",
      bgSelected: "#ffcec6",
      fontColor: "#793D33",
      def: "#242020",
      comment: "#4B5562",
      function: "#853B2E",
      keyword: "#205B59",
      number: "##AD0000",
      operator: "#684B27",
      attribute: "##99180F",
      punctuation: "#545454",
      selector: "#AD0000",
      variable: "#853B2E",
      tag: "#AD0000"
    }
  },

  font: {
    primary: "Helvetica, sans-serif",
    secondary: "Castledown-Bold, sans-serif",
    monospace: "Monaco, Courier, monospace",
    bold: "Helvetica-Bold, sans-serif"
  },
  typography: {
    lineHeight: {
      sidebarHeading: "2.3rem",
      sidebarItem: "2.8rem"
    }
  },

  layout: {
    maxWidth: "121rem",
    footerMaxWidth: "90rem",

    headerHeight: "6.4rem",
    footerHeight: "43.2rem",
    stripesWidth: "2.8rem",
    sidebarWidth: "26rem",

    pageGutterLeft: "2rem",
    pageGutterRight: "3rem",
    pageGutterTop: "2rem",
    pageGutterBottom: "5.5rem",

    // layout at md width and larger; use in conjunction with media query
    md: {
      footerHeight: "25.6rem",

      pageGutterLeft: "6rem",
      pageGutterRight: "7.5rem",
      pageGutterTop: "4rem",
      pageGutterBottom: "4.5rem"
    }
  },

  mediaQuery: {
    sm: "only screen and (min-width: 650px)",
    md: "only screen and (min-width: 960px)",
    lg: "only screen and (min-width: 1200px)"
  },

  spacing: {
    xs: "0.6rem",
    sm: "1.5rem",
    md: "2.75rem",
    lg: "4.75rem",
    xl: "8.2rem"
  }
};

export default theme;

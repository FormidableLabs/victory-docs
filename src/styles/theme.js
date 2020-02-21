const theme = {
  color: {
    // reds from lightest to darkest
    roseBud: "#ffad9f",
    wildWatermelon: "#ff684f",
    grenadier: "#D62000",
    tabasco: "#ad1b11",
    rouge: "#A34838",
    // browns from lightest to darkest
    crownOfThorns: "#793d33",
    cabSav: "#4c2e29",
    brownDerby: "#531f17",
    brownPod: "#4a1b13", // only used on homepage hero
    // grays from lightest to darkest
    white: "#ffffff",
    nearWhite: "#f2f2f2",
    lightGray: "#E6E6E6",
    gray: "#545454",
    nearBlack: "#242121",
    black: "#1f1f1f",

    homeCharts: ["#AD343E", "#48639C", "#9984D4", "#AA4465", "#893168"],

    inlineCodeBorder: "#d3d3d3",

    codeMirror: {
      bgDim: "#fff1ef",
      bg: "##FFEBE5",
      bgFocused: "##FFEBE5",
      bgSelected: "##FFEBE5",
      fontColor: "#793D33",
      def: "#242020",
      comment: "#4B5562",
      function: "#893C2F",
      keyword: "#215E57",
      number: "#AD0000",
      operator: "#6B4D29",
      attribute: "#A21A10",
      punctuation: "#545454",
      selector: "#AD0000",
      variable: "#893C2F",
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

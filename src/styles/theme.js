const theme = {
  color: {
    roseBud: "#ffad9f",
    wildWatermelon: "#ff684f", // passes a11y with #D62000 instead of #ff684f",
    grenadier: "#D62000", // TODO rename once colors are sorted
    tabasco: "#ad1b11", // #A21A10", // passes a11y with #A21A10 instead of #ad1b11",
    rouge: "#A34838", // passes a11y in nav with  #A34838 instead of #bc5240",
    brownPod: "#4a1b13", // only used on homepage hero
    crownOfThorns: "#793d33",
    brownDerby: "#531f17",
    cabSav: "#4c2e29",

    white: "#ffffff",
    nearWhite: "#f2f2f2",
    lightGray: "#f0f0f0",
    gray: "#545454", // a11y update from #999999",
    darkGray: "#E6E6E6", // passes a11y sidenav with #E6E6E6 instead of #DDD",
    darkestGray: "#4d4d4d",
    nearBlack: "#242121",
    black: "#1f1f1f",

    homeCharts: ["#AD343E", "#48639C", "#9984D4", "#AA4465 ", "#893168"],

    inlineCodeBorder: "#d3d3d3",

    // bgDim: "#FFF5EF",
    // bg: "#ffcec6",
    // bgFocused: "#ffcec6",
    // bgSelected: "#ffcec6",
    // fontColor: "#793D33",
    // def: "#242020",
    // comment: "#4B5562",
    // function: "#853B2E",
    // keyword: "#205B59",
    // number: "##AD0000",
    // operator: "#684B27",
    // attribute: "##99180F",
    // punctuation: "#545454",
    // selector: "#AD0000",
    // variable: "#853B2E",
    // tag: "#AD0000"

    codeMirror: {
      bgDim: "#fff1ef", // #FFF5F5
      bg: "##FFEBE5",
      bgFocused: "##FFEBE5",
      bgSelected: "##FFEBE5",

      fontColor: "#793D33", // passes
      def: "#242020", // passes
      comment: "#4B5562", // passes with #FFF5F5 bg
      function: "#893C2F", // passes with #893C2F instead of #C25E4D",
      keyword: "#215E57", // passes with #215E57 instead of #40bcae",
      number: "#AD0000", // passes with #AD0000 instead of #FF7171",
      operator: "#6B4D29", // passes with #6B4D29 instead of #9a6e3a",
      attribute: "#A21A10", // passes with #A21A10 instead of #ad1b11",
      punctuation: "#545454", // passes with #545454 instead of #999",
      selector: "#AD0000", // passes with #AD0000 instead of #FF7171",
      variable: "#893C2F", // passes with  #893C2F #C25E4D",
      tag: "#AD0000" // passes with #AD0000 instead of #FF7171",

      // bgDim: "#FFF5EF",
      // bg: "#ffcec6",
      // bgFocused: "#ffcec6",
      // bgSelected: "#ffcec6",
      // fontColor: "#793D33",
      // def: "#242020",
      // comment: "#4B5562",
      // function: "#853B2E",
      // keyword: "#205B59",
      // number: "##AD0000",
      // operator: "#684B27",
      // attribute: "##99180F",
      // punctuation: "#545454",
      // selector: "#AD0000",
      // variable: "#853B2E",
      // tag: "#AD0000"
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

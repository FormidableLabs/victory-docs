/* eslint-disable filenames/match-regex */
/* eslint-disable quotes*/
const content = {
  hero: {
    background: require("../../../static/hero-background.svg"),
    badge: require("../../../static/hero-badge.svg"),
    cornerText: "ANOTHER OSS \n PROJECT BY",
    cornerIcon: require("../../../static/logos/logo-formidable-icon.svg"),
    description:
      "React.js components for modular charting and data visualization.",
    code: "npm install victory",
    link: {
      text: "DOCUMENTATION",
      location: "docs"
    },
    linksArray: [
      {
        text: "ABOUT",
        location: "about"
      },
      {
        text: "DOCS",
        location: "docs"
      },
      {
        text: "GALLERY",
        location: "gallery"
      },
      {
        text: "SUPPORT",
        location: "https://spectrum.chat/victory"
      },
      {
        text: "GITHUB",
        location: "https://github.com/FormidableLabs/victory"
      },
      {
        text: "FAQS",
        location: "docs/faq"
      }
    ]
  },
  features: [
    {
      title: "Robust",
      description:
        "Area charts. Scatter plots. Voronoi polygons. Easy-to-use components for complex charting.",
      icon: require("../../../static/feature-robust.svg")
    },
    {
      title: "Flexible",
      description:
        "Fully contained, reusable data visualization elements are responsible for their own styles and behaviors.",
      icon: require("../../../static/feature-flexible.svg")
    },
    {
      title: "Native",
      description:
        "Extend the Victory experience on Android and iOS platforms with an identical API.",
      code: "npm install victory-native",
      icon: require("../../../static/feature-native.png")
    }
  ],
  getStarted: {
    description:
      "Victory is an opinionated, but fully overridable, ecosystem of composable React components. Check out the docs to see how you can get started building interactive data visualizations.",
    link: {
      text: "DOCUMENTATION",
      location: "docs"
    }
  },
  oss: {
    ossArray: [
      {
        title: "Spectacle",
        description:
          "A React.js based library for creating sleek presentations using JSX syntax with the ability to live demo your code!",
        logo: require("../../../static/logos/logo-spectacle.svg"),
        link: "https://formidable.com/open-source/spectacle",
        hasOwnLogo: true
      },
      {
        title: "Urql",
        description:
          "Universal React Query Library is a blazing-fast GraphQL client, exposed as a set of ReactJS components.",
        logo: require("../../../static/logos/logo-urql.svg"),
        link: "https://formidable.com/open-source/urql",
        hasOwnLogo: true
      },
      {
        title: "Renature",
        description:
          "A physics-based animation library for React inspired by the natural world.",
        logo: require("../../../static/logos/logo-renature.svg"),
        link: "https://formidable.com/open-source/renature",
        hasOwnLogo: true
      },
      {
        title: "Runpkg",
        description:
          "Explore, learn about, and perform static analysis on npm packages in the browser.          ",
        logo: require("../../../static/logos/logo-runpkg.png"),
        link: "https://runpkg.com",
        hasOwnLogo: true
      }
    ],
    link: {
      text: "VIEW ALL",
      location: "https://formidable.com/open-source"
    }
  }
};

export default content;

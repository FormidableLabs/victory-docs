const config = require("./data/site-config");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

/* eslint-disable camelcase */
module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/logos/favicon.ico`,
      copyright: config.copyright
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-import")(),
          require("postcss-url")({ url: "inline" }),
          require("postcss-cssnext")(),
          // Add plugins here:
          require("postcss-inline-svg")(),
          require("postcss-browser-reporter"),
          require("postcss-reporter")
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false
            }
          },
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-playground",
            options: {
              customCodeLang: "playground"
            }
          },
          "gatsby-remark-prismjs"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-catch-links"
  ]
};
/* eslint-enable camelcase */

const config = require("./data/site-config");
const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");
const postcssInlineSvg = require("postcss-inline-svg");
const postcssCustomMedia = require("postcss-custom-media");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

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
      author: config.userName,
      copyright: config.copyright
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-postcss-sass",
      options: {
        name: "styles",
        path: `${__dirname}/src/styles/**/*`,
        postCssPlugins: [
          postcssImport(),
          postcssUrl({url: "inline"}),
          postcssInlineSvg(),
          postcssCustomMedia()
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
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-twitter",
    "gatsby-plugin-offline"
  ]
};

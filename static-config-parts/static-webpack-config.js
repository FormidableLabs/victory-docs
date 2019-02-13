// SURGEON GENERAL'S WARNING: THIS IS NOT A WEBPACK CONFIG, THIS IS A FUNCTION
// THAT ENHANCES THE BASE REACT-STATIC WEBPACK CONFIG SO WE CAN USE POSTCSS

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const staticWebpackConfig = (config, { defaultLoaders, stage }) => {
  const preciousDarlingPostCSSPlugins = [
    {
      test: /\.css$/,
      use: [
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            minimize: stage !== "dev",
            sourceMap: stage === "dev"
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: false,
            ident: "postcss",
            plugins: [
              require("postcss-flexbugs-fixes"),
              require("postcss-import"),
              require("postcss-browser-reporter"),
              require("postcss-reporter"),
              require("postcss-preset-env"),
              require('postcss-focus'),
              require("postcss-custom-media")({ stage: 0 }),
              require("postcss-url")({ url: "inline", encodeType: "base64" }),
              autoprefixer({
                browsers: [
                  ">1%",
                  "last 4 versions",
                  "Firefox ESR",
                  "not ie < 9" // React doesn't support IE8 anyway
                ],
                flexbox: "no-2009"
              })
            ]
          }
        }
      ]
    },
    {
      test: /\.(svg)(\?.*)?$/,
      loader: "svg-inline-loader"
    },
    defaultLoaders.cssLoader,
    defaultLoaders.jsLoader,
    defaultLoaders.fileLoader
  ];

  let loaders = [];

  if (stage === "dev") {
    loaders = [{ loader: "style-loader" }, { loader: "css-loader" }];
  } else {
    loaders = [
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          minimize: stage === "prod",
          sourceMap: false
        }
      }
    ];

    if (stage !== "node") {
      loaders = ExtractTextPlugin.extract({
        fallback: {
          loader: "style-loader",
          options: {
            sourceMap: false,
            hmr: false
          }
        },
        use: preciousDarlingPostCSSPlugins[0].use
      });
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: loaders
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader
        ]
      }
    ];

    return config;
  }
};

module.exports = staticWebpackConfig;

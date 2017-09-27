const path = require("path");
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }

  // Do not transform SVG into data-uris
  config.loader("url-loader", {
    test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: "url",
    query: {
      limit: 10000,
      name: "static/[name].[hash:8].[ext]"
    }
  });

  // Instead load <svg> elements directly into the DOM
  config.loader("raw-loader", {
    test: /\.(svg)(\?.*)?$/,
    loader: "raw"
  });
};

// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    // manually overriding slug in frontmatter
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }

    // create slug
    if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: "slug", value: slug });

    // Separate /docs from /guides for <Sidebar />
    createNodeField({ node, name: "type", value: parsedFilePath.dir });
  }
};

// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const docsTemplate = path.resolve("src/templates/docs.js");

    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  id
                  category
                  display
                }
                fields {
                  slug
                  type
                }
              }
            }
          }
        }
      `
      ).then((result) => {
        if (result.errors) {
          /* eslint no-console: "off"*/
          console.log(result.errors);
          reject(result.errors);
        }

        // const categorySet = new Set();
        result.data.allMarkdownRemark.edges.forEach((edge) => {
          // if (edge.node.frontmatter.category) {
          //   categorySet.add(edge.node.frontmatter.category);
          // }

          console.log('slug', edge.node.fields.slug);

          createPage({
            path: edge.node.fields.slug, // required
            component: docsTemplate,
            context: {
              slug: edge.node.fields.slug
            },
            layout: "with-sidebar"
          });
        });

        // const categoryList = Array.from(categorySet);
        // categoryList.forEach(category => {
        //   createPage({
        //     path: `/categories/${_.kebabCase(category)}/`,
        //     component: categoryPage,
        //     context: {
        //       category
        //     }
        //   });
        // });
      })
    );
  });
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/gallery/)) {
    page.matchPath = "/gallery/:path";

    // Update the page.
    createPage(page);
  }

  if (page.path.match("/guides/themes/")) {
    page.layout = "with-sidebar";

    // Update /guides/themes/ to use with-sidebar layout
    createPage(page);
  }
};

const path = require("path");
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");

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
    
    // Separate /docs from /guides 
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
    const guidesTemplate = path.resolve("src/templates/guides.js");

    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  id
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
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off"*/
          console.log(result.errors);
          reject(result.errors);
        }

        const categorySet = new Set();
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          if (edge.node.fields.type === 'docs') {
            // If parent directory is '/docs' return docsTemplate
            console.log('CREATE PAGE FOR DOCS');
            createPage({
              path: edge.node.fields.slug, // required
              component: docsTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }

          else if (edge.node.fields.type === 'guides') {
            console.log('CREATE PAGE FOR GUIDES');
            // If parent directory is '/guides' return guidesTemplate
            createPage({
              path: edge.node.fields.slug, // required
              component: guidesTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
          
          else {
            console.log('SOMETHING WENT AWRY', edge.node.fields.slug);
            createPage({
              path: edge.node.fields.slug, // required
              component: docsTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
            }
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

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
};

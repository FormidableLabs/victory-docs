const fs = require("fs");
const klaw = require("klaw");
const path = require("path");
const html = require("remark-html");
const frontmatter = require("remark-frontmatter");
const yaml = require("js-yaml");
const remark = require("remark");
const _ = require("lodash");
const select = require("unist-util-select");
const visit = require("unist-util-visit");
const remarkToc = require("remark-toc");
const slug = require("remark-slug");
const headings = require("remark-autolink-headings");
const toString = require("mdast-util-to-string");
const slugs = require("github-slugger")();
// at a certain point we have to ask if custom dependency injection tooling is designed to provide a good developer
// experience or if it's an interface-obscuring cornice that contributes more to the wall than the garden. Our
// expectation should be that we can use any remark plugins which will generally include gatsby-remark plugins.
const remarkPrism = require("gatsby-remark-prismjs");

function codeHighlightTransformer() {
  return node => remarkPrism({ markdownAST: node });
}

function slugTransformer(ast) {
  slugs.reset();

  function visitor(node) {
    const data = node.data || (node.data = {});
    const props = data.hProperties || (data.hProperties = {});
    if (node.depth) {
      const nodeClass = props.className
        ? `${props.className} doc-hash-link`
        : "doc-hash-link";
      // Would love to tell you this isn't kinda bullshit, but it is. It adds GH style links to our md based on existing
      // behaviors by converting mdast heading nodes to html so we can inject the link and svg directly rather than do
      // something like add a marker value to the mdast and let the renderer handle it, in part because our "renderer"
      // is __dangerouslySetHTML on a div. Given more time we could change things, but that's true of everything,
      // even time itself.
      const elInnerHTML = ` <h${node.depth}>
          <a class="${
            node.depth > 1 ? "Anchor" : "hidden-anchor"
          }" aria-hidden="true" id="${node.data.id}" href="#${node.data.id}">
          <svg viewBox="0 0 16 16" version="1.1" width="16" height="16"
               aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
          </svg>
        </a> ${node.children[0].value}
</h${node.depth}>        
`;
      node.type = `html`;
      node.value = elInnerHTML;
      props.className = nodeClass;
      data.className = nodeClass;
    }
  }
  visit(ast, "heading", visitor);
}

function slugWithLink() {
  return slugTransformer;
}

const subHeadingRangeDefaults = {
  start: 1,
  end: 3
};

function setYamlToFile(subHeadingRange = subHeadingRangeDefaults) {
  function transformer(ast, file) {
    const yamlObj = select(ast, "yaml");
    let obj;
    if (yamlObj.length > 0) {
      const { children } = ast;

      obj = yaml.safeLoad(yamlObj[0].value);

      file.data = obj;

      // When you need them, you really, really need them, but when you don't need them...
      Object.defineProperty(file, "raw", {
        value: file.contents,
        enumerable: true
      });

      // Not needed yet, but it should be as future changes would mostly be better served by working
      // off the canonical AST rather than brittle string-based parsing:
      // Object.defineProperty(file, "ast", {
      //   value: ast,
      //   enumerable: true
      // });

      // yeah, yeah, should be a single pass reduce, but the runtime cost is trivial.
      // The real concern is that a flat array isn't optimal for describing this relationship, but
      // it is at least *semi-defensible* to leave that as an exercise for the view layer or to handle in a regular
      // transform -- tbh, this should also be in a regular transform via leveraging the children of the ast key
      file.data.subHeadings = children
        .filter(
          c =>
            c.type === "heading" &&
            c.depth >= subHeadingRange.start &&
            c.depth <= subHeadingRange.end
        )
        .map(c => ({
          type: c.type,
          value: c.children[0].value,
          depth: c.depth,
          slug: _.kebabCase(c.children[0].value).toLowerCase()
        }));
    }
  }

  return transformer;
}

function playground(options = { customCodeLang: "playground" }) {
  // we're just mutating the ast here, fyi
  function transformer(ast) {
    visit(ast, `code`, node => {
      const escape = html => {
        return html
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
      };

      const { customCodeLang } = options;

      if (node.lang === customCodeLang) {
        // Changing `node.type` to `html` means the code needs to be escaped, else it’ll try to
        // transform to valid html, e.g. `<VictoryBar />` to `<victorybar></victorybar>`
        node.type = `html`;
        node.value = `<pre class="pre"><code class="language-${customCodeLang}">${escape(
          node.value
        )}</code></pre>`;
      }
      if (node.lang === `${customCodeLang}_norender`) {
        node.type = `html`;
        node.value = `<pre class="pre"><code class="language-${customCodeLang}_norender">${escape(
          node.value
        )}</code></pre>`;
      }
    });
  }
  return transformer;
}

// The pattern of renderer-agnosticism that worked well for a less complex project is essentially a fiction here,
// but if there is sufficient will to do so, we could slough off the forced legacy of managing view-rendering concerns
// in a data ingestion layer that has absolutely no business knowing this much about the specifics of it.

const baseConfig = {
  renderer: remark()
    .use(frontmatter, ["yaml", "toml"])
    .use(setYamlToFile)
    .use(html)
    .use(codeHighlightTransformer)
    .use(slug)
    .use(slugWithLink)
    .use(playground),
  // converting to an originally grey-matter idiom for all our existing transforms and future interop -- it's not much of a stretch
  // for remark, but who knows what the future (and the past) hold.
  outputHarmonizer: result => ({
    content: result.contents,
    data: result.data,
    raw: result.raw
  })
};

const getMdFiles = async (
  mdPath,
  items,
  mutations = [],
  // terrible take, linter
  // eslint-disable-next-line no-shadow
  sort = items => items,
  config = baseConfig
) =>
  new Promise(resolve => {
    if (fs.existsSync(mdPath)) {
      klaw(mdPath)
        .on("data", item => {
          if (path.extname(item.path) === ".md") {
            const data = fs.readFileSync(item.path, "utf8");

            const { renderer, outputHarmonizer } = config;
            renderer.process(data, (err, result) => {
              if (err) {
                throw err;
              }

              const mdData = outputHarmonizer(result);

              mutations.forEach(m => {
                m(mdData, item.path);
              });

              items.push(mdData);
            });
          }
        })
        .on("error", e => {
          throw e;
        })
        .on("end", () => {
          resolve(sort(items));
        });
    } else {
      resolve(items);
    }
  });

module.exports = getMdFiles;

const _ = require("lodash");
const marked = require("marked");

// Format a string as an anchor tag ("Foo bar" -> "foo-bar")
const toAnchor = (content) => content.toLowerCase().replace(/[^\w]+/g, "-");

const parseToc = (mdContent) => {
  const toc = [];

  marked(mdContent, {
    renderer: _.extend(new marked.Renderer(), {
      heading: (content, level) => {
        toc.push({ content, level, anchor: toAnchor(content) });
      }
    })
  });

  return toc;
};

module.exports = {
  toAnchor,
  parseToc
};

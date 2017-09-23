const Promise = require("bluebird");
const visit = require("unist-util-visit");

module.exports = ({ markdownAST }, { customCodeLang = "playground" } = {}) => {
  visit(markdownAST, `yaml`, node => {
    console.log('****** YAML');
    console.log('scope: ', node.value);
  });
  visit(markdownAST, `code`, node => {
    console.log('NODE', node);
    if (node.lang === customCodeLang) {
      console.log('****** PLAYGROUND');
      const escape = (html) => {
        return html
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
      };
      // The `gatsbyjs-remark-prismjs` plugin changes `node.type` from `code` to `html` 
      // (since it’s wrapping it in a new ``<div>`), unfortunately that is also transforming the 
      // code block’s content to what it thinks is valid HTML, 
      // e.g. `<VictoryBar />` to `<victorybar></victorybar>` :( :(
      node.type = `html`
      node.value = `<pre><code class="language-playground"><span class="js-playground">${escape(node.value)}</span></code></pre>`;
      console.log(node.value);
    }
    if (node.lang === `${customCodeLang}_norender`) {
      console.log('****** PLAYGROUND_NORENDER');
      node.type = `html`
      node.value = `<pre><code class="language-playground_norender"><span class="js-playground">${escape(node.value)}</span></code></pre>`;
      console.log(node.value);
    }
  });
};
const visit = require("unist-util-visit");

module.exports = ({ markdownAST }, { customCodeLang = "playground" } = {}) => {
  visit(markdownAST, `code`, node => {
    const escape = (html) => {
      return html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    };
    if (node.lang === customCodeLang) {
      // Changing `node.type` to `html` means the code needs to be escaped, else it’ll try to
      // transform to valid html, e.g. `<VictoryBar />` to `<victorybar></victorybar>`
      node.type = `html`
      node.value = `<pre class="pre"><code class="language-${customCodeLang}">${escape(node.value)}</code></pre>`;
    }
    if (node.lang === `${customCodeLang}_norender`) {
      node.type = `html`
      node.value = `<pre class="pre"><code class="language-${customCodeLang}_norender">${escape(node.value)}</code></pre>`;
    }
  });
};

const Promise = require("bluebird");
const visit = require("unist-util-visit");

module.exports = ({ markdownAST }, { customCodeLang = "playground" } = {}) => {
  visit(markdownAST, `yaml`, node => {
    console.log('****** YAML');
    console.log(node.value);
  });
  visit(markdownAST, `code`, node => {
    if (node.lang === customCodeLang) {
      console.log('****** PLAYGROUND');
      // The `gatsbyjs-remark-prismjs` plugin changes `node.type` from `code` to `html` 
      // (since it’s wrapping it in a new ``<div>`), unfortunately that is also transforming the 
      // code block’s content to what it thinks is valid HTML, 
      // e.g. `<VictoryBar />` to `<victorybar></victorybar>` :( :(
      node.value = `
          <div class="js-${customCodeLang}">
            ${node.value}
          </div>
      `;
    }
    if (node.lang === `${customCodeLang}_norender`) {
      console.log('****** PLAYGROUND_NORENDER');
      node.value = `
        <div class="js-${customCodeLang}_norender">
          ${node.value}
        </div>
      `;
    }
  });
};
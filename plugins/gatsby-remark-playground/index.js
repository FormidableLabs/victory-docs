const Promise = require("bluebird");
const visit = require("unist-util-visit");

module.exports = ({markdownAST}, { customCodeLang = "playground" } = {}) => {  
  visit(markdownAST, `code`, node => {
    if (node.lang === "playground") {
      console.log("********* PLAYGROUND");
      console.log(node.type, node.lang);
      console.log(node.value);
    }
    if (node.lang === "playground_norender") {
      console.log("******** PLAYGROUND NORENDER");
      console.log(node.type, node.lang);
      console.log(node.value);
    }
  });
  return markdownAST;
}
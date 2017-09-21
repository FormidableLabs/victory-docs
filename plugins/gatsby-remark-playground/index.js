const Promise = require("bluebird");
const visit = require("unist-util-visit");

module.exports = ({markdownAST}) => {  
  visit(markdownAST, `code`, node => {
    if (node.lang === 'playground') {
      console.log('PLAYGROUND') 
      console.log(node);
    }
    if (node.lang === 'playground_norender') {
      console.log('PLAYGROUND NORENDER') 
      console.log(node);
    }
  });
  return markdownAST;
}
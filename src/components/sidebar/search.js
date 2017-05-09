import _ from "lodash";

/* Helpers for creating the searchable array */
const createSearchIndex = (node, parents) => {
  const getText = (n) => n.text || n.content || "";

  if (_.isArray(node)) {
    return node.reduce((prev, current) => {
      return prev.concat(createSearchIndex(current, parents));
    }, []);
  }

  const currentLineage = (parents || []).concat([node]);
  const searchText = currentLineage.map((n) => getText(n)).join(" ").trim();
  const ids = currentLineage.map((n) => n.id);

  const nodes = [{ searchText, ids }];
  let children = [];

  if (node.type === "item") {
    // Special logic for indexing toc (eg "props"),
    // which is stored as an array, not a tree.

    // h1's are assumed to be duplicates of their parent
    const minHeadingLevel = 2;
    const levels = [];

    children = node.children
      .filter((child) => child.level >= minHeadingLevel)
      .map((child) => {
        levels[child.level - minHeadingLevel] = child;
        levels.fill(null, child.level - (minHeadingLevel - 1));
        const relevantNodes = levels.slice(0, child.level).filter((n) => n);

        const childText = relevantNodes
          .map((n) => getText(n))
          .join(" ")
          .trim();
        const childSearchText = `${searchText} ${childText}`;
        const childIds = relevantNodes.map((n) => n.id);

        return {
          ids: childIds,
          searchText: childSearchText
        };
      });
  } else if (node.children) {
    children = createSearchIndex(node.children, currentLineage);
  }

  return nodes.concat(children);
};

const getMatching = (text, arr) => {
  const term = text.toLowerCase();

  return arr.filter((n) => {
    return n.searchText.toLowerCase().includes(term);
  });
};

const isInMatching = (text, arr) => {
  return _.findIndex(arr, (n) => {
    return n.searchText.includes(text);
  }) !== -1;
};

export default {
  createSearchIndex,
  getMatching,
  isInMatching
};

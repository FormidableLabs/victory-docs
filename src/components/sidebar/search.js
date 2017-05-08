import _ from "lodash";

/* Helpers for creating the searchable array */
const createSearchableArray = (node, ancestors) => {
  if (_.isArray(node)) {
    return node.reduce((prev, current) => {
      return prev.concat(createSearchableArray(current, ancestors));
    }, []);
  }

  ancestors = ancestors || "";
  const searchPart = node.text || node.content || "";
  const searchText = `${ancestors} ${searchPart}`.trim();

  const nodes = [{ searchText, searchPart }];
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
        const childSearchPart = child.content;

        levels[child.level - minHeadingLevel] = childSearchPart;
        levels.fill(null, child.level - (minHeadingLevel - 1));

        const childAncestors = levels.slice(0, child.level).join(" ").trim();
        const childSearchText = `${searchText} ${childAncestors}`;

        return {
          searchPart: childSearchPart,
          searchText: childSearchText
        };
      });
  } else if (node.children) {
    children = createSearchableArray(node.children, searchText);
  }

  return nodes.concat(children);
};

export default {
  createSearchableArray
};

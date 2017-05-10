import _ from "lodash";

// h1's are assumed to be duplicates of their parent
const MIN_TOC_HEADING_LEVEL = 2;

const getText = (node) => node.text || node.content || "";

const createSearchIndexForItem = (itemNode, parentText, parentIds) => {
  // Contains state!
  const levels = [];

  return itemNode.children
    .filter((child) => child.level >= MIN_TOC_HEADING_LEVEL)
    .map((child) => {
      levels[child.level - MIN_TOC_HEADING_LEVEL] = child;
      levels.fill(null, child.level - (MIN_TOC_HEADING_LEVEL - 1));
      const relevantNodes = levels.slice(0, child.level).filter((n) => n);

      const childParentText = parentText;
      const childSearchText = relevantNodes
        .map((n) => getText(n))
        .join(" ")
        .trim();
      const childNodeText = getText(child);
      const childFullText = `${childParentText} ${childSearchText}`;
      const childIds = parentIds.concat(relevantNodes.map((n) => n.id));

      return {
        ids: childIds,
        parentText: childParentText,
        fullText: childFullText,
        nodeText: childNodeText,
        allowMatchOnParent: false
      };
    });
};

/* Helpers for creating the searchable array */
const createSearchIndex = (node, parents = []) => {
  if (_.isArray(node)) {
    return node.reduce((prev, current) => {
      return prev.concat(createSearchIndex(current, parents));
    }, []);
  }

  const currentLineage = parents.concat([node]);
  const fullText = currentLineage.map((n) => getText(n)).join(" ").trim();
  const parentText = parents.map((n) => getText(n)).join(" ").trim();
  const nodeText = getText(node);
  const ids = currentLineage.map((n) => n.id);

  const nodes = [{
    parentText,
    fullText,
    nodeText,
    ids,
    allowMatchOnParent: true
  }];
  let children = [];

  if (node.type === "item") {
    // Special logic for indexing toc (eg "props"),
    // which is stored as an array, not a tree.
    children = createSearchIndexForItem(node, fullText, ids);
  } else if (node.children) {
    children = createSearchIndex(node.children, currentLineage);
  }

  return nodes.concat(children);
};

const getMatching = (text, arr) => {
  const term = text.toLowerCase();

  return arr
    .filter((n) => {
      const matchesLineage = n.fullText.toLowerCase().includes(term);

      return n.allowMatchOnParent
        ? matchesLineage
        : matchesLineage && !n.parentText.toLowerCase().includes(term);
    })
    .reduce((prev, n) => {
      return n.ids.reduce((ids, id) => _.extend(ids, { [id]: true }), prev);
    }, {});
};

export default {
  createSearchIndex,
  getMatching
};

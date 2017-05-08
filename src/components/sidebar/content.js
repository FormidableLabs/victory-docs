import _ from "lodash";
import { config } from "../config";
import { configGuides } from "../config-guides";

/* Helpers for creating the searchable array */
const createSearchableArray = (node, ancestors) => {
  ancestors = ancestors || "";
  const searchPart = node.text || node.content || "";
  const searchText = `${ancestors} ${searchPart}`.trim();

  let nodes = [{ searchText, searchPart }];

  if (!node.children || !node.children.length) {
    return nodes;
  }

  let children = [];

  if (node.type === "item") {
    const levels = [];

    children = node.children
      .filter((child) => child.level > 1)
      .map((child) => {
        const childSearchPart = child.content;

        levels[child.level - 2] = childSearchPart;
        levels.fill(null, child.level - 1);

        const childAncestors = levels.slice(0, child.level).join(" ").trim();
        const childSearchText = `${searchText} ${childAncestors}`;

        return {
          searchPart: childSearchPart,
          searchText: childSearchText
        };
      });
  } else {
    children = node.children.reduce((prev, child) => {
      return prev.concat(createSearchableArray(child, searchText));
    }, []);
  }

  nodes = nodes.concat(children);

  return nodes;
};

/* Format the sidebar content as a tree */
const docItems = config.map((item) => _.extend({
  type: "item",
  route: "docs",
  children: item.toc
}, item));

const guideItems = configGuides.map((item) => _.extend({
  type: "item",
  route: "guides",
  children: item.toc
}, item));

const subHeading = (items, text) => ({
  text,
  children: items.filter((item) => item.category === text)
});

const sidebarContent = [
  {
    text: "Guides",
    children: [
      subHeading(guideItems)
    ]
  },
  {
    text: "Documentation",
    children: [
      subHeading(docItems, "chart"),
      subHeading(docItems, "core"),
      subHeading(docItems, "more")
    ]
  }
];

/* Create the searchable array */
const searchIndex = sidebarContent.reduce((prev, current) => {
  return prev.concat(createSearchableArray(current));
}, []);

module.exports = {
  sidebarContent,
  searchIndex
};

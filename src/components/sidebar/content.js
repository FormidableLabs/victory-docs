import _ from "lodash";
import { config } from "../config";
import { configGuides } from "../config-guides";

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

const getNodesWithAncestors = (node, ancestors) => {
  ancestors = ancestors || "";
  const searchPart = node.text || node.content || "";
  const searchText = `${ancestors} ${searchPart}`.trim();

  let nodes = [{ searchText, searchPart }];

  nodes.push();

  if (node.children) {
    nodes = nodes.concat(node.children.reduce((prev, child) => {
      return prev.concat(getNodesWithAncestors(child, searchText));
    }, []));
  }

  return nodes;
};

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

module.exports = {
  sidebarContent,
  searchIndex: sidebarContent.reduce((prev, current) => {
    return prev.concat(getNodesWithAncestors(current));
  }, [])
};

import _ from "lodash";
import { config } from "../config";
import { configGuides } from "../config-guides";

const docItems = config.map((item) => _.extend({
  type: "item",
  route: "docs"
}, item));

const guideItems = configGuides.map((item) => _.extend({
  type: "item",
  route: "guides"
}, item));

const subHeading = (items, text) => ({
  text,
  children: items.filter((item) => item.category === text)
});

const getNodesWithAncestors = (node, ancestors) => {
  ancestors = ancestors || "";
  const text = node.text || "";
  const searchText = `${ancestors} ${text}`.trim();

  let nodes = [{ searchText }];

  nodes.push();

  if (node.children) {
    const nextAncestor = `${ancestors} ${text}`.trim();

    nodes = nodes.concat(node.children.reduce((prev, child) => {
      return prev.concat(getNodesWithAncestors(child, nextAncestor));
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

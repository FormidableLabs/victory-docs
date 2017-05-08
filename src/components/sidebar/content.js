import _ from "lodash";
import { config } from "../config";
import { configGuides } from "../config-guides";

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
    "text": "Introduction",
    // Introduction HTML is manually constructed
    "render": false,
    children: [
      { text: "Getting Started" },
      { text: "Native" },
      { text: "Contributing" }
    ]
  },
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
  sidebarContent
};

import _ from "lodash";
import { config } from "../config";
import { configGuides } from "../config-guides";
import marked from "marked";

const formatToc = (toc) => {
  const inlineRenderer = _.extend(new marked.Renderer(), {
    paragraph: _.identity
  });

  return toc.map((t) => _.extend({
    markdown: marked(t.content, {
      gfm: true,
      renderer: inlineRenderer
    })
  }, t));
};

/* Format the sidebar content as a tree */
const docItems = config.map((item) => _.extend({
  type: "item",
  route: "docs",
  children: formatToc(item.toc)
}, _.omit(item, "toc")));

const guideItems = configGuides.map((item) => _.extend({
  type: "item",
  route: "guides",
  children: formatToc(item.toc)
}, _.omit(item, "toc")));

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

import _ from "lodash";
import { config } from "../config";
import { configGuides } from "../config-guides";
import marked from "marked";

let _counter = -1;

const id = () => {
  _counter++;

  return _counter;
};

const formatToc = (toc) => {
  const inlineRenderer = _.extend(new marked.Renderer(), {
    paragraph: _.identity
  });

  return toc.map((t) => _.extend({
    id: id(),
    markdown: marked(t.content, {
      gfm: true,
      renderer: inlineRenderer
    })
  }, t));
};

/* Format the sidebar content as a tree */
const docItems = config.map((item) => _.extend({
  id: id(),
  type: "item",
  route: "docs",
  children: formatToc(item.toc)
}, _.omit(item, "toc")));

const guideItems = configGuides.map((item) => _.extend({
  id: id(),
  type: "item",
  route: "guides",
  children: formatToc(item.toc)
}, _.omit(item, "toc")));

const subHeading = (items, text) => ({
  text,
  id: id(),
  children: items.filter((item) => item.category === text)
});

const sidebarContent = [
  {
    id: id(),
    "text": "Introduction",
    // Introduction HTML is manually constructed
    "render": false,
    children: [
      { id: id(), text: "Getting Started" },
      { id: id(), text: "Native" },
      { id: id(), text: "Contributing" }
    ]
  },
  {
    id: id(),
    text: "Guides",
    children: [
      subHeading(guideItems)
    ]
  },
  {
    id: id(),
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

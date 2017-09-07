import _ from "lodash";
import marked from "marked";
import { config } from "../components/config";
import { configGuides } from "../components/config-guides";

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
    id: -1,
    "text": "Introduction",
    // Introduction HTML is manually constructed
    "render": false,
    children: [
      { id: -2, text: "Getting Started" },
      { id: -3, text: "Native" },
      { id: -4, text: "Contributing" }
    ]
  },
  {
    id: id(),
    "text": "Support",
    children: [
      subHeading(docItems, "support")
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
      subHeading(docItems, "none"),
      subHeading(docItems, "chart"),
      subHeading(docItems, "core"),
      subHeading(docItems, "more")
    ]
  }
];


module.exports = {
  sidebarContent
};

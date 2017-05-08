import _ from "lodash";
import { config } from "../config";
import { configGuides } from "../config-guides";


let _counter = -1;

const id = () => {
  _counter++;

  return _counter;
};

/* Format the sidebar content as a tree */
const docItems = config.map((item) => _.extend({
  id: id(),
  type: "item",
  route: "docs",
  children: item.toc.map((t) => _.extend({ id: id() }, t))
}, item));

const guideItems = configGuides.map((item) => _.extend({
  id: id(),
  type: "item",
  route: "guides",
  children: item.toc.map((t) => _.extend({ id: id() }, t))
}, item));

const subHeading = (items, text) => ({
  text,
  id: id(),
  children: items.filter((item) => item.category === text)
});

const sidebarContent = [
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

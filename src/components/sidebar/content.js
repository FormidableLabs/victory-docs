import _ from "lodash";
import { configDocs } from "../config";
import { configGuides } from "../config-guides";

const docItems = configDocs.map((item) => _.extend({
  type: "item",
  route: "guides"
}, item));

const guideItems = configGuides.map((item) => _.extend({
  type: "item",
  route: "docs"
}, item));

const subHeading = (items, text) => ({
  text,
  type: "subheading",
  list: items.filter((item) => item.category === text)
});

export default [
  {
    text: "Guides",
    type: "heading"
  },
  subHeading(guideItems),
  {
    text: "Documentation",
    type: "heading"
  },
  subHeading(docItems, "chart"),
  subHeading(docItems, "core"),
  subHeading(docItems, "more")
];

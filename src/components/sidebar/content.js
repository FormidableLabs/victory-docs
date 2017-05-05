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

export default [
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

import _ from "lodash";
import { configDocs } from "../config";
import { configGuides } from "../config-guides";

const docItems = configDocs.map((item) => _.extend({ type: "item" }, item));
const guideItems = configGuides.map((item) => _.extend({ type: "item" }, item));

const category = (cat, items) => {
  const filtered = items.filter((item) => item.category === cat);

  return [
    {
      text: cat,
      type: "subheading"
    },
    ...filtered
  ];
};

export default [
  {
    text: "Guides",
    type: "heading"
  },
  ...guideItems,
  {
    text: "Documentation",
    type: "heading"
  },
  ...category("chart", docItems),
  ...category("core", docItems),
  ...category("more", docItems)
];

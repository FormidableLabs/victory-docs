import _ from "lodash";
import { configDocs } from "../config";
import { configGuides } from "../config-guides";

const docItems = configDocs.map((item) => _.extend({ type: "item" }, item));
const guideItems = configGuides.map((item) => _.extend({ type: "item" }, item));

const subHeading = (category, items) => ([
  {
    text: category,
    type: "subheading"
  },
  ...items.filter((item) => item.category === category)
]);

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
  ...subHeading("chart", docItems),
  ...subHeading("core", docItems),
  ...subHeading("more", docItems)
];

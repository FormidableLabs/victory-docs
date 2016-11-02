import Animations from "../screens/guides/components/animations/docs";
import CustomComponents from "../screens/guides/components/custom-components/docs";
import DataAccessors from "../screens/guides/components/data-accessors/docs";
import Events from "../screens/guides/components/events/docs";
import Layout from "../screens/guides/components/layout/docs";
import Themes from "../screens/recipes/components/theme-park";

export const configGuides = [
  {
    text: "Animations",
    slug: "animations",
    category: "behavior",
    docs: Animations
  },
  {
    text: "Custom Components",
    slug: "custom-components",
    category: "layout",
    docs: CustomComponents
  }, {
    text: "Data Accessors",
    slug: "data-accessors",
    category: "behavior",
    docs: DataAccessors
  }, {
    text: "Events",
    slug: "events",
    category: "behavior",
    docs: Events
  }, {
    text: "Layout",
    slug: "layout",
    category: "layout",
    docs: Layout
  }, {
    text: "Themes",
    slug: "themes",
    category: "customize",
    docs: Themes
  }
];

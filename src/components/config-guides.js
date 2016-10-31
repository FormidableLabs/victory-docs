import Animations from "../screens/guides/components/animations/docs";
import CustomComponents from "../screens/guides/components/custom-components/docs";
import DataAccessors from "../screens/guides/components/data-accessors/docs";
import Events from "../screens/guides/components/events/docs";
import ResponsiveContainers from "../screens/guides/components/responsive-containers/docs";
import ThemePark from "../screens/recipes/components/theme-park";

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
    text: "Responsive Containers",
    slug: "responsive-containers",
    category: "layout",
    docs: ResponsiveContainers
  }, {
    text: "Theme Park",
    slug: "theme-park",
    category: "customize",
    docs: ThemePark
  }
];

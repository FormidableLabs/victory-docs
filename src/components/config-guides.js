import Animations from "../screens/guides/components/animations/docs";
import CustomComponents from "../screens/guides/components/custom-components/docs";
import DataAccessors from "../screens/guides/components/data-accessors/docs";
import Events from "../screens/guides/components/events/docs";
import Layout from "../screens/guides/components/layout/docs";
import CustomCharts from "../screens/guides/components/custom-charts/docs";
import Themes from "../screens/recipes/components/theme-park";
import Tooltips from "../screens/guides/components/tooltips/docs";
import PanZoom from "../screens/recipes/components/pan-and-zoom/docs";

export const configGuides = [
  {
    text: "Animations",
    slug: "animations",
    docs: Animations
  },
  {
    text: "Custom Components",
    slug: "custom-components",
    docs: CustomComponents
  }, {
    text: "Data Accessors",
    slug: "data-accessors",
    docs: DataAccessors
  }, {
    text: "Events",
    slug: "events",
    docs: Events
  }, {
    text: "Layout",
    slug: "layout",
    docs: Layout
  }, {
    text: "Custom Charts",
    slug: "custom-charts",
    docs: CustomCharts
  }, {
    text: "Themes",
    slug: "themes",
    docs: Themes
  }, {
    text: "Tooltips",
    slug: "tooltips",
    docs: Tooltips
  }, {
    text: "Pan and Zoom",
    slug: "pan-and-zoom",
    docs: PanZoom,
    category: "customize"
  }
];

import Animations from "../screens/guides/components/animations/docs";
import CustomComponents from "../screens/guides/components/custom-components/docs";
import DataAccessors from "../screens/guides/components/data-accessors/docs";
import Events from "../screens/guides/components/events/docs";
import Layout from "../screens/guides/components/layout/docs";
import CustomCharts from "../screens/guides/components/custom-charts/docs";
import Themes from "../screens/guides/components/theme-park/index";
import Tooltips from "../screens/guides/components/tooltips/docs";
import BrushZoom from "../screens/guides/components/brush-and-zoom/docs";
import PolarCharts from "../screens/guides/components/polar-charts/docs";

export const configGuides = [
  {
    text: "Animations",
    slug: "animations",
    docs: Animations,
    toc: Animations.toc(),
    editUrl: "/screens/guides/components/animations/ecology.md"
  },
  {
    text: "Custom Components",
    slug: "custom-components",
    docs: CustomComponents,
    toc: CustomComponents.toc(),
    editUrl: "/screens/guides/components/custom-components/ecology.md"
  }, {
    text: "Data Accessors",
    slug: "data-accessors",
    docs: DataAccessors,
    toc: DataAccessors.toc(),
    editUrl: "/screens/guides/components/data-accessors/ecology.md"
  }, {
    text: "Events",
    slug: "events",
    docs: Events,
    toc: Events.toc(),
    editUrl: "/screens/guides/components/events/ecology.md"
  }, {
    text: "Layout",
    slug: "layout",
    docs: Layout,
    toc: Layout.toc(),
    editUrl: "/screens/guides/components/layout/ecology.md"
  }, {
    text: "Custom Charts",
    slug: "custom-charts",
    docs: CustomCharts,
    toc: CustomCharts.toc(),
    editUrl: "/screens/guides/components/custom-charts/ecology.md"
  }, {
    text: "Themes",
    slug: "themes",
    docs: Themes,
    toc: Themes.toc(),
    editUrl: "/screens/recipes/components/theme-park/index.js"
  }, {
    text: "Tooltips",
    slug: "tooltips",
    docs: Tooltips,
    toc: Tooltips.toc(),
    editUrl: "/screens/guides/components/tooltips/ecology.md"
  }, {
    text: "Brush and Zoom",
    slug: "brush-and-zoom",
    docs: BrushZoom,
    toc: BrushZoom.toc(),
    editUrl: "/screens/guides/components/brush-and-zoom/ecology.md"
  }, {
    text: "Polar Charts",
    slug: "polar-charts",
    docs: PolarCharts,
    toc: PolarCharts.toc(),
    editUrl: "/screens/guides/components/polar-charts/ecology.md"
  }
];

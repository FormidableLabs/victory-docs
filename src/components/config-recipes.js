import CustomCentralAxis from "../screens/recipes/components/custom-central-axis/docs";
import CustomDataComponent from "../screens/recipes/components/custom-data-component/docs";
import CustomStyles from "../screens/recipes/components/custom-styles/docs";
import MultipleAxes from "../screens/recipes/components/multiple-axes/docs";
import Tooltip from "../screens/recipes/components/tooltip/docs";
import CandlestickDashboard from "../screens/recipes/components/candlestick-dashboard/docs";
import ThemePark from "../screens/recipes/components/theme-park";

export const recipesComponents = [
  {
    text: "Candlestick Dashboard",
    slug: "candlestick-dashboard",
    category: "customize",
    docs: CandlestickDashboard
  },
  {
    text: "Central Axis",
    slug: "custom-central-axis",
    category: "customize",
    docs: CustomCentralAxis
  }, {
    text: "Data Component",
    slug: "custom-data-component",
    category: "customize",
    docs: CustomDataComponent
  }, {
    text: "Multiple Axes",
    slug: "multiple-axes",
    category: "customize",
    docs: MultipleAxes
  }, {
    text: "Styles",
    slug: "custom-styles",
    category: "customize",
    docs: CustomStyles
  }, {
    text: "Theme Park",
    slug: "theme-park",
    category: "customize",
    docs: ThemePark
  }, {
    text: "Tooltip",
    slug: "tooltip",
    category: "events",
    docs: Tooltip
  }
];

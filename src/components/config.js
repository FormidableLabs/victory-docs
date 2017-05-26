import VAnimationDocs from "../screens/docs/components/victory-animation/index.js";
import VAreaDocs from "../screens/docs/components/victory-area/index.js";
import VAxisDocs from "../screens/docs/components/victory-axis/index.js";
import VBarDocs from "../screens/docs/components/victory-bar/index.js";
import VBrushContainerDocs from "../screens/docs/components/victory-brush-container/index.js";
import VCandlestickDocs from "../screens/docs/components/victory-candlestick/index.js";
import VChartDocs from "../screens/docs/components/victory-chart/index.js";
import VClipContainerDocs from "../screens/docs/components/victory-clip-container/index.js";
import VContainerDocs from "../screens/docs/components/victory-container/index.js";
import VErrorBarDocs from "../screens/docs/components/victory-errorbar/index.js";
import VGroupDocs from "../screens/docs/components/victory-group/index.js";
import VLabelDocs from "../screens/docs/components/victory-label/index.js";
import VLegendDocs from "../screens/docs/components/victory-legend/index.js";
import VLineDocs from "../screens/docs/components/victory-line/index.js";
import VPieDocs from "../screens/docs/components/victory-pie/index.js";
import VPortalDocs from "../screens/docs/components/victory-portal/index.js";
import VPrimitivesDocs from "../screens/docs/components/victory-primitives/index.js";
import VScatterDocs from "../screens/docs/components/victory-scatter/index.js";
import VSelectionContainerDocs from "../screens/docs/components/victory-selection-container/index.js";
import VCursorContainerDocs from "../screens/docs/components/victory-cursor-container/index.js";
import VSharedEventsDocs from "../screens/docs/components/victory-shared-events/index.js";
import VStackDocs from "../screens/docs/components/victory-stack/index.js";
import VThemeDocs from "../screens/docs/components/victory-theme/index.js";
import VTooltipDocs from "../screens/docs/components/victory-tooltip/index.js";
import VTransitionDocs from "../screens/docs/components/victory-transition/index.js";
import VVoronoiDocs from "../screens/docs/components/victory-voronoi/index.js";
import VVoronoiContainerDocs from "../screens/docs/components/victory-voronoi-container/index.js";
import VVoronoiTooltipDocs from "../screens/docs/components/victory-voronoi-tooltip/index.js";
import NativeTutorial from "../screens/docs/components/native/index.js";
import VZoomDocs from "../screens/docs/components/victory-zoom/index.js";
import VZoomContainerDocs from "../screens/docs/components/victory-zoom-container/index.js";
import CreateContainerDocs from "../screens/docs/components/create-container/index.js";

export const config = [
  {
    text: "Native Tutorial",
    slug: "native",
    category: "native",
    docs: NativeTutorial,
    toc: NativeTutorial.toc()
  }, {
    text: "VictoryAnimation",
    slug: "victory-animation",
    category: "core",
    docs: VAnimationDocs,
    toc: VAnimationDocs.toc()
  }, {
    text: "VictoryArea",
    slug: "victory-area",
    category: "chart",
    docs: VAreaDocs,
    toc: VAreaDocs.toc()
  }, {
    text: "VictoryAxis",
    slug: "victory-axis",
    category: "chart",
    docs: VAxisDocs,
    toc: VAxisDocs.toc()
  }, {
    text: "VictoryBar",
    slug: "victory-bar",
    category: "chart",
    docs: VBarDocs,
    toc: VBarDocs.toc()
  }, {
    text: "VictoryBrushContainer",
    slug: "victory-brush-container",
    category: "chart",
    docs: VBrushContainerDocs,
    toc: VBrushContainerDocs.toc()
  }, {
    text: "VictoryCandlestick",
    slug: "victory-candlestick",
    category: "chart",
    docs: VCandlestickDocs,
    toc: VCandlestickDocs.toc()
  }, {
    text: "VictoryChart",
    slug: "victory-chart",
    category: "chart",
    docs: VChartDocs,
    toc: VChartDocs.toc()
  }, {
    text: "VictoryClipContainer",
    slug: "victory-clip-container",
    category: "core",
    docs: VClipContainerDocs,
    toc: VClipContainerDocs.toc()
  }, {
    text: "VictoryContainer",
    slug: "victory-container",
    category: "core",
    docs: VContainerDocs,
    toc: VContainerDocs.toc()
  }, {
    text: "VictoryCursorContainer",
    slug: "victory-cursor-container",
    category: "chart",
    docs: VCursorContainerDocs,
    toc: VCursorContainerDocs.toc()
  }, {
    text: "VictoryErrorBar",
    slug: "victory-errorbar",
    category: "chart",
    docs: VErrorBarDocs,
    toc: VErrorBarDocs.toc()
  }, {
    text: "VictoryGroup",
    slug: "victory-group",
    category: "chart",
    docs: VGroupDocs,
    toc: VGroupDocs.toc()
  }, {
    text: "VictoryLabel",
    slug: "victory-label",
    category: "core",
    docs: VLabelDocs,
    toc: VLabelDocs.toc()
  }, {
    text: "VictoryLegend",
    slug: "victory-legend",
    category: "core",
    docs: VLegendDocs,
    toc: VLegendDocs.toc()
  }, {
    text: "VictoryLine",
    slug: "victory-line",
    category: "chart",
    docs: VLineDocs,
    toc: VLineDocs.toc()
  }, {
    text: "VictoryPie",
    slug: "victory-pie",
    category: "more",
    docs: VPieDocs,
    toc: VPieDocs.toc()
  }, {
    text: "VictoryPortal",
    slug: "victory-portal",
    category: "core",
    docs: VPortalDocs,
    toc: VPortalDocs.toc()
  }, {
    text: "VictoryPrimitives",
    slug: "victory-primitives",
    category: "core",
    docs: VPrimitivesDocs,
    toc: VPrimitivesDocs.toc()
  }, {
    text: "VictorySharedEvents",
    slug: "victory-shared-events",
    category: "core",
    docs: VSharedEventsDocs,
    toc: VSharedEventsDocs.toc()
  }, {
    text: "VictoryScatter",
    slug: "victory-scatter",
    category: "chart",
    docs: VScatterDocs,
    toc: VScatterDocs.toc()
  }, {
    text: "VictorySelectionContainer",
    slug: "victory-selection-container",
    category: "chart",
    docs: VSelectionContainerDocs,
    toc: VSelectionContainerDocs.toc()
  }, {
    text: "VictoryStack",
    slug: "victory-stack",
    category: "chart",
    docs: VStackDocs,
    toc: VStackDocs.toc()
  }, {
    text: "VictoryTheme",
    slug: "victory-theme",
    category: "core",
    docs: VThemeDocs,
    toc: VThemeDocs.toc()
  }, {
    text: "VictoryTooltip",
    slug: "victory-tooltip",
    category: "core",
    docs: VTooltipDocs,
    toc: VTooltipDocs.toc()
  }, {
    text: "VictoryTransition",
    slug: "victory-transition",
    category: "core",
    docs: VTransitionDocs,
    toc: VTransitionDocs.toc()
  }, {
    text: "VictoryVoronoi",
    slug: "victory-voronoi",
    category: "chart",
    docs: VVoronoiDocs,
    toc: VVoronoiDocs.toc()
  }, {
    text: "VictoryVoronoiContainer",
    slug: "victory-voronoi-container",
    category: "chart",
    docs: VVoronoiContainerDocs,
    toc: VVoronoiContainerDocs.toc()
  }, {
    text: "VictoryVoronoiTooltip",
    slug: "victory-voronoi-tooltip",
    category: "chart",
    docs: VVoronoiTooltipDocs,
    toc: VVoronoiTooltipDocs.toc()
  }, {
    text: "VictoryZoom",
    slug: "victory-zoom",
    category: "chart",
    docs: VZoomDocs,
    toc: VZoomDocs.toc()
  }, {
    text: "VictoryZoomContainer",
    slug: "victory-zoom-container",
    category: "chart",
    docs: VZoomContainerDocs,
    toc: VZoomContainerDocs.toc()
  }, {
    text: "createContainer",
    slug: "create-container",
    category: "chart",
    docs: CreateContainerDocs,
    toc: CreateContainerDocs.toc()
  }
];

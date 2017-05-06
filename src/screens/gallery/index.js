import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Prism from "prismjs";
import {
  Area,
  Bar,
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryPie,
  VictoryPortal,
  VictoryScatter,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoi,
  VictoryVoronoiContainer,
  VictoryVoronoiTooltip
} from "victory";

// import Playground from "component-playground";

/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
/* eslint-enable no-unused-vars */

// Child components
import Header from "../../components/header";
import Footer from "../../components/footer";
import Preview from "./components/preview";
import TitleMeta from "../../components/title-meta";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.codeTexts = [
      this.processCodeText(require("!!raw!./examples/alternative-events.example.js")),
      this.processCodeText(require("!!raw!./examples/column-chart.example.js")),
      this.processCodeText(require("!!raw!./examples/custom-tooltip-labels.example.js")),
      this.processCodeText(require("!!raw!./examples/horizontal-grouped-bars.example.js")),
      this.processCodeText(require("!!raw!./examples/simple-grouped-bars.example.js")),
      this.processCodeText(require("!!raw!./examples/stacked-area-dates.example.js")),
      this.processCodeText(require("!!raw!./examples/stacked-bars-central-axis.example.js")),
      this.processCodeText(require("!!raw!./examples/stream-graph.example.js")),
      this.processCodeText(require("!!raw!./examples/tick-format.example.js")),
      this.processCodeText(require("!!raw!./examples/victory-area-stroke.example.js")),
      this.processCodeText(require("!!raw!./examples/victory-line-null-data.example.js")),
      this.processCodeText(require("!!raw!./examples/victory-pie-center-label.example.js")),
      this.processCodeText(require("!!raw!./examples/victory-portal-stacked-area.example.js")),
      this.processCodeText(require("!!raw!./examples/victory-voronoi-container-custom-on-click.example.js")),
      this.processCodeText(require("!!raw!./examples/voronoi-tooltips-grouped.example.js"))
    ];
  }

  processCodeText(text) {
    return text
            .replace(/\/\* [global|eslint|NOTE](.|[\n])*?\*\//g, "") // remove dev comments
            .trim(); // remove left-over whitespace
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  renderPreviews(codeTexts) {
    return codeTexts.map((code, index) => {
      return (
        <div key={index} className="Grid-cell Gallery-item">
          <Preview
            key={index}
            code={code}
            scope={{
              React,
              ReactDOM,
              Area,
              Bar,
              VictoryArea,
              VictoryAxis,
              VictoryBar,
              VictoryChart,
              VictoryGroup,
              VictoryLabel,
              VictoryLine,
              VictoryPie,
              VictoryPortal,
              VictoryScatter,
              VictoryStack,
              VictoryTheme,
              VictoryTooltip,
              VictoryVoronoi,
              VictoryVoronoiContainer,
              VictoryVoronoiTooltip
            }}
            noRender={false}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <TitleMeta title="Victory | Gallery">
        <Header />
          <article className="Article">
            <h1 className="u-noMargin">
              Gallery
            </h1>
            <div className="Grid Grid--gutterSm Grid--1of4">
              {this.renderPreviews(this.codeTexts)}
            </div>
          </article>
        <Footer />
      </TitleMeta>
    );
  }
}

Gallery.propTypes = {
  location: React.PropTypes.object.isRequired,
  params: React.PropTypes.object
};

Gallery.defaultProps = {
  params: null
};

export default Radium(Gallery);

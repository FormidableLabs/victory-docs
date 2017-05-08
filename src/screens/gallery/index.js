import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Prism from "prismjs";
import {
  Area,
  Bar,
  VictoryAnimation,
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryBrushContainer,
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
  VictoryVoronoiTooltip,
  VictoryZoomContainer
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
import { configGallery } from "../../components/config-gallery";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
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

  renderPreviews(galleries) {
    return galleries.map((gallery, index) => {
      return (
        <div key={index} className="Grid-cell Gallery-item">
          <Preview
            key={index}
            code={this.processCodeText(gallery.code)}
            scope={{
              React,
              ReactDOM,
              Area,
              Bar,
              VictoryAnimation,
              VictoryArea,
              VictoryAxis,
              VictoryBar,
              VictoryBrushContainer,
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
              VictoryVoronoiTooltip,
              VictoryZoomContainer
            }}
            noRender={false}
          />
          <p className="Gallery-item-heading">{gallery.text}</p>
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
            <div className="Grid Grid--gutterSm">
              {this.renderPreviews(configGallery)}
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

import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Playground from "component-playground";
import find from "lodash/find";
import {Link} from "react-router";
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

// Child components
import Preview from "./components/preview";
import { configGallery } from "../../components/config-gallery";

class GalleryCode extends React.Component {
  constructor(props) {
    super(props);
  }

  processCodeText(text) {
    return text
            .replace(/\/\* [global|eslint|NOTE](.|[\n])*?\*\//g, "") // remove dev comments
            .trim(); // remove left-over whitespace
  }

  renderPreviews(config) {
    return (
      <div className="Grid Grid--gutterSm">
        {config.map((example, index) => {
          return (
            <div key={index} className="Grid-cell Gallery-item">
              <Preview
                key={index}
                code={this.processCodeText(example.code)}
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
              <p className="Gallery-item-heading">
                <Link to={`/gallery/${example.slug}`}>{example.text}</Link>
              </p>
            </div>
          );}
        )}
      </div>
    );
  }

  renderPlayground(slug) {
    const example = find(configGallery, {slug});
    return (
      <div className="Recipe Recipe--noMaxHeight">
        <pre className="u-noMarginTop u-noPadding">
          <div className="Interactive">
            <Playground
              codeText={this.processCodeText(example.code)}
              noRender={false}
              theme="elegant"
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
            />
          </div>
        </pre>
      </div>
    );
  }

  render() {
    const activeExample = this.props.params.example ?
      this.renderPlayground(this.props.params.example) :
      this.renderPreviews(configGallery);

    if

    return (
      {activeExample}
    );
  }
}

GalleryCode.propTypes = {
  location: React.PropTypes.object.isRequired,
  params: React.PropTypes.object
};

GalleryCode.defaultProps = {
  params: null
};

export default Radium(GalleryCode);

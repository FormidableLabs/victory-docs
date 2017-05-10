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

// Child Components
import Footer from "../../components/footer";
import Header from "../../components/header";
import Icon from "../../components/icon";

import Preview from "./components/preview";
import TitleMeta from "../../components/title-meta";
import { configGallery } from "../../components/config-gallery";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.scope = {
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
    };
  }

  processCodeText(text) {
    return text
            .replace(/\/\* [global|eslint|NOTE](.|[\n])*?\*\//g, "") // remove dev comments
            .trim(); // remove left-over whitespace
  }

  renderPreviews(config) {
    const previews = config.map((example, index) => {
      return (
        <div key={index} className="Gallery-item">
          <Preview
            codeText={this.processCodeText(example.code)}
            noRender={false}
            theme="elegant"
            scope={this.scope}
          />
          <p className="Gallery-item-heading">
            <Link to={`/gallery/${example.slug}`}>
              {example.text}&nbsp;<Icon glyph="internal-link" />
            </Link>
          </p>
        </div>
      );
    });
    return (
      <article className="Article Article--noBottom">
        <h1 className="u-noMargin">
          Gallery
        </h1>
        <div className="Gallery">
          {previews}
        </div>
      </article>
    );
  }

  renderPlayground(slug) {
    const example = find(configGallery, {slug});
    const current = configGallery.indexOf(example);
    // cycle through gallery array
    const previous = (current - 1) > 0 ? (current - 1) : configGallery.length - 1;
    const prevIndex = previous % configGallery.length;
    const nextIndex = (current + 1) % configGallery.length;
    return (
      <article className="Article Article--noBottom">
        <Link to="/gallery" className="SubHeading">
          Back to Gallery
        </Link>
        <h1 className="u-noMargin">
          {example.text}
        </h1>
        <div className="Grid Grid--justifySpacebetween u-marginTopSm">
          <Link to={`/gallery/${configGallery[prevIndex].slug}`} className="SubHeading">
            <Icon glyph="back" /> Previous Example
          </Link>
          <Link to={`/gallery/${configGallery[nextIndex].slug}`} className="SubHeading">
            Next Example <Icon glyph="internal-link" />
          </Link>
        </div>
        <div className="Recipe Recipe--gallery">
          <pre className="u-noMarginTop u-noPadding">
            <div className="Interactive">
              <Playground
                codeText={this.processCodeText(example.code)}
                noRender={false}
                theme="elegant"
                scope={this.scope}
              />
            </div>
          </pre>
        </div>
      </article>
    );
  }

  render() {
    const activePage = this.props.params.example ?
      this.renderPlayground(this.props.params.example) :
      this.renderPreviews(configGallery);

    return (
      <TitleMeta title="Victory | Gallery">
        <Header />
        {activePage}
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

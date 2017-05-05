import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Prism from "prismjs";import {
  VictoryChart, VictoryScatter, VictoryPie, VictoryLine, VictoryStack, VictoryBar, VictoryAxis
} from "victory";
import Playground from "component-playground";
/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
/* eslint-enable no-unused-vars */

// Child components
import Header from "../../components/header";
import Footer from "../../components/footer";
import TitleMeta from "../../components/title-meta";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.codeTexts = {
      alternativeEvents: this.processCodeText(require("!!raw!./examples/alternative-events.example.js")),
      tick: this.processCodeText(require("!!raw!./examples/tick-format.example.js"))
    };
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

  render() {
    return (
      <TitleMeta title="Victory | Gallery">
        <Header />
          <article className="Article">
            <h1 className="u-noMargin">
              Gallery
            </h1>
            <Playground
              codeText={this.codeTexts.tick}
              scope={{
                React,
                ReactDOM,
                VictoryAxis,
                VictoryChart,
                VictoryLine
              }}
              theme="elegant"
              noRender={false}
            />
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

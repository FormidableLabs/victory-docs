import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from "victory";
import Radium from "radium";
import Prism from "prismjs";
import { find } from "lodash";
/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
/* eslint-enable no-unused-vars */

// Child components
import basename from "../../basename";
import { config } from "../../components/config";
import Page from "../../components/page";
import Markdown from "../../components/markdown";
import TitleMeta from "../../components/title-meta";

class Docs extends React.Component {
  constructor() {
    super();

    this.state = {
      tocArray: []
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() { // is this the right one??
    Prism.highlightAll();
  }

  updateTocArray(tocArray) {
    this.setState({tocArray});
  }

  renderContent(activePageConf) {
    if (activePageConf.slug === "index") {
      return (
        <div className="Markdown playgroundsMaxHeight">
          <a href="https://github.com/FormidableLabs/victory-docs/blob/master/docs/index.md" className="SubHeading">Edit this page</a>
          <Ecology
            overview={require("!!raw!../../../docs/index.md")}
            scope={{
              React, ReactDOM, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack
            }}
            playgroundtheme="elegant"
          />
        </div>
      );
    }
    const markdownDocs = activePageConf.docs;
    const editUrl = `https://github.com/FormidableLabs/victory-docs/blob/master/docs/${activePageConf.slug}/docs.md`;
    return (
      <div>
        <a href={editUrl} className="SubHeading">Edit this page</a>
        <Markdown
          active={activePageConf.slug}
          basename={basename}
          location={this.props.location}
          markdownFile={markdownDocs}
          updateTocArray={this.updateTocArray.bind(this)}
        />
      </div>
    );
  }

  render() {
    const activePageConf = this.props.params.component ?
      find(config, { slug: this.props.params.component }) :
      { slug: "index", text: "Victory" };

    return (
      <TitleMeta title={`${activePageConf.text} | Documentation`}>
        <Page
          location={this.props.location}
          sidebar={activePageConf.slug}
          tocArray={this.state.tocArray}
        >
          { this.renderContent(activePageConf) }
        </Page>
      </TitleMeta>
    );
  }
}

Docs.propTypes = {
  location: React.PropTypes.object,
  params: React.PropTypes.object
};

Docs.defaultProps = {
  params: null
};


export default Radium(Docs);

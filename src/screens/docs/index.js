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

  renderContent(activePage) {
    if (activePage === "index") {
      return (
        <div className="Markdown playgroundsMaxHeight">
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
    const conf = find(config, { slug: activePage });
    const markdownDocs = conf.docs;
    const editUrl = `https://github.com/FormidableLabs/victory-docs/blob/master/docs/${activePage}/docs.md`;
    return (
      <div>
        <a href={editUrl} className="SubHeading">Edit this page</a>
        <Markdown
          location={this.props.location}
          updateTocArray={this.updateTocArray.bind(this)}
          active={activePage}
          markdownFile={markdownDocs}
        />
      </div>
    );
  }

  render() {
    const activePage = this.props.params.component ?
      this.props.params.component :
      "index";

    return (
      <TitleMeta title="Victory | Documentation">
        <Page
          location={this.props.location}
          sidebar={activePage}
          tocArray={this.state.tocArray}
        >
          { this.renderContent(activePage) }
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

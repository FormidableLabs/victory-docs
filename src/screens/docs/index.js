import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
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
import TitleMeta from "../../components/title-meta";
import EcologyLinkable from "../../components/ecology-linkable";

class Docs extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  renderContent(activePageConf, location) {
    if (activePageConf.slug === "index") {
      return (
        <div className="Markdown playgroundsMaxHeight">
          <a href="https://github.com/FormidableLabs/victory-docs/blob/master/docs/index.md" className="SubHeading">Edit this page</a>
          <EcologyLinkable
            overview={require("!!raw!./components/index.md")}
            location={this.props.location}
            scope={{
              React, ReactDOM, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack
            }}
          />
        </div>
      );
    }
    const Doc = activePageConf.docs;
    const editUrl = `https://github.com/FormidableLabs/victory-docs/blob/master/src/screens/docs/components/${activePageConf.slug}/ecology.md`;

    return (
      <div>
        <a href={editUrl} className="SubHeading">Edit this page</a>
        <Doc
          location={location}
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
        >
          { this.renderContent(activePageConf, this.props.location) }
        </Page>
      </TitleMeta>
    );
  }
}

Docs.propTypes = {
  location: PropTypes.object,
  params: PropTypes.object
};

Docs.defaultProps = {
  params: null
};

export default Radium(Docs);

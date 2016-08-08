import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import TitleMeta from "../../../components/title-meta";
import find from "lodash/find";
import Ecology from "ecology";
import { VictoryPie } from "victory";

// VictoryComponent Docs
import { components } from "../../../components/config";

class GettingStarted extends React.Component {
  render() {
    const overview = require("!!raw!../getting-started.md");

    return (
      <Ecology
        overview={overview}
        scope={{
          React, ReactDOM, VictoryPie
        }}
        playgroundtheme="elegant"
      />
    );
  }
}

class MarkdownDocs extends React.Component {
  renderDocsContent(activeComponent) {
    if (activeComponent === "index") {
      return <GettingStarted/>;
    }
    const conf = find(components, {slug: activeComponent});
    const Docs = conf.docs;
    return (
      <TitleMeta title={`${conf.text} | Documentation`}>
        <Docs />
      </TitleMeta>
    );
  }
  render() {
    return (
      <main className="Main" style={this.props.style}>
        {this.renderDocsContent(this.props.active)}
      </main>
    );
  }
}

MarkdownDocs.propTypes = {
  active: React.PropTypes.string,
  style: React.PropTypes.object
};

MarkdownDocs.defaultProps = {
  active: "index",
  style: null
};

export default Radium(MarkdownDocs);

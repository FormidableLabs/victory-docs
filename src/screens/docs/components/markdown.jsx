import React from "react";
import Radium from "radium";
import TitleMeta from "../../../components/title-meta";
import find from "lodash/find";
import marked from "marked";

// VictoryComponent Docs
import { components } from "../../../components/config";

class MarkdownDocs extends React.Component {
  renderDocsContent(activeComponent) {
    if (activeComponent === "index") {
      const indexDocs = marked(require("../getting-started.md"));
      return (
        <div
          className="Ecology Overview"
          dangerouslySetInnerHTML={{__html: indexDocs}}
        />
      );
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

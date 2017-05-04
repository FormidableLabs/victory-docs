import React from "react";
import Radium from "radium";
import TitleMeta from "../../../components/title-meta";
import find from "lodash/find";
import marked from "marked";

// VictoryComponent Docs
import { configGuides } from "../../../components/config-guides";

class GuideDocs extends React.Component {
  renderDocsContent(activeComponent) {
    if (activeComponent === "index") {
      const indexDocs = marked(require("../index.md"));
      return (
        <TitleMeta title="Victory Guides">
          <div
            className="Guide"
            dangerouslySetInnerHTML={{__html: indexDocs}}
          />
        </TitleMeta>
      );
    }
    const conf = find(configGuides, {slug: activeComponent});
    const Docs = conf.docs;
    const editUrl = `https://github.com/FormidableLabs/victory-docs/blob/master/src/${conf.editUrl}`;
    // This structure matches the <Ecology> /docs components:
    return (
      <TitleMeta title={`${conf.text} | Victory Guides`}>
        <a href={editUrl} className="SubHeading">Edit this page</a>
        <Docs
          location={this.props.location}
        />
      </TitleMeta>
    );
  }
  render() {
    return (
      <div style={this.props.style}>
        {this.renderDocsContent(this.props.active)}
      </div>
    );
  }
}

GuideDocs.propTypes = {
  location: React.PropTypes.object.isRequired,
  active: React.PropTypes.string,
  style: React.PropTypes.object
};

GuideDocs.defaultProps = {
  active: "index",
  style: null
};

export default Radium(GuideDocs);

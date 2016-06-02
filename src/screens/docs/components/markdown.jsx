import React from "react";
import Radium from "radium";
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
    const Docs = find(components, {slug: activeComponent}).docs;
    return (<Docs />);
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

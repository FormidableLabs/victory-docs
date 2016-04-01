import React from "react";
import Radium from "radium";
import find from "lodash/find";
import marked from "marked";

// VictoryComponent Docs
import { components } from "../../../components/config";

class MarkdownDocs extends React.Component {
  getStyles() {
    return {
      margin: "1rem 0 0 0",
      padding: "1rem 0.5rem",
      "@media (min-width: 70em)": {
        flex: "1",
        margin: 0,
        padding: "60px 1rem"
      }
    };
  }
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
      <main
        style={this.getStyles()}
      >
        {this.renderDocsContent(this.props.active)}
      </main>
    );
  }
}

MarkdownDocs.propTypes = {
  active: React.PropTypes.string
};

MarkdownDocs.defaultProps = {
  active: "index"
};

export default Radium(MarkdownDocs);

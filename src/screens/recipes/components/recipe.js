import React from "react";
import Radium from "radium";
import find from "lodash/find";
import marked from "marked";

// VictoryComponent Docs
import { recipesComponents } from "../../../components/config-recipes";

class RecipeDocs extends React.Component {
  renderDocsContent(activeComponent) {
    if (activeComponent === "index") {
      const indexDocs = marked(require("../index.md"));
      return (
        <div
          className="Ecology Overview"
          dangerouslySetInnerHTML={{__html: indexDocs}}
        />
      );
    }
    const Docs = find(recipesComponents, {slug: activeComponent}).docs;
    // This structure matches the <Ecology> /docs components:
    return (
      <div className="Ecology">
        <div className="Overview">
          <Docs />
        </div>
      </div>
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

RecipeDocs.propTypes = {
  active: React.PropTypes.string,
  style: React.PropTypes.object
};

RecipeDocs.defaultProps = {
  active: "index",
  style: null
};

export default Radium(RecipeDocs);

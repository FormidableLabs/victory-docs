import React from "react";
import Radium from "radium";
import TitleMeta from "../../../components/title-meta";
import find from "lodash/find";
import marked from "marked";

// VictoryComponent Docs
import { recipesComponents } from "../../../components/config-recipes";

class RecipeDocs extends React.Component {
  renderDocsContent(activeComponent) {
    if (activeComponent === "index") {
      const indexDocs = marked(require("../index.md"));
      return (
        <TitleMeta title="Victory Recipes">
          <div
            className="Ecology Overview"
            dangerouslySetInnerHTML={{__html: indexDocs}}
          />
        </TitleMeta>
      );
    }
    const conf = find(recipesComponents, {slug: activeComponent});
    const Docs = conf.docs;
    // This structure matches the <Ecology> /docs components:
    return (
      <TitleMeta title={`${conf.text} | Victory Recipes`}>
        <div className="Ecology">
          <div className="Overview">
            <Docs />
          </div>
        </div>
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

RecipeDocs.propTypes = {
  active: React.PropTypes.string,
  style: React.PropTypes.object
};

RecipeDocs.defaultProps = {
  active: "index",
  style: null
};

export default Radium(RecipeDocs);

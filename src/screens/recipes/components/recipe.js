import React from "react";
import Radium from "radium";
import TitleMeta from "../../../components/title-meta";
import find from "lodash/find";

// VictoryComponent Docs
import { configRecipes } from "../../../components/config-recipes";

class RecipeDocs extends React.Component {
  renderDocsContent(activeComponent) {
    const conf = find(configRecipes, {slug: activeComponent});
    const Docs = conf.docs;
    // This structure matches the <Ecology> /docs components:
    return (
      <TitleMeta title={`${conf.text} | Victory Recipes`}>
        <Docs />
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

RecipeDocs.propTypes = {
  active: React.PropTypes.string,
  style: React.PropTypes.object
};

RecipeDocs.defaultProps = {
  active: "index",
  style: null
};

export default Radium(RecipeDocs);

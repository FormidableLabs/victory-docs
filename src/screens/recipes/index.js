import React from "react";
import Radium from "radium";

// Child components
import InternalPage from "../../components/page-internal";
import Recipe from "./components/recipe";
import TitleMeta from "../../components/title-meta";

class Recipes extends React.Component {
  render() {
    const activeRecipe = this.props.params.component ?
      this.props.params.component :
      "index";

    return (
      <TitleMeta title="Victory | Recipes">
        <InternalPage sidebar={activeRecipe}>
          <Recipe active={activeRecipe} />
        </InternalPage>
      </TitleMeta>
    );
  }
}

Recipes.propTypes = {
  params: React.PropTypes.object
};

Recipes.defaultProps = {
  params: null
};


export default Radium(Recipes);

import React from "react";
import EcologyLinkable from "./ecology-linkable";
import { ecologyPlaygroundLoading } from "formidable-landers";

class EcologyRecipe extends React.Component {
  render() {
    const { scope, overview, location } = this.props;

    return (
      <div className="Recipe Markdown">
        <EcologyLinkable
          overview={overview}
          scope={scope}
          location={location}
          customRenderers={ecologyPlaygroundLoading}
        />
      </div>
    );
  }
}

EcologyRecipe.propTypes = {
  scope: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,
  overview: React.PropTypes.string.isRequired
};

EcologyRecipe.defaultProps = {
  children: null
};

export default EcologyRecipe;

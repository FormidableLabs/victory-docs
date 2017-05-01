import React from "react";
import Ecology from "ecology";
import { ecologyPlaygroundLoading } from "formidable-landers";

class EcologyRecipe extends React.Component {
  customRenderers(pathname) {
    return {
      heading: (text, level) => {
        const escaped = text.toLowerCase().replace(/[^\w]+/g, "-");

        return `<h${level} id="${escaped}"><a class="Anchor" href="${pathname}#${escaped}" aria-hidden="true"></a>${text}</h${level}/>`;
      },
      ...ecologyPlaygroundLoading
    };
  }

  render() {
    const { scope, overview, location } = this.props;
    const pathname = location.pathname;

    return (
      <div className="Recipe Markdown">
        <Ecology
          playgroundtheme="elegant"
          overview={overview}
          scope={scope}
          customRenderers={this.customRenderers(pathname)}
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

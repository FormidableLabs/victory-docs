import React from "react";
import Ecology from "ecology";

class EcologyLinkable extends React.Component {
  renderersWithHeading(pathname, otherRenderers) {
    return {
      heading: (text, level) => {
        const escaped = text.toLowerCase().replace(/[^\w]+/g, "-");

        return `<h${level} id="${escaped}"><a class="Anchor" href="${pathname}#${escaped}" aria-hidden="true"></a>${text}</h${level}/>`;
      },
      ...otherRenderers
    };
  }

  render() {
    const { scope, overview, location, customRenderers } = this.props;
    const pathname = location.pathname;

    return (
      <Ecology
        playgroundtheme="elegant"
        overview={overview}
        scope={scope}
        customRenderers={this.renderersWithHeading(pathname, customRenderers)}
      />
    );
  }
}

EcologyLinkable.propTypes = {
  scope: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,
  overview: React.PropTypes.string.isRequired,
  customRenderers: React.PropTypes.object.isRequired
};

EcologyLinkable.defaultProps = {
  children: null,
  customRenderers: {}
};

export default EcologyLinkable;

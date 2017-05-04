import React from "react";
import Ecology from "ecology";

class EcologyLinkable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tocArray: []
    };

    this._tocArray = [];
    this._updateToc = true;
  }

  componentWillReceiveProps(newProps) {
    if (newProps.overview !== this.props.overview) {
      this._updateToc = true;
    }
  }

  renderersWithHeading(pathname, otherRenderers) {
    return {
      heading: (content, level) => {
        const anchor = content.toLowerCase().replace(/[^\w]+/g, "-");

        this._tocArray.push({
          anchor, content, level
        });

        return `<h${level} id="${anchor}"><a class="Anchor" href="${pathname}#${anchor}" aria-hidden="true"></a>${content}</h${level}/>`;
      },
      ...otherRenderers
    };
  }

  updateTocArray() {
    if (this.props.updateTocArray && this._updateToc) {
      this.props.updateTocArray(this._tocArray);
    }

    this._tocArray = [];
    this._updateToc = false;
  }

  componentDidMount() {
    this.updateTocArray();
  }

  componentDidUpdate() {
    this.updateTocArray();
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
  customRenderers: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

EcologyLinkable.defaultProps = {
  children: null,
  customRenderers: {}
};

export default EcologyLinkable;

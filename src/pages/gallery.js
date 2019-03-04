import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withRouteData, Link } from "react-static";
import * as Victory from "victory";

// Child Components
import Footer from "../partials/footer";
import Icon from "../partials/icon";

import Preview from "../partials/gallery/preview";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.scope = {
      ...Victory,
      _: require("lodash"),
      React,
      ReactDOM,
      PropTypes
    };
  }

  parseRaw(str) {
    const playground = "playground_norender";
    const start = str.indexOf(playground) + playground.length;
    const end = str.indexOf("```", start);
    return str.slice(start, end);
  }

  renderPreviewItem(item) {
    const code = this.parseRaw(item.raw);
    const slug = item.data.slug;
    const title = item.data.title;

    return (
      <Link to={`/gallery/${slug}`}>
        <Preview
          codeText={code}
          noRender={false}
          theme="elegant"
          scope={this.scope}
        />
        <p className="Gallery-item-heading">
          {title}
          &nbsp;
          <Icon glyph="internal-link" />
        </p>
      </Link>
    );
  }

  render() {
    const { gallery } = this.props;
    const previews = gallery.map((item, index) => (
      <div key={index} className="Gallery-item">
        {this.renderPreviewItem(item)}
      </div>
    ));

    return (
      <div className="Page-content without-content-sidebar">
        <article className="Article Article--noBottom">
          <div className="Gallery">{previews}</div>
        </article>
        <Footer />
      </div>
    );
  }
}

Gallery.propTypes = {
  data: PropTypes.object,
  gallery: PropTypes.array
};

Gallery.defaultProps = {
  params: null
};

export default withRouteData(({ gallery, location }) => (
  <Gallery gallery={gallery} location={location} />
));

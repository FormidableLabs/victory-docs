import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { withRouteData, Link } from "react-static";
import Playground from "../partials/playground";
import config from "../../static-config-parts/site-data";

class GalleryTemplate extends React.Component {
  render() {
    const { content, data } = this.props.galleryItem;
    const { title, scope } = data;

    return (
      <div className="Page-content without-content-sidebar">
        <Helmet>
          <title>{`${config.siteTitle} |  ${title}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <article className="Article">
          <Link to="/gallery" className="SubHeading">
            Back to Gallery
          </Link>
          <div className="Recipe Recipe--gallery">
            <h1>{title}</h1>
            <pre className="u-noMarginTop u-noPadding">
              <div className="Interactive">
                <Playground html={content} scope={scope} theme="elegant" />
              </div>
            </pre>
          </div>
        </article>
      </div>
    );
  }
}

GalleryTemplate.propTypes = {
  galleryItem: PropTypes.object
};

export default withRouteData(({ galleryItem }) => (
  <GalleryTemplate galleryItem={galleryItem} />
));

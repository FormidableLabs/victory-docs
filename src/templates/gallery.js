import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { withRouteData, Link } from "react-static";
import Footer from "../partials/footer";
import Playground from "../partials/playground";
import Seo from "../partials/seo/index";
import config from "../../static-config-parts/site-data";

class GalleryTemplate extends React.Component {
  render() {
    const { slug, title, contents, scope } = this.props.galleryItem;
    return (
      <div className="Page-content without-content-sidebar">
        <Helmet>
          <title>{`${config.siteTitle} |  ${title}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {/* <Seo postPath={slug} postNode={contents} postSEO />*/}
        <article className="Article">
          <Link to="/gallery" className="SubHeading">
            Back to Gallery
          </Link>
          <div className="Recipe Recipe--gallery">
            <h1>{title}</h1>
            <pre className="u-noMarginTop u-noPadding">
              <div className="Interactive">
                <Playground html={contents} scope={scope} theme="elegant" />
              </div>
            </pre>
          </div>
        </article>
        <Footer />
      </div>
    );
  }
}

GalleryTemplate.propTypes = {
  galleryItem: PropTypes.object
};

export default withRouteData(({ galleryItem, location }) => (
  <GalleryTemplate galleryItem={galleryItem} location={location} />
));


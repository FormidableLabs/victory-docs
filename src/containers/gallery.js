import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { withRouteData, Link } from "react-static";
import Playground from "../partials/playground";
import config from "../../static-config-parts/site-data";
import Page from "./page";

class GalleryTemplate extends React.Component {
  render() {
    const { content, data } = this.props.galleryItem;
    const { title, scope } = data;

    return (
      <Page>
        <Helmet>
          <title>{`${config.siteTitle} |  ${title}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Link to="/gallery">Back to Gallery</Link>
        <h1>{title}</h1>
        <Playground html={content} scope={scope} playgroundTheme="elegant" />
      </Page>
    );
  }
}

GalleryTemplate.propTypes = {
  galleryItem: PropTypes.object
};

export default withRouteData(({ galleryItem }) => (
  <GalleryTemplate galleryItem={galleryItem} />
));

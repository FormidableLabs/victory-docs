import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Footer from "../partials/footer";
import Playground from "../partials/playground";
import Seo from "../partials/seo/index";
import config from "../../data/site-config";

class GalleryTemplate extends React.Component {
  render() {

    console.log('PROPS', this.props);

    return (
      <div className="Page-content">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <article className="Article">
          <div className="Recipe Markdown">
            {/* TODO: Add edit this page link once everything is merged to master
              <a className="SubHeading" href="">Edit this page</a>
            */}
          </div>
        </article>
        <Footer />
      </div>
    );
  }
}

GalleryTemplate.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object
};

export default GalleryTemplate;

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    sitePage(path: { eq: $path}) {
      id
      component
      context {
        slug
      }
    }
  }
`

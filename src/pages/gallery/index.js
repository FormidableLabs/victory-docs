import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Playground from "component-playground";
import Link from "gatsby-link";
import { find } from "lodash";
import * as Victory from "victory";

// Child Components
import Footer from "../../partials/footer";
import Icon from "../../partials/icon";

import Preview from "../../partials/gallery/components/preview";
import { configGallery } from "../../partials/gallery/config";

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
    const playground = "``` playground_norender";
    const start = str.indexOf(playground) + playground.length;
    const end = str.indexOf("```", start);
    return str.slice(start, end);
  }

  renderPreviewItem(node) {
    const code = this.parseRaw(node.fields.raw);
    const slug = node.fields.slug;
    const title = node.frontmatter.title;
    return (
        <Link to={slug}>
          <Preview
            codeText={code}
            noRender={false}
            theme="elegant"
            scope={this.scope}
          />
          <p className="Gallery-item-heading">
            {title}&nbsp;<Icon glyph="internal-link" />
          </p>
        </Link>
    );
  }

  renderGallery(props) {
    const { data } = props;
    const items = data.allMarkdownRemark.edges;
    const previews = items.map((item, index) => {
      return (
        <div key={index} className="Gallery-item">
          {this.renderPreviewItem(item.node)}
        </div>
      );
    });
    return (
      <article className="Article Article--noBottom">
        <h1 className="u-noMargin">Gallery</h1>
        <div className="Gallery">
          {previews}
        </div>
      </article>
    );
  }

  render() {
    const { data } = this.props;
    const items = data.allMarkdownRemark.edges;
    const previews = items.map((item, index) => {
      return (
        <div key={index} className="Gallery-item">
          {this.renderPreviewItem(item.node)}
        </div>
      );
    });

    return (
      <div>
        <article className="Article Article--noBottom">
          <h1 className="u-noMargin">Gallery</h1>
          <div className="Gallery">
            {previews}
          </div>
        </article>
        <Footer />
      </div>
    );
  }
}

Gallery.propTypes = {
  data: PropTypes.object
};

Gallery.defaultProps = {
  params: null
};

export default Gallery;

// this query returns only gallery md
export const query = graphql`
  query GalleryQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "gallery" } } }
    ) {
      edges {
        node {
          fields {
            slug
            raw
          }
          frontmatter{
            id
            title
          }
        }
      }
    }
  }
`;
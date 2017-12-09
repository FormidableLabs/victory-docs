import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Footer from "../partials/footer";
import Playground from "../partials/playground";
import Seo from "../partials/seo/index";
import config from "../../data/site-config";

class GalleryTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.categoryId = config.postDefaultCategoryID;
    }
    return (
      <div className="Page-content">
        <Helmet>
          <title>{`${config.siteTitle} |  ${post.title}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Seo postPath={slug} postNode={postNode} postSEO />
        <article className="Article">
          <Link to="/gallery" className="SubHeading">
            Back to Gallery
          </Link>
          <div className="Recipe Recipe--gallery">
            <h1>{post.title}</h1>
            <pre className="u-noMarginTop u-noPadding">
              <div className="Interactive">
                <Playground
                  html={postNode.html}
                  scope={post.scope}
                  theme="elegant"
                />
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
  data: PropTypes.object,
  pathContext: PropTypes.object
};

export default GalleryTemplate;

export const pageQuery = graphql`
  query ExampleBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        scope
        title
      }
      fields {
        slug
      }
    }
  }
`;

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Footer from "../partials/footer";
import Playground from "../partials/playground";
import Seo from "../partials/seo/index";
import config from "../../data/site-config";

export default class DocsTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    pathContext: PropTypes.object
  };

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
          <div className="Recipe Markdown">
            {/* TODO: Add edit this page link once everything is merged to master
              <a className="SubHeading" href="">Edit this page</a>
            */}
            <Playground
              html={postNode.html}
              scope={post.scope}
              theme="elegant"
            />
          </div>
        </article>
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query DocsBySlug($slug: String!) {
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

import React from "react";
import Helmet from "react-helmet";
import SEO from "../partials/seo/index";
import config from "../../data/site-config";
import "../styles/styles.css";

export default class GuidesTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>
            {post.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </div>
      </div>
    );
  }
}

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query GuideBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        id
        scope
        lodash
      }
      fields {
        slug
      }
    }
  }
`;

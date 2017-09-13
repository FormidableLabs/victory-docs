import React from "react";
import Helmet from "react-helmet";
import SEO from "../partials/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    // <SEO postEdges={postEdges} />
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <h1>help</h1>
      </div>
    );
  }
}

export default Index;

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___id], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            id
          }
        }
      }
    }
  }
`;

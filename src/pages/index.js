import React from "react";
import Helmet from "react-helmet";
// import Seo from "../partials/seo";
import Header from "../partials/header";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    // <Seo postEdges={postEdges} />
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <Header />
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

import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";

import Footer from "../partials/footer";
import Playground from "../partials/playground";
import Sidebar from "../partials/sidebar";
import Seo from "../partials/seo/index";
import config from "../../data/site-config";

export default class DocsTemplate extends React.Component {
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
    
    const sidebarNode = this.props.data.allMarkdownRemark;
    
    console.log('data', this.props.data);

    return (
      <main className="Page">
        <Seo postPath={slug} postNode={postNode} postSEO />
        <div className="Page-sidebar">
          <Sidebar
            content={sidebarNode.edges}
            location={this.props.location}
            toc={postNode.tableOfContents} 
          />
        </div>
        <div className="Page-content">
          <article className="Article">
            <div className="Markdown playgroundsMaxHeight">
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
            </div>
          </article>
          <Footer />
        </div>
      </main>
    );
  }
}

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      tableOfContents
      frontmatter {
        id
        scope
      }
      fields {
        slug
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
            type
          }
          frontmatter{
            id
            category
            title
          }
        }
      }
    }
  }
`;

import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import Ecology from "ecology";
import { ecologyPlaygroundLoading } from "formidable-landers";
import * as Victory from "victory";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from "victory";

import Footer from "../partials/footer";
import Playground from "../partials/playground";
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
    console.log('scope', post);
    
    
    // <Ecology 
    //   playgroundtheme="elegant"
    //   overview={postNode.html}
    //   scope={{...Victory, React, ReactDOM, VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme}}
    // />

    return (
      <main className="Page">
        <Seo postPath={slug} postNode={postNode} postSEO />
        <div className="Page-sidebar">
          TODO: Sidebar
          <div dangerouslySetInnerHTML={{__html: postNode.tableOfContents }} />
        </div>
        <div className="Page-content">
          <article className="Article">
            <div className="Markdown playgroundsMaxHeight">
              <div className="Recipe Markdown">
                <a className="SubHeading">Edit this page</a>
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
      }
      fields {
        slug
      }
    }
  }
`;

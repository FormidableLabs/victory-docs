import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../partials/header";
import config from "../../data/site-config";
import "../styles/styles.css";

import Sidebar from "../partials/sidebar";

export default class LayoutWithSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    history: PropTypes.any,
    location: PropTypes.object
  }

  render() {
    const { children } = this.props;
    console.log('WITH SIDEBAR!! TITLE', this.props);

    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
      
    // The Sidebar’s scroll position remains unchanged while navigating 
    // when it lives here in the layout ...but how do we get tableOfContents?   
    const sidebarNode = this.props.data.allMarkdownRemark;
    // toc={postNode.tableOfContents} 

    return (
      <div className="u-fullHeight">
        <Header home={currentPath === "" ? true : false} />
        <main className="Page">
          <div className="Page-sidebar">
            <Sidebar
              content={sidebarNode.edges}
              location={this.props.location}
            />
          </div>
        {children()}
        </main>
      </div>
    );
  }
}

// this query takes care of sorting!! :magic: 
export const query = graphql`
  query LayoutWithSidebarQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___title], order: ASC}) {
      edges {
        node {
          fields {
            slug
            type
          }
          tableOfContents
          frontmatter{
            id
            category
            title
          }
        }
      }
    }
  }
`

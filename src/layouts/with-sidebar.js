import React from "react";
import PropTypes from "prop-types";

import Header from "../partials/header";
import Sidebar from "../partials/sidebar";

import "../styles/styles.css";

export default class LayoutWithSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    data: PropTypes.object,
    history: PropTypes.any,
    location: PropTypes.object
  }

  render() {
    const { children, data } = this.props;

    // The Sidebar’s scroll position remains unchanged when it lives here in the layout
    const allRecipes = data.allMarkdownRemark.edges;
    const themeGuideExists = allRecipes.find((recipe) => {
      return recipe.node.fields.slug === "/guides/themes/";
    });
    if (!themeGuideExists) {
      // Add /guides/themes/ to sidebar
      allRecipes.push({
        node: {
          fields: {
            slug: "/guides/themes/",
            type: "guides"
          },
          frontmatter: {
            title: "Themes"
          }
        }
      });
    }

    return (
      <div className="u-fullHeight">
        <Header home={false} />
        <main className="Page">
          <div className="Page-sidebar">
            <Sidebar
              content={allRecipes}
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
          headings {
            depth
            value
          }
          frontmatter{
            id
            category
            display
            title
          }
        }
      }
    }
  }
`;

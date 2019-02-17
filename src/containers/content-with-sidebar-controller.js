import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link, PrefetchWhenSeen } from "react-static";
import Footer from "../partials/footer";
import Fuse from "fuse.js";
import { maxBy, minBy, findIndex, includes, last, isEmpty } from "lodash";
import Introduction from "../partials/sidebar/components/introduction";
import Category from "../partials/sidebar/components/category";
import SidebarSearchInput from "../partials/sidebar/components/search-input";
import styled from "styled-components";

// ContentWithSidebarPage aka .new-docs-page
const ContentWithSidebarPage = styled.main`
  display: grid;
  position: absolute;
  top: 161px;
  box-sizing: border-box;
  column-gap: 0rem;
  grid-template-rows: 0 calc(100vh - 161px);
  grid-template-columns: 280px auto;
  grid-template-areas:
    "header header" /* conceptually desirable but doesn't work great with how our landers are built */
    "nav content"
    "footer footer";

  body {
    margin: 0 !important;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .new-docs-nav {
    background-color: #ebe7e4;
    grid-area: nav;
    overflow-y: auto;
    padding: 1.375rem 1.375rem 3.75rem;
  }

  .new-docs-nav-content {
    height: 100vh;
  }

  .new-docs-header {
    grid-area: header;
  }

  .new-docs-footer {
    grid-area: footer;
  }

  .new-docs-content {
    grid-area: content;
    overflow-x: hidden;
    overflow-y: auto; /* overflow condition on parent */
  }

  .new-docs-article {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;

class TableOfContents extends React.Component {
  getTree(headings) {
    if (!headings || !headings.length) {
      return [];
    }
    const depth = minBy(headings, "depth").depth;
    const maxDepth = maxBy(headings, "depth").depth;
    if (depth === maxDepth) {
      return headings;
    }
    const parentIndices = headings.reduce((memo, curr, index) => {
      if (curr.depth === depth) {
        memo = memo.concat(index);
      }
      return memo;
    }, []);
    return parentIndices.reduce((memo, curr, index) => {
      const lastChild =
        index === parentIndices.length + 1
          ? undefined
          : parentIndices[index + 1];
      const children = [headings.slice(curr + 1, lastChild)];
      memo =
        children.length > 0
          ? memo.concat(headings[curr], children)
          : memo.concat(headings[curr]);
      return memo;
    }, []);
  }

  getTOC(link, headings, i = 0) {
    const tree = this.getTree(headings);

    if (!tree.length) {
      return null;
    }

    const toAnchor = content => {
      const baseContent = content.toLowerCase();
      const safeString = baseContent.replace(/[^\w]+/g, " ");
      return safeString.trim().replace(/\s/g, "-");
    };

    const depth = minBy(headings, "depth").depth;

    return (
      <ul key={`${i}-${depth}`} className="Sidebar-toc">
        {tree.map((item, index) => {
          if (Array.isArray(item)) {
            return (
              <li key={`${i}-${depth}`} className="Sidebar-toc-item">
                {this.getTOC(link, item, i++)}
              </li>
            );
          }
          // unfortunately we can't treat "active" and "search term hit" as the same -- if it's active then
          // it's a purely relative link hash, if it's from a search tem hit then we need the type and slug.
          const hashPath = `#${toAnchor(item.value)}`;
          const absPath = `/${link.type}/${link.slug}`;
          // Normally I'd lean way back in a wicker chair on the porch, snap my suspenders, shake my head,
          // and take a long sip from a mint julep while mumbling something about the brittleness of scope and the joys of
          // referential transparency, but we're not generalizing this behavior and location-injection is table stakes
          // for front-end routing
          const path = this.props.location.pathname.includes(absPath)
            ? hashPath
            : `${absPath}${hashPath}`;

          return item.depth > 1 ? (
            <li key={index} className="Sidebar-toc-item">
              <PrefetchWhenSeen path={path}>
                <Link to={path} prefetch={"data"} scrollToTop>
                  {item.value}
                </Link>
              </PrefetchWhenSeen>
            </li>
          ) : null;
        })}
      </ul>
    );
  }

  render() {
    const { active, link, headings } = this.props;
    return active && !isEmpty(headings) ? this.getTOC(link, headings) : null;
  }
}

TableOfContents.propTypes = {
  active: PropTypes.bool,
  headings: PropTypes.array,
  link: PropTypes.object,
  location: PropTypes.object,
  searchTerm: PropTypes.string
};

// was gonna pass this but I'm leaning towards this being an internal detail since at the end of the day the proper
// behavior is based on a bunch of magic strings for a non-configurable internal method
const documentationSubcategories = ["charts", "containers", "more"];

const getPathPrefix = item => {
  // just a bunch of one-offs, elegance is harder to realize gains from
  if (item.title === "Getting Started" && item.category === "introduction") {
    return "/docs/";
  }

  if (item.title === "Native" && item.category === "introduction") {
    return "/docs/native/";
  }

  if (item.category === "support") {
    return "/docs/faq/";
  }
  const checkedCategory = documentationSubcategories.includes(item.category)
    ? "docs"
    : item.category;
  return `/${checkedCategory}/${item.slug}`;
};

// eslint-disable-next-line react/no-multi-comp
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredResults: props.content,
      filterTerm: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value, content) {
    const options = {
      keys: ["data.subHeadings.value", "data.title", "data.category"],
      threshold: 0.2,
      findAllMatches: true,
      distance: 100
    };

    const fuse = new Fuse(this.props.content, options);

    this.setState({
      filteredResults: value ? fuse.search(value) : content,
      filterTerm: value
    });
  }

  clearInput(content) {
    this.setState({
      filteredResults: content,
      filterTerm: ""
    });
  }

  renderLinksList(edges, type, category) {
    const { location } = this.props;

    let filteredEdges = edges.filter(edge => edge.data.type === type);

    if (category) {
      filteredEdges = filteredEdges.filter(edge =>
        category.includes(edge.data.category)
      );
    }

    const renderList = filteredEdges.map(edge => {
      const link = edge.data;

      if (link.display === false) {
        return null;
      }

      // If link is currently active and not under the Introduction section,
      // then display its table of contents underneath it
      const active =
        category !== "introduction" && location.pathname.includes(link.slug)
          ? true
          : this.state.filterTerm !== "";
      const headings =
        this.state.filterTerm !== ""
          ? this.getMatchTree(link, this.state.filterTerm)
          : link.subHeadings;

      return (
        <li
          className="Sidebar-List-Item"
          key={link.slug}
          onClick={() =>
            this.setState({ content: this.state.content, filterTerm: "" })
          }
        >
          <Link
            to={getPathPrefix(link, location)}
            activeClassName={category !== "introduction" ? "is-active" : ""}
            scrollToTop
            prefetch={"data"}
          >
            {link.title}
          </Link>
          <TableOfContents
            active={active}
            link={link}
            headings={headings}
            location={this.props.location}
            filterTerm={this.state.filterTerm}
          />
        </li>
      );
    });
    return renderList;
  }

  getMatchTree(link, filterTerm) {
    const options = {
      keys: ["value", "subHeadings.value", "subHeadings.subHeadings.value"],
      threshold: 0.2,
      findAllMatches: true,
      distance: 100
    };
    const fuse = new Fuse(link.subHeadings, options);
    const matches = fuse.search(filterTerm);
    if (!isEmpty(matches)) {
      const maxDepth = maxBy(matches, "depth").depth;
      let matchIndices = matches.map(match =>
        findIndex(link.subHeadings, heading =>
          includes(heading.value, match.value)
        )
      );

      matchIndices = matchIndices.sort((a, b) => a - b);
      return link.subHeadings
        .slice(0, last(matchIndices) + 1)
        .reduce((memo, curr, i) => {
          const useHeading =
            i === matchIndices[0] ||
            (i < matchIndices[0] && curr.depth < maxDepth);
          if (useHeading && curr.value !== "Props") {
            memo = memo.concat(curr);
            matchIndices =
              i === matchIndices[0] ? matchIndices.slice(1) : matchIndices;
          }
          return memo;
        }, []);
    }
    return [];
  }

  renderNoResults() {
    return (
      <div>
        <p className="Sidebar-Heading u-noPadding">No Results</p>
      </div>
    );
  }

  render() {
    const { content } = this.props;
    const filteredContent = this.state.filteredResults;

    return (
      <nav className="Sidebar">
        <div className="Sidebar-Grid">
          <div className="Sidebar-Search">
            <SidebarSearchInput
              onHandleInputChange={this.handleInputChange}
              content={content}
              searchText={this.state.filterTerm}
              onClearInput={this.clearInput.bind(this)}
            />
          </div>
          {isEmpty(filteredContent) ? (
            this.renderNoResults()
          ) : (
            <React.Fragment>
              <Introduction
                content={this.renderLinksList(
                  filteredContent,
                  "docs",
                  "introduction"
                )}
              />
              <Category
                title="Support"
                content={this.renderLinksList(
                  filteredContent,
                  "docs",
                  "support"
                )}
                location={this.props.location}
              />
              <Category
                title="Guides"
                content={this.renderLinksList(
                  filteredContent,
                  "guides",
                  "guides"
                )}
                location={this.props.location}
              />
              <Category
                title="Documentation"
                content={this.renderLinksList(
                  filteredContent,
                  "docs",
                  "documentation"
                )}
                location={this.props.location}
                subCategories={[
                  {
                    title: "Charts",
                    content: this.renderLinksList(
                      filteredContent,
                      "docs",
                      "charts"
                    )
                  },
                  {
                    title: "Containers",
                    content: this.renderLinksList(
                      filteredContent,
                      "docs",
                      "containers"
                    )
                  },
                  {
                    title: "More",
                    content: this.renderLinksList(
                      filteredContent,
                      "docs",
                      "more"
                    )
                  }
                ]}
              />
            </React.Fragment>
          )}
        </div>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  content: PropTypes.array,
  location: PropTypes.object
};

// eslint-disable-next-line react/no-multi-comp
class ContentWithSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content
    };
  }
  render() {
    const { children, sidebarContent } = this.props;
    return (
      <React.Fragment>
        <ContentWithSidebarPage className="new-docs-page">
          <div className="new-docs-nav">
            <div className="new-docs-nav-content">
              <Sidebar {...this.props} content={sidebarContent} />
            </div>
          </div>
          <div className="new-docs-content">
            <div className="new-docs-article">
              {children}
              <Footer />
            </div>
          </div>
        </ContentWithSidebarPage>
      </React.Fragment>
    );
  }
}

ContentWithSidebar.propTypes = {
  children: PropTypes.array,
  content: PropTypes.array,
  sidebarContent: PropTypes.array
};

export default withRouter(ContentWithSidebar);

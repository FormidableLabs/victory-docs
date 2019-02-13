import React from "react";
import PropTypes from "prop-types";
import Fuse from "fuse.js";
import { Link, withRouter } from "react-static";
import { maxBy, findIndex, includes, last, isEmpty } from "lodash";
import Introduction from "./components/introduction";
import Category from "./components/category";
import SidebarSearchInput from "./components/search-input";
import TableOfContents from "./components/table-of-contents";
import { kebabCase } from "lodash";

// I yield, I yield! The rendering between different sections has sufficiently different
// behavior that the case for generalization in the view layer isn't there. Just because you feel it -- doesn't mean
// it's there. The consolation prize for not being compact/optimally performant is that it's easier to reason
// about and extend.

// Here's the mapping of what we're dealing with which any future implementation needs to be cognizant of:

/*
  Introduction (category field)
    Getting Started-1 (sidebar needs to use title field, not md # heading, child subheadings exist but we don't render them)
    Native (sidebar needs to use title field, not md-heading, child subheadings exist but we don't render them)
    Contributing (not a hash link but an absolute external link to the GH page)

  Support (category field)
    FAQs-1 (use title field not md # heading, expands on click OR on search (treat both as active))
      Subheadings-2 (Canonical to md # headings thank xipe totec, present on all/only item, uses hash link)
        Subheadings-3 (also Canonical to md # headings, uses hash link)

   Guides (category field)
      Subheadings-2 (expands on click OR on search (treat both as active) Canonical to md # headings,uses hash link)
        Subheadings-3 (also Canonical to md # headings, *NOT* present on every item, uses hash link)

   Documentation (category field)
        Common Props-1 (Canonical to md # headings, present on all/only item, uses hash link)
   // under documentation stylistically, but own category, but associated with documentation
   Charts-category-NaN/category/1 (category field with special styling and indent under documentation)
      Subheadings-2 (expands on click OR on search (treat both as active) Canonical to md # headings, uses hash link)
      Subheadings-3 (also Canonical to md # headings, *NOT* present on every item, uses hash link)
   Containers-NaN/category/1 (category field with special styling and indent under documentation)
      Subheadings-2 (expands on click OR on search (treat both as active) Canonical to md # headings, uses hash link)
      Subheadings-3 (also Canonical to md # headings, *NOT* present on every item, uses hash link)
   More-NaN/category/1
      Subheadings-2 (expands on click OR on search (treat both as active) Canonical to md # headings, uses hash link)
      Subheadings-3 (also Canonical to md # headings, *NOT* present on every item, uses hash link)
*/

// So right away, one goes "look at all of those similarities, really it's only Introduction and Support that are weird!
// Um, and also the concept of a subcategory under documentation with custom styling and nested classnames which are brittle
// af and depend on delightful css selectors like .Sidebar-toc-item > .Sidebar-toc .Sidebar-toc-item.

const documentationSubcategories = ["charts", "containers", "more"];

const getPathPrefix = (item, location) => {
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
        <li className="Sidebar-List-Item" key={link.slug}>
          <Link
            to={getPathPrefix(link, location)}
            activeClassName="is-active"
            scrollToTop
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
      // keys: ["value"],
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
    const { content, exampleItems } = this.props;
    const { hash, pathname, search } = this.props.location;
    const activePath = pathname;
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

export default withRouter(Sidebar);

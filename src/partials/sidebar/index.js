import React from "react";
import PropTypes from "prop-types";
import Fuse from "fuse.js";
import Link from "gatsby-link";
import { maxBy, findIndex, includes, last, isEmpty } from "lodash";
import Introduction from "./components/introduction";
import Category from "./components/category";
import SidebarSearchInput from "./components/search-input";
import TableOfContents from "./components/table-of-contents";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredResults: props.content,
      filterTerm: ""
    };
  }

  handleInputChange(value, content) {
    const options = {
      keys: [
        "node.headings.value"
      ],
      threshold: 0.2,
      findAllMatches: true,
      distance: 100
    };

    const fuse = new Fuse(content, options);
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

  getMatchTree(link, filterTerm) {
    const options = {
      keys: [
        "value"
      ],
      threshold: 0.2,
      findAllMatches: true,
      distance: 100
    };
    const fuse = new Fuse(link.headings, options);
    const matches = fuse.search(filterTerm);
    if (!isEmpty(matches)) {
      const maxDepth = maxBy(matches, "depth").depth;
      let matchIndices = matches.map((match) => {
        return findIndex(link.headings, (heading) => includes(heading.value, match.value));
      });
      matchIndices = matchIndices.sort((a, b) => a - b);
      return link.headings.slice(0, last(matchIndices) + 1).reduce((memo, curr, i) => {
        const useHeading = i === matchIndices[0] || i < matchIndices[0] && curr.depth < maxDepth;
        if (useHeading && curr.value !== "Props") {
          memo = memo.concat(curr);
          matchIndices = i === matchIndices[0] ? matchIndices.slice(1) : matchIndices;
        }
        return memo;
      }, []);
    }
    return [];

  }

  renderLinksList(edges, type, category) {
    const { location } = this.props;
    let filteredEdges = edges.filter((edge) => {
      return edge.node.fields.type === type;
    });

    if (category) {
      filteredEdges = filteredEdges.filter((edge) => {
        return edge.node.frontmatter.category === category;
      });
    }

    const renderList = filteredEdges.map((edge) => {
      const link = edge.node;
      if (link.frontmatter.display === false) {
        return null;
      }

      // If link is currently active and not under the Introduction section,
      // then display its table of contents underneath it
      const active =
        category !== "introduction" && !isEmpty(location.pathname.match(link.fields.slug))
          ? true
          : this.state.filterTerm !== "";
      const headings = this.state.filterTerm !== "" ?
        this.getMatchTree(link, this.state.filterTerm) : link.headings;


      return (
        <li className="Sidebar-List-Item" key={link.fields.slug}>
          <Link to={link.fields.slug} activeClassName="is-active">
            {link.frontmatter.title}
          </Link>
          <TableOfContents active={active} link={link} headings={headings}/>
        </li>
      );
    });

    return renderList;
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
              onHandleInputChange={ this.handleInputChange.bind(this) }
              content={ content }
              searchText={ this.state.filterTerm }
              onClearInput={ this.clearInput.bind(this) }
            />
          </div>
          { isEmpty(filteredContent) ? this.renderNoResults() : null }
          <Introduction content={this.renderLinksList(filteredContent, "docs", "introduction")}/>
          <Category title="Support" content={this.renderLinksList(filteredContent, "docs", "faq")}/>
          <Category title="Guides" content={this.renderLinksList(filteredContent, "guides", null)}/>
          <Category title="Documentation"
            content={this.renderLinksList(filteredContent, "docs", "none")}
            subCategories={[
              {
                title: "Charts",
                content: this.renderLinksList(filteredContent, "docs", "charts")
              }, {
                title: "Containers",
                content: this.renderLinksList(filteredContent, "docs", "containers")
              }, {
                title: "More",
                content: this.renderLinksList(filteredContent, "docs", "more")
              }
            ]}
          />
        </div>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  content: PropTypes.array,
  location: PropTypes.object
};

export default Sidebar;

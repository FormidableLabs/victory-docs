import React from "react";
import PropTypes from "prop-types";
import Fuse from "fuse.js";
import Link from "gatsby-link";
import { maxBy, minBy, findIndex, includes, last, times } from "lodash";
import SidebarSearchInput from "./components/search-input";

class Sidebar extends React.Component {
  static propTypes = {
    content: PropTypes.array,
    location: PropTypes.object
  };

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
    if (matches.length) {
      const maxDepth = maxBy(matches, "depth").depth;
      let matchIndices = matches.map((match) => {
        return findIndex(link.headings, (heading) => includes(heading.value, match.value));
      });
      return link.headings.slice(0, last(matchIndices) + 1).reduce((memo, curr, i) => {
        const useHeading = i === matchIndices[0] || i < matchIndices[0] && curr.depth < maxDepth;
        if (useHeading) {
          memo = memo.concat(curr);
          matchIndices = i === matchIndices[0] ? matchIndices.slice(1) : matchIndices;
        }
        return memo;
      }, []);
    }
    return [];
  }

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
      const lastChild = index === parentIndices.length + 1 ? undefined : parentIndices[index + 1];
      const children = [headings.slice(curr + 1, lastChild)];
      memo = children.length > 0 ? memo.concat(headings[curr], children) : memo.concat(headings[curr]);
      return memo;
    }, []);
  }


  getTOC(link, headings) {
    const tree = this.getTree(headings);
    if (!tree.length) {
      return null;
    }

    const toAnchor = (content) => {
      const baseContent = content.toLowerCase();
      const safeString = baseContent.replace(/[^\w]+/g, " ");
      return safeString.trim().replace(/\s/g, "-");
    };
    return (
      <ul>
        {tree.map((item, index) => {
          if (Array.isArray(item)) {
            return this.getTOC(link, item);
          }
          return (
            <li key={index}>
              {
                item.depth > 2 ?
                <a href={`${link.fields.slug}#${toAnchor(item.value)}`}>{item.value}</a> :
                <p><a href={`${link.fields.slug}#${toAnchor(item.value)}`}>{item.value}</a></p>
              }
            </li>
          );
        })}
      </ul>
    );
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
      const isActive =
        category !== "introduction" && location.pathname === link.fields.slug
          ? true
          : this.state.filterTerm !== "";
      let toc = (
        <div className="Sidebar-toc">
          {this.getTOC(link, link.headings)}
        </div>
      );

      if (this.state.filterTerm !== "") {
        const matchTree = this.getMatchTree(link, this.state.filterTerm);
        if (matchTree.length) {
          toc = (
            <div className="Sidebar-toc">
              {this.getTOC(link, matchTree)}
            </div>
          );
        }
      }
      return (
        <li className="Sidebar-List-Item" key={link.fields.slug}>
          <Link to={link.fields.slug} activeClassName="is-active">
            {link.frontmatter.title}
          </Link>
          {isActive ? toc : null}
        </li>
      );
    });

    return renderList;
  }

  render() {
    const { content } = this.props;
    const filteredContent = this.state.filteredResults;

    /* eslint-disable max-len */
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
          <p className="Sidebar-Heading u-noPadding">Introduction</p>
          <ul className="Sidebar-List">
            <ul className="Sidebar-List">
              {this.renderLinksList(filteredContent, "docs", "introduction")}
              <li className="Sidebar-List-Item">
                <a href="https://github.com/FormidableLabs/victory/#contributing">
                  Contributing
                </a>
              </li>
            </ul>
          </ul>
          <div className="Sidebar-Grid-block">
            <p className="Sidebar-Heading">Support</p>
            <ul className="Sidebar-List">
              {this.renderLinksList(filteredContent, "docs", "faq")}
            </ul>
          </div>
          <div className="Sidebar-Grid-block">
            <p className="Sidebar-Heading">Guides</p>
            <ul className="Sidebar-List">
              {this.renderLinksList(filteredContent, "guides", null)}
            </ul>
          </div>
          <div className="Sidebar-Grid-block">
            <p className="Sidebar-Heading">Documentation</p>
            <ul className="Sidebar-List">
              {this.renderLinksList(filteredContent, "docs", "none")}
            </ul>
            <div>
              <p className="Sidebar-SubHeading SubHeading">Charts</p>
              <ul className="Sidebar-List">
                {this.renderLinksList(filteredContent, "docs", "charts")}
              </ul>
            </div>
            <div>
              <p className="Sidebar-SubHeading SubHeading">Containers</p>
              <ul className="Sidebar-List">
                {this.renderLinksList(filteredContent, "docs", "containers")}
              </ul>
            </div>
            <div>
              <p className="Sidebar-SubHeading SubHeading">More</p>
              <ul className="Sidebar-List">
                {this.renderLinksList(filteredContent, "docs", "more")}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
    /* eslint-enable max-len */
  }
}

export default Sidebar;

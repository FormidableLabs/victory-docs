import React from "react";
import PropTypes from "prop-types";
import Fuse from "fuse.js";
import Link from "gatsby-link";

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
        "node.tableOfContents"
      ],
      threshold: 0.6,
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

  renderLinksList(edges, type, category) {
    const { location } = this.props;

    // TODO: Massage toc so the title of the page isn't displayed

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
      const toc = (
        <div
          className="Sidebar-toc"
          dangerouslySetInnerHTML={{ __html: link.tableOfContents }}
        />
      );
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

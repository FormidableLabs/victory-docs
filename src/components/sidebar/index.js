import React from "react";
import { Link } from "react-router";

// Children
import SidebarSelectableItem from "./selectable-item";
import SidebarSearchInput from "./search-input";
import { sidebarContent } from "./content";
import search from "./search";
import Icon from "../icon";

const searchIndex = search.createSearchIndex(sidebarContent);

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      matchingNodes: searchIndex
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const { searchTerm } = this.state;

    this.setState({
      searchTerm: e.target.value,
      matchingNodes: search.getMatching(searchTerm, searchIndex)
    });
  }

  renderList(items) {
    return items
      .filter((item) => this.isMatchingContent(item.text))
      .map((item) => {
        const toc = item.toc.filter((t) => this.isMatchingContent(t.content));
        const alwaysExpand = !!this.state.searchTerm && toc.length > 0;

        return (
          <SidebarSelectableItem
            key={item.slug}
            path={`/${item.route}/${item.slug}`}
            text={item.text}
            toc={toc}
            location={this.props.location}
            alwaysExpand={alwaysExpand}
          />
        );
      });
  }

  isMatchingContent(text) {
    return search.isInMatching(text, this.state.matchingNodes);
  }

  renderContent() {
    const content = sidebarContent
      .filter((heading) => this.isMatchingContent(heading.text))
      .map((heading, i) => {
        const className = i === 0
          ? "Sidebar-Heading"
          : "Sidebar-Heading u-noMarginTop";

        const subheadings = heading.children
          .filter((subheading) => this.isMatchingContent(subheading.text || ""))
          .map((subheading, subheadingIndex) => {
            return (
              <div
                key={subheading.text || `${i}-${subheadingIndex}`}
                className="u-noMargin"
              >
                <p className="Sidebar-SubHeading SubHeading">
                  {subheading.text}
                </p>
                <ul className="Sidebar-List">
                  {this.renderList(subheading.children)}
                </ul>
              </div>
            );
          });

        return (
          <div key={heading.text}>
            <p className={className}>
              {heading.text}
            </p>
            {subheadings}
          </div>
        );
      });

    return (
      <div className="Sidebar-Grid">
        <p className="Sidebar-Heading u-noMargin u-noPadding">
          Introduction
        </p>
        <ul className="Sidebar-List">
          <li key="sidebarlink-index" className="Sidebar-List-Item">
            <Link to="/docs" activeClassName="is-active">
              Getting Started <Icon glyph="internal-link" />
            </Link>
          </li>
          <li key="sidebarlink-native" className="Sidebar-List-Item">
            <Link to="/docs/native" activeClassName="is-active">
              Native <Icon glyph="internal-link" />
            </Link>
          </li>
          <li key="sidebarlink-contributing" className="Sidebar-List-Item">
            <a href="https://github.com/FormidableLabs/victory/#contributing">
              Contributing <Icon glyph="external-link" />
            </a>
          </li>
        </ul>
        {content}
      </div>
    );
  }

  render() {
    /* eslint-disable max-len */
    return (
      <div className="Page-sidebar">
        <nav className="Sidebar">
          <div className="Sidebar-Search">
            <SidebarSearchInput
              term={this.state.searchTerm}
              onChange={this.handleSearch}
            />
          </div>
          {this.renderContent()}
        </nav>
      </div>
    );
  /* eslint-enable max-len */
  }
}

Sidebar.propTypes = {
  active: React.PropTypes.string,
  location: React.PropTypes.object
};

Sidebar.defaultProps = {
  active: null
};

export default Sidebar;

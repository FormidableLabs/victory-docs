import React from "react";
import { Link } from "react-router";

// Children
import SidebarSelectableItem from "./selectable-item";
import sidebarContent from "./content";
import Icon from "../icon";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  renderList(items) {
    const { searchTerm } = this.state;

    return items
      .filter((item) => {
        if (!searchTerm) {
          return true;
        }

        return item.text.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .map((item) => {
        return (
          <SidebarSelectableItem
            key={item.slug}
            path={`/${item.route}/${item.slug}`}
            text={item.text}
            toc={item.toc}
            location={this.props.location}
          />
        );
      });
  }

  renderContent() {
    const content = sidebarContent.map((row, i) => {
      const className = i === 0
        ? "Sidebar-Heading"
        : "Sidebar-Heading u-noMarginTop";

      const subheadings = row.children.map((child, childIndex) => {
        return (
          <div key={child.text || `${i}-${childIndex}`} className="u-noMargin">
            <p className="Sidebar-SubHeading SubHeading">
              {child.text}
            </p>
            <ul className="Sidebar-List">
              {this.renderList(child.children)}
            </ul>
          </div>
        );
      });

      return (
        <div key={row.text}>
          <p className={className}>
            {row.text}
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
            <input type="text" onChange={this.handleSearch} />
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

import React from "react";
import { Link } from "react-router";

// Children
import SidebarSelectableItem from "./selectable-item";
import { config } from "../config";
import { configGuides } from "../config-guides";
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

  renderList(items, route, category) {
    const { searchTerm } = this.state;
    const listItems = items
      .filter((item) => {
        if (!searchTerm) {
          return true;
        }

        return item.text.includes(searchTerm);
      })
      .map((item) => {
        if (!category || item.category === category) {
          return (
            <SidebarSelectableItem
              key={item.slug}
              path={`/${route}/${item.slug}`}
              text={item.text}
              toc={item.toc}
              location={this.props.location}
            />
          );
        }
      });
    return (
      <div className="u-noMargin">
        <p className="Sidebar-SubHeading SubHeading">
          {category}
        </p>
        <ul className="Sidebar-List">
          {listItems}
        </ul>
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
            <p className="Sidebar-Heading">
              Guides
            </p>
            {this.renderList(configGuides, "guides")}
            <p className="Sidebar-Heading u-noMarginTop">
              Documentation
            </p>
            {this.renderList(config, "docs", "chart")}
            {this.renderList(config, "docs", "core")}
            {this.renderList(config, "docs", "more")}
          </div>
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

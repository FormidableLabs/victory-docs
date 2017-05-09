import _ from "lodash";
import React from "react";

// Children
import SidebarList from "./list";
import SidebarSearchInput from "./search-input";
import { sidebarContent } from "./content";
import search from "./search";

const searchIndex = search.createSearchIndex(sidebarContent);

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      matchingNodes: search.getMatching("", searchIndex)
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.debouncedSearch = _.debounce((text) => {
      this.setState({
        matchingNodes: search.getMatching(text, searchIndex)
      });
    }, 100);
  }

  handleSearch(searchTerm) {
    this.setState({ searchTerm });
    this.debouncedSearch(searchTerm);
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
          <SidebarList
            content={sidebarContent}
            matchingNodes={this.state.matchingNodes}
            isSearching={!!this.state.searchTerm}
            location={this.props.location}
          />
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

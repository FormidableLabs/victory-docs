import _ from "lodash";
import React from "react";
import {observer} from "mobx-react";

import SidebarList from "./list";
import SidebarSearchInput from "./search-input";
import { sidebarContent } from "./content";
import search from "./search";

const searchIndex = search.createSearchIndex(sidebarContent);

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchingNodes: search.getMatching("", searchIndex)
    };

    this.debouncedSearch = _.debounce((text) => {
      this.setState({
        matchingNodes: search.getMatching(text, searchIndex)
      });
    }, 100);
  }

  componentWillReact() {
    this.debouncedSearch(this.props.store.searchText);
  }

  render() {
    /* eslint-disable max-len */
    return (
      <div className="Page-sidebar">
        <nav className="Sidebar">
          <div className="Sidebar-Search">
            <SidebarSearchInput store={this.props.store} />
          </div>
          <SidebarList
            content={sidebarContent}
            matchingNodes={this.state.matchingNodes}
            isSearching={!!this.props.store.searchText}
            location={this.props.location}
          />
        </nav>
      </div>
    );
  /* eslint-enable max-len */
  }
}

Sidebar.propTypes = {
  location: React.PropTypes.object.isRequired,
  store: React.PropTypes.shape({
    searchText: React.PropTypes.string.isRequired
  }).isRequired,
  active: React.PropTypes.string
};

Sidebar.defaultProps = {
  active: null
};

export default observer(Sidebar);

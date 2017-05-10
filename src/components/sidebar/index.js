import _ from "lodash";
import React from "react";
import {observer, PropTypes as MobxPropTypes} from "mobx-react";

import SidebarList from "./list";
import SidebarSearchInput from "./search-input";
import search from "./search";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchingNodes: search.getMatching(
        this.props.store.searchText, this.props.store.searchIndex)
    };

    this.debouncedSearch = _.debounce((text, index) => {
      this.setState({
        matchingNodes: search.getMatching(text, index)
      });
    }, 100);
  }

  componentWillReact() {
    const {searchText, searchIndex} = this.props.store;
    this.debouncedSearch(searchText, searchIndex);
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
            content={this.props.store.sidebarContent}
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
    searchText: React.PropTypes.string.isRequired,
    sidebarContent: MobxPropTypes.observableArray.isRequired,
    searchIndex: MobxPropTypes.observableArray.isRequired
  }).isRequired,
  active: React.PropTypes.string
};

Sidebar.defaultProps = {
  active: null
};

export default observer(Sidebar);

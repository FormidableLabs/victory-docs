import React from "react";
import {observer, PropTypes as MobxPropTypes} from "mobx-react";

import SidebarList from "./list";
import SidebarSearchInput from "./search-input";

class Sidebar extends React.Component {
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
            matchingNodes={this.props.store.sidebarMatchingNodes}
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
    searchIndex: React.PropTypes.array.isRequired,
    sidebarContent: MobxPropTypes.observableArray.isRequired,
    sidebarMatchingNodes: React.PropTypes.object.isRequired
  }).isRequired,
  active: React.PropTypes.string
};

Sidebar.defaultProps = {
  active: null
};

export default observer(Sidebar);

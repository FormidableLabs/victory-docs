import React from "react";
import PropTypes from "prop-types";
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
  location: PropTypes.object.isRequired,
  store: PropTypes.shape({
    searchText: PropTypes.string.isRequired,
    searchIndex: PropTypes.array.isRequired,
    sidebarContent: MobxPropTypes.observableArray.isRequired,
    sidebarMatchingNodes: PropTypes.object.isRequired
  }).isRequired,
  active: PropTypes.string
};

Sidebar.defaultProps = {
  active: null
};

export default observer(Sidebar);

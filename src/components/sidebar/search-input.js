import React from "react";
import PropTypes from "prop-types";
import {observer} from "mobx-react";

class SidebarSearchInput extends React.Component {
  onChange(e) {
    this.props.store.searchText = e.target.value;
  }

  render() {
    return (
      <div className="Sidebar-Input">
        <div className="Input">
          <input
            className="Input-search"
            placeholder="Search"
            type="search"
            value={this.props.store.searchText}
            onChange={this.onChange.bind(this)}
          />
          <button
            className="btn Input-clear"
            onClick={this.onChange.bind(this)}
          >
            &times;
          </button>
        </div>

      </div>
    );
  }
}

SidebarSearchInput.propTypes = {
  store: PropTypes.shape({
    searchText: PropTypes.string.isRequired
  })
};

export default observer(SidebarSearchInput);

import React from "react";
import PropTypes from "prop-types";

class SidebarSearchInput extends React.Component {
  onChange(e) {
    this.props.onHandleInputChange(e.target.value, this.props.content);
  }

  onClear() {
    this.props.onClearInput(this.props.content);
  }

  render() {
    return (
      <div className="Sidebar-Input">
        <div className="Input">
          <input
            className="Input-search"
            placeholder="Search"
            type="search"
            value={this.props.searchText}
            onChange={this.onChange.bind(this)}
          />
          <button
            className="btn Input-clear"
            onClick={this.onClear.bind(this)}
          >
            &times;
          </button>
        </div>

      </div>
    );
  }
}

SidebarSearchInput.propTypes = {
  content: PropTypes.array,
  onClearInput: PropTypes.func,
  onHandleInputChange: PropTypes.func,
  searchText: PropTypes.string
};

export default SidebarSearchInput;

import React from "react";

class SidebarSearchInput extends React.Component {
  render() {
    return (
      <div className="Sidebar-Input">
        <div className="Input">
          <input
            className="Input-search"
            placeholder="Search"
            type="search"
            value={this.props.term}
            onChange={this.props.onChange}
          />
          <button className="btn Input-clear">
            &times;
          </button>
        </div>

      </div>
    );
  }
}

SidebarSearchInput.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  term: React.PropTypes.string
};

SidebarSearchInput.defaultProps = {
  term: ""
};

export default SidebarSearchInput;

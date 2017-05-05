import React from "react";

// ASSETS
import ICON from "../../../static/icon-search.svg";

class SidebarSearchInput extends React.Component {
  render() {
    return (
      <div className="Sidebar-Input">
        <div className="Input">
          <i className="Input-icon" dangerouslySetInnerHTML={{__html: ICON}} />
          <input
            className="Input-field"
            placeholder="Search"
            type="search"
            value={this.props.term}
            onChange={this.props.onChange}
          />
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

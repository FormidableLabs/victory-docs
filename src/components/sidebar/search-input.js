import React from "react";

class SidebarSearchInput extends React.Component {
  render() {
    return (
      <div className="Sidebar-Input">
        <input
          type="text"
          value={this.props.term}
          onChange={this.props.onChange}
        />
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

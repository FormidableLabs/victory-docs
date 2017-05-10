import React from "react";

class SidebarSearchInput extends React.Component {
  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="Sidebar-Input">
        <div className="Input">
          <input
            className="Input-search"
            placeholder="Search"
            type="search"
            value={this.props.term}
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
  onChange: React.PropTypes.func.isRequired,
  term: React.PropTypes.string
};

SidebarSearchInput.defaultProps = {
  term: ""
};

export default SidebarSearchInput;

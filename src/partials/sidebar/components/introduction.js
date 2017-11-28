import React from "react";
import PropTypes from "prop-types";

class Introduction extends React.Component {


  render() {
    return Array.isArray(this.props.content) && this.props.content.length ?
      (
        <div>
          <p className="Sidebar-Heading u-noPadding">Introduction</p>
          <ul className="Sidebar-List">
            <ul className="Sidebar-List">
              {this.props.content}
              <li className="Sidebar-List-Item">
                <a href="https://github.com/FormidableLabs/victory/#contributing">
                  Contributing
                </a>
              </li>
            </ul>
          </ul>
        </div>
      ) : null;
  }
}

Introduction.propTypes = {
  content: PropTypes.array
};

export default Introduction;

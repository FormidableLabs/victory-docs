import React from "react";
import Radium from "radium";

// Children
import { components } from "../../../components/config";
import NavLink from "../../../components/navlink";
import VictoryIcon from "../../../../static/icon-victory.svg";

// Settings
import { VictorySettings } from "formidable-landers";

class Sidebar extends React.Component {

  getSidebarStyles() {
    return {
      base: {
        margin: 0,
        padding: "0 1rem 0 0",
        "@media (min-width: 70em)": {
          flex: "0 0 12em"
        }
      },
      list: {
        margin: "0",
        padding: "6px",
        listStyle: "none",
        "@media (min-width: 70em)": {
          position: "fixed"
        }
      },
      listItem: {
        marginTop: "0.3em",
        position: "relative",
        lineHeight: 1.4
      },
      nestedList: {
        margin: "0",
        padding: "0 0 0 1rem",
        listStyle: "none",
        fontSize: "0.9rem",
        color: VictorySettings.navy
      }
    };
  }

  getVictoryIconLinkStyles() {
    return {
      width: "50px",
      height: "50px",
      color: VictorySettings.navy,
      ":hover": {
        color: VictorySettings.navy
      }
    }
  }


  renderListItems(items) {
    return items.map((item) => {
      return (
        <li key={item.slug}>
          <NavLink to={`docs/${item.slug}`}>
            {item.text}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const styles = this.getSidebarStyles();

    /* eslint-disable max-len */
    return (
      <nav
        style={styles.base}
      >
        <ul style={styles.list}>
          <NavLink to="docs" className="Link--unstyled">
            <div
              dangerouslySetInnerHTML={{__html: VictoryIcon}}
              style={this.getVictoryIconLinkStyles()}
            />
          </NavLink>
          <li key="index">
            <NavLink to="docs">
              Getting Started
            </NavLink>
          </li>
          {this.renderListItems(this.props.items)}
        </ul>
      </nav>
    );
  /* eslint-enable max-len */
  }
}

Sidebar.propTypes = {
  items: React.PropTypes.array,
  active: React.PropTypes.string
};

Sidebar.defaultProps = {
  items: components,
  active: null
};

export default Radium(Sidebar);

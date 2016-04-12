import React from "react";
import Radium from "radium";

// Children
import { components } from "../../../components/config";
import NavLink from "../../../components/navlink";
import Icon from "../../../components/icon";
import VictoryIcon from "../../../../static/icon-victory.svg";

// Settings
import { VictorySettings } from "formidable-landers";

class Sidebar extends React.Component {
  getStyles() {
    return {
      icon: {
        color: VictorySettings.darkMud,
        margin: `${VictorySettings.gutter * 2}px auto ${VictorySettings.gutter * 2}px`,
        width: "50px",
        height: "50px"
      },
      navlink: {
        borderBottom: 0
      },
      list: {
        margin: "-100px 0 0",
        padding: 0,
        listStyle: "none",
        position: "fixed"
      },
      listItem: {
        borderBottom: `1px solid ${VictorySettings.sand}`,
        lineHeight: 1.3,
        margin: `${VictorySettings.gutter * 0.5}px 0`
      }
    };
  }

  renderListItems(items) {
    const styles = this.getStyles();

    return items.map((item) => {
      return (
        <li key={item.slug} style={styles.listItem}>
          <NavLink to={`docs/${item.slug}`} style={styles.navlink}>
            {item.text} <Icon glyph="internal-link" />
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const styles = this.getStyles();
    // <img src="/static/vicon@2x.png" width="100px" height="100px" style={styles.icon} alt="Victory Homepage"/>


    /* eslint-disable max-len */
    return (
      <nav style={this.props.style}>
        <ul style={styles.list}>
          <NavLink to="/" className="Link--unstyled" style={{display: "block", textAlign: "center"}}>
            <div
              dangerouslySetInnerHTML={{__html: VictoryIcon}}
              style={styles.icon}
            />
          </NavLink>
          <li key="index" style={styles.listItem}>
            <NavLink to="docs" style={styles.navlink}>
              Getting Started <Icon glyph="internal-link" />
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
  active: React.PropTypes.string,
  style: React.PropTypes.object
};

Sidebar.defaultProps = {
  items: components,
  active: null,
  style: null
};

export default Radium(Sidebar);

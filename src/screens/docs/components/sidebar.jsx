import React from "react";
import Radium from "radium";
import { IndexLink } from "react-router";

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
        height: "50px",
        margin: `${VictorySettings.gutter * 2}px auto ${VictorySettings.gutter * 2}px`,
        width: "50px"
      },
      iconLink: {
        display: "block",
        textAlign: "center",
        border: "none",
        ":hover": {
          border: "none"
        }
      },
      navlink: {
        border: "none"
      },
      list: {
        boxSizing: "border-box",
        columns: "3 220px",
        columnGap: `${VictorySettings.gutter * 2}`,
        fontSize: "20px",
        listStyle: "none",
        padding: 0
      },
      listItem: {
        breakInside: "avoid",
        columnBreakInside: "avoid",
        pageBreakInside: "avoid",
        lineHeight: 1.4,
        margin: 0,
        padding: `${VictorySettings.gutter * 0.3}px ${VictorySettings.gutter * 0.5}px 0 0`,
      },
      listItemHeading: {
        breakInside: "avoid",
        columnBreakInside: "avoid",
        pageBreakInside: "avoid",
        color: VictorySettings.mud,
        fontSize: "0.75em",
        letterSpacing: "0.15em",
        lineHeight: 1.5,
        marginTop: `${VictorySettings.gutter}px`,
        paddingTop: `${VictorySettings.gutter}px`,
        textTransform: "uppercase"
      }
    };
  }

  renderListItems(items, category) {
    const styles = this.getStyles();

    return items.map((item) => {
      if (item.category === category) {
        return (
          <li key={item.slug} style={styles.listItem}>
            <NavLink to={`docs/${item.slug}`} style={styles.navlink}>
              {item.text}. <Icon glyph="internal-link" />
            </NavLink>
          </li>
        );
      }
    });
  }

  render() {
    const styles = this.getStyles();

    /* eslint-disable max-len */
    return (
      <nav style={this.props.style}>
        <IndexLink to="/" style={styles.iconLink}>
          <div
            dangerouslySetInnerHTML={{__html: VictoryIcon}}
            style={styles.icon}
          />
        </IndexLink>
        <ul style={styles.list}>
          <li style={[styles.listItemHeading, {marginTop: 0}]}>
            Welcome
          </li>
          <li key="index" style={styles.listItem}>
            <NavLink to="docs" style={styles.navlink}>
              Getting Started <Icon glyph="internal-link" />
            </NavLink>
          </li>
          <li style={styles.listItemHeading}>
            Core
          </li>
          {this.renderListItems(this.props.items, "core")}
          <li style={styles.listItemHeading}>
            Chart
          </li>
          {this.renderListItems(this.props.items, "chart")}
          <li style={styles.listItemHeading}>
            More
          </li>
          {this.renderListItems(this.props.items, "more")}
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

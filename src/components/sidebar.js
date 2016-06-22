import React from "react";
import Radium from "radium";
import { IndexLink } from "react-router";

// Children
import { components } from "./config";
import { recipesComponents } from "./config-recipes";
import NavLink from "./navlink";
import Icon from "./icon";
import VictoryIcon from "../../static/icon-victory.svg";

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
        lineHeight: 1.3,
        margin: 0,
        padding: `${VictorySettings.gutter * 0.3}px ${VictorySettings.gutter * 0.5}px 0 0`
      },
      listItemCategoryHeading: {
        breakInside: "avoid",
        columnBreakInside: "avoid",
        pageBreakInside: "avoid",
        borderBottom: `1px solid ${VictorySettings.sand}`,
        color: VictorySettings.mud,
        fontSize: "0.75em",
        letterSpacing: "0.15em",
        lineHeight: 1.5,
        marginTop: `${VictorySettings.gutter * 0.5}px`,
        marginBottom: `${VictorySettings.gutter * -0.25}px`,
        paddingTop: `${VictorySettings.gutter * 1.5}px`,
        textTransform: "uppercase"
      },
      listItemHeading: {
        breakInside: "avoid",
        columnBreakInside: "avoid",
        pageBreakInside: "avoid",
        color: VictorySettings.paleMud,
        fontFamily: VictorySettings.sansSerif,
        fontSize: "0.9em",
        lineHeight: 1.1,
        marginTop: `${VictorySettings.gutter * 0.5}px`,
        paddingTop: `${VictorySettings.gutter * 0.5}px`
      }
    };
  }

  renderListItems(items, route, category) {
    const styles = this.getStyles();

    return items.map((item) => {
      if (item.category === category) {
        return (
          <li key={item.slug} style={styles.listItem}>
            <NavLink to={`${route}/${item.slug}`} style={styles.navlink}>
              {item.text} <Icon glyph="internal-link" />
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
          <li key="index" style={styles.listItem}>
            <NavLink to="docs" style={styles.navlink}>
              Getting Started <Icon glyph="internal-link" />
            </NavLink>
          </li>
          <li style={[styles.listItemCategoryHeading, {marginTop: 0}]}>
            Documentation
          </li>
          <li style={styles.listItemHeading}>
            Core
          </li>
          {this.renderListItems(this.props.docs, "docs", "core")}
          <li style={styles.listItemHeading}>
            Chart
          </li>
          {this.renderListItems(this.props.docs, "docs", "chart")}
          <li style={styles.listItemHeading}>
            More
          </li>
          {this.renderListItems(this.props.docs, "docs", "more")}
          <li style={styles.listItemCategoryHeading}>
            Recipes
          </li>
          <li style={styles.listItemHeading}>
            Customize
          </li>
          {this.renderListItems(this.props.recipes, "recipes", "customize")}
          <li style={styles.listItemHeading}>
            Events
          </li>
          {this.renderListItems(this.props.recipes, "recipes", "events")}
        </ul>
      </nav>
    );
  /* eslint-enable max-len */
  }
}

Sidebar.propTypes = {
  docs: React.PropTypes.array,
  recipes: React.PropTypes.array,
  active: React.PropTypes.string,
  style: React.PropTypes.object
};

Sidebar.defaultProps = {
  docs: components,
  recipes: recipesComponents,
  active: null,
  style: null
};

export default Radium(Sidebar);

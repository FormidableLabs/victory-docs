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
        height: "40px",
        margin: `${VictorySettings.gutter}px auto`,
        width: "40px"
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
        columnGap: `${VictorySettings.gutter * 2}px`,
        fontSize: "18px",
        listStyle: "none",
        padding: 0
      },
      listItem: {
        breakInside: "avoid",
        columnBreakInside: "avoid",
        pageBreakInside: "avoid",
        lineHeight: 1.3,
        margin: `0 0 0 ${VictorySettings.gutter * 0.5}px`,
        padding: `0 ${VictorySettings.gutter * 0.5}px 0 0`
      },
      listItemCategoryHeading: {
        breakInside: "avoid",
        columnBreakInside: "avoid",
        pageBreakInside: "avoid",
        color: VictorySettings.mud,
        fontSize: "1.2em",
        fontWeight: "bold",
        lineHeight: 1,
        marginTop: `${VictorySettings.gutter * 0.5}px`,
        marginBottom: `${VictorySettings.gutter * -0.25}px`,
        paddingTop: `${VictorySettings.gutter}px`
      },
      listItemHeading: {
        breakInside: "avoid",
        columnBreakInside: "avoid",
        pageBreakInside: "avoid",
        color: VictorySettings.palerMud,
        fontFamily: VictorySettings.sansSerif,
        fontSize: "0.8em",
        letterSpacing: "0.15em",
        lineHeight: 1.2,
        marginTop: `${VictorySettings.gutter * 0.5}px`,
        marginBottom: `${VictorySettings.gutter * 0.25}px`,
        paddingTop: `${VictorySettings.gutter * 0.5}px`,
        textTransform: "uppercase"
      }
    };
  }

  renderListItems(items, route, category) {
    const styles = this.getStyles();

    return items.map((item) => {
      if (item.category === category) {
        return (
          <li key={item.slug} style={styles.listItem}>
            <NavLink to={`/${route}/${item.slug}`} style={styles.navlink}>
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
          <li style={[styles.listItemCategoryHeading, {marginTop: 0, marginBottom: "10px" }]}>
            Introduction to Victory
          </li>
          <li key="navlink-index" style={styles.listItem}>
            <NavLink to="/docs" style={styles.navlink}>
              Getting Started <Icon glyph="internal-link" />
            </NavLink>
          </li>
          <li key="navlink-contributing" style={styles.listItem}>
            <a href="https://github.com/FormidableLabs/victory/blob/master/CONTRIBUTING.md" style={styles.navlink}>
              Contributing <Icon glyph="external-link" />
            </a>
          </li>
          <li key="navlink-source" style={styles.listItem}>
            <a href="https://github.com/FormidableLabs/victory" style={styles.navlink}>
              Source Code <Icon glyph="external-link" />
            </a>
          </li>
          <li key="navlink-gitter" style={styles.listItem}>
            <a href="https://gitter.im/FormidableLabs/victory" style={styles.navlink}>
              Gitter Channel <Icon glyph="external-link" />
            </a>
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

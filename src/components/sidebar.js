import React from "react";
import Radium from "radium";

// Children
import { config } from "./config";
import { configRecipes } from "./config-recipes";
import NavLink from "./navlink";
import Icon from "./icon";

class Sidebar extends React.Component {
  renderListItems(items, route, category) {
    return items.map((item) => {
      if (item.category === category) {
        return (
          <li key={item.slug} className="Nav-List-Item">
            <NavLink to={`/${route}/${item.slug}`}>
              {item.text} <Icon glyph="internal-link" />
            </NavLink>
          </li>
        );
      }
    });
  }

  render() {
    /* eslint-disable max-len */
    return (
      <nav className="Nav" style={this.props.style}>
        <p className="Nav-Heading u-noMargin u-noPadding">
          Introduction
        </p>
        <ul className="Nav-List">
          <li key="navlink-index" className="Nav-List-Item">
            <NavLink to="/docs">
              Getting Started <Icon glyph="internal-link" />
            </NavLink>
          </li>
          <li key="navlink-contributing" className="Nav-List-Item">
            <a href="https://github.com/FormidableLabs/victory/#contributing">
              Contributing <Icon glyph="external-link" />
            </a>
          </li>
        </ul>
        <p className="Nav-Heading u-noMarginTop">
          Documentation
        </p>
        <p className="Nav-SubHeading SubHeading">
          Core
        </p>
        <ul className="Nav-List">
          {this.renderListItems(this.props.docs, "docs", "core")}
        </ul>
        <p className="Nav-SubHeading SubHeading">
          Chart
        </p>
        <ul className="Nav-List">
          {this.renderListItems(this.props.docs, "docs", "chart")}
        </ul>
        <p className="Nav-SubHeading SubHeading">
          More
        </p>
        <ul className="Nav-List">
          {this.renderListItems(this.props.docs, "docs", "more")}
        </ul>
        <p className="Nav-Heading">
          Recipes
        </p>
        <p className="Nav-SubHeading SubHeading">
          Customize
        </p>
        <ul className="Nav-List">
          {this.renderListItems(this.props.recipes, "recipes", "customize")}
        </ul>
        <p className="Nav-SubHeading SubHeading">
          Events
        </p>
        <ul className="Nav-List">
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
  docs: config,
  recipes: configRecipes,
  active: null,
  style: null
};

export default Radium(Sidebar);

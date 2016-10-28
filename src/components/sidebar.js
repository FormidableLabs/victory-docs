import React from "react";
import { Link } from "react-router";
import MarkdownIt from "markdown-it";
import { times } from "lodash";

// Children
import { config } from "./config";
import { configRecipes } from "./config-recipes";
import NavLink from "./navlink";
import Icon from "./icon";
import basename from "../basename";

class Sidebar extends React.Component {
  renderTransformedToc(siblings, targetLocation) {
    const md = MarkdownIt();

    return (
      <ul className="Sidebar-toc">
        {
          siblings.map((sibling, id) => {
            if (Array.isArray(sibling)) {
              return (
                <li className="Sidebar-toc-item" key={id}>
                  {this.renderTransformedToc(sibling, targetLocation)}
                </li>
              );
            }

            return sibling && (
              <li key={id} className="Sidebar-toc-item">
                <Link
                  to={`${basename}${targetLocation}#${sibling.anchor}`}
                  dangerouslySetInnerHTML={{__html: md.renderInline(sibling.content)}}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }

  pushToLevel(siblings, level, heading) {
    siblings = siblings.slice(0);
    let parentTarget = siblings;
    let target;

    times(level, () => {
      target = parentTarget[parentTarget.length - 1];

      if (Array.isArray(target)) {
        parentTarget = target;
      } else {
        parentTarget.push([]);
        parentTarget = parentTarget[parentTarget.length - 1];
      }
    });

    if (Array.isArray(target)) {
      target.push(heading);
    } else {
      parentTarget.push(heading);
    }

    return siblings;
  }

  transformTocArray(headings) {
    const topHeading = headings[0];

    return headings.reduce((siblings, heading) => {
      const level = heading.level - topHeading.level;
      return this.pushToLevel(siblings, level, heading);
    }, []);
  }

  renderToc(targetLocation) {
    if (!this.props.location || (this.props.location.pathname !== targetLocation)) {
      return null;
    }

    const list = this.props.tocArray.filter((heading) => heading.level !== 1);

    return this.renderTransformedToc(
      this.transformTocArray(list),
      targetLocation
    );
  }

  renderList(items, route, category) {
    const listItems = items.map((item) => {
      if (item.category === category) {
        return (
          <li key={item.slug} className="Nav-List-Item">
            <NavLink to={`/${route}/${item.slug}`}>
              {item.text} <Icon glyph="internal-link" />
            </NavLink>
            {this.renderToc(`/${route}/${item.slug}`)}
          </li>
        );
      }
    });
    return (
      <div>
        <p className="Nav-SubHeading SubHeading">
          {category}
        </p>
        <ul className="Nav-List">
          {listItems}
        </ul>
      </div>
    );
  }

  render() {
    /* eslint-disable max-len */
    return (
      <div className="Page-sidebar">
        <nav className="Nav">
          <div className="Nav-Grid">
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
            {this.renderList(this.props.docs, "docs", "core")}
            {this.renderList(this.props.docs, "docs", "chart")}
            {this.renderList(this.props.docs, "docs", "more")}
            <p className="Nav-Heading">
              Recipes
            </p>
            {this.renderList(this.props.recipes, "recipes", "customize")}
            {this.renderList(this.props.recipes, "recipes", "events")}
          </div>
        </nav>
      </div>
    );
  /* eslint-enable max-len */
  }
}

Sidebar.propTypes = {
  active: React.PropTypes.string,
  docs: React.PropTypes.array,
  location: React.PropTypes.object,
  recipes: React.PropTypes.array,
  tocArray: React.PropTypes.array
};

Sidebar.defaultProps = {
  docs: config,
  recipes: configRecipes,
  active: null
};

export default Sidebar;

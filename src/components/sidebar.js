import React from "react";
import { Link } from "react-router";
import MarkdownIt from "markdown-it";
import { times } from "lodash";

// Children
import { config } from "./config";
import { configGuides } from "./config-guides";
import Icon from "./icon";

class SidebarListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.collapsed && !this.isSelected(nextProps)) {
      this.setState({
        collapsed: false
      });
    }
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
                  to={`${targetLocation}#${sibling.anchor}`}
                  dangerouslySetInnerHTML={{__html: md.renderInline(sibling.content)}}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }

  renderToc() {
    if (!this.isSelected() || this.state.collapsed) {
      return null;
    }

    const list = this.props.tocArray.filter((heading) => heading.level !== 1 && heading.level < 4);

    return this.renderTransformedToc(
      this.transformTocArray(list),
      this.props.path
    );
  }

  onHeadingClick() {
    if (this.isSelected()) {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }

  isSelected(props) {
    props = props || this.props;

    return this.props.location && this.props.location.pathname === this.props.path;
  }

  render() {
    const { path, text } = this.props;

    return (
      <li className="Sidebar-List-Item">
        <Link
          to={path}
          activeClassName="is-active"
          onClick={this.onHeadingClick.bind(this)}
        >
          {text} <Icon glyph="internal-link" />
        </Link>
        {this.renderToc(path)}
      </li>
    );
  }
}

SidebarListItem.propTypes = {
  text: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  location: React.PropTypes.object.isRequired,
  tocArray: React.PropTypes.array.isRequired
};

class Sidebar extends React.Component {
  renderList(items, route, category) {
    const listItems = items.map((item) => {
      if (!category || item.category === category) {
        return (
          <SidebarListItem
            key={item.slug}
            path={`/${route}/${item.slug}`}
            text={item.text}
            location={this.props.location}
            tocArray={this.props.tocArray}
          />
        );
      }
    });
    return (
      <div className="u-noMargin">
        <p className="Sidebar-SubHeading SubHeading">
          {category}
        </p>
        <ul className="Sidebar-List">
          {listItems}
        </ul>
      </div>
    );
  }

  render() {
    /* eslint-disable max-len */
    return (
      <div className="Page-sidebar">
        <nav className="Sidebar">
          <div className="Sidebar-Grid">
            <p className="Sidebar-Heading u-noMargin u-noPadding">
              Introduction
            </p>
            <ul className="Sidebar-List">
              <li key="sidebarlink-index" className="Sidebar-List-Item">
                <Link to="/docs" activeClassName="is-active">
                  Getting Started <Icon glyph="internal-link" />
                </Link>
              </li>
              <li key="sidebarlink-native" className="Sidebar-List-Item">
                <Link to="/docs/native" activeClassName="is-active">
                  Native <Icon glyph="internal-link" />
                </Link>
              </li>
              <li key="sidebarlink-contributing" className="Sidebar-List-Item">
                <a href="https://github.com/FormidableLabs/victory/#contributing">
                  Contributing <Icon glyph="external-link" />
                </a>
              </li>
            </ul>
            <p className="Sidebar-Heading">
              Guides
            </p>
            {this.renderList(this.props.guides, "guides")}
            <p className="Sidebar-Heading u-noMarginTop">
              Documentation
            </p>
            {this.renderList(this.props.docs, "docs", "chart")}
            {this.renderList(this.props.docs, "docs", "core")}
            {this.renderList(this.props.docs, "docs", "more")}
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
  guides: React.PropTypes.array,
  location: React.PropTypes.object,
  tocArray: React.PropTypes.array
};

Sidebar.defaultProps = {
  active: null,
  docs: config,
  guides: configGuides
};

export default Sidebar;

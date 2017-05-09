import React from "react";
import { Link } from "react-router";

// Children
import SidebarSelectableItem from "./selectable-item";
import search from "./search";
import Icon from "../icon";

class SidebarList extends React.Component {
  renderList(items) {
    return items
      .filter((item) => this.isMatchingNode(item))
      .map((item) => {
        const toc = item.children.filter((t) => this.isMatchingNode(t));
        const alwaysExpand = this.props.isSearching && toc.length > 0;

        return (
          <SidebarSelectableItem
            key={item.slug}
            path={`/${item.route}/${item.slug}`}
            text={item.text}
            toc={toc}
            location={this.props.location}
            alwaysExpand={alwaysExpand}
          />
        );
      });
  }

  isMatchingNode(node) {
    return search.isInMatching(node, this.props.matchingNodes);
  }

  render() {
    const content = this.props.content
      .filter((heading) => heading.render !== false)
      .filter((heading) => this.isMatchingNode(heading))
      .map((heading, i) => {
        const subheadings = heading.children
          .filter((subheading) => {
            return subheading.text ? this.isMatchingNode(subheading) : true;
          })
          .map((subheading, subheadingIndex) => {
            return (
              <div
                key={subheading.text || `${i}-${subheadingIndex}`}
              >
                <p className="Sidebar-SubHeading SubHeading">
                  {subheading.text}
                </p>
                <ul className="Sidebar-List">
                  {this.renderList(subheading.children)}
                </ul>
              </div>
            );
          });

        return (
          <div key={heading.text} className="Sidebar-Grid-block">
            <p className="Sidebar-Heading">
              {heading.text}
            </p>
            {subheadings}
          </div>
        );
      });

    return (
      <div className="Sidebar-Grid">
        { this.isMatchingNode({ id: -1 }) ?
          <p className="Sidebar-Heading u-noPadding">
            Introduction
          </p>
          : null
        }
        <ul className="Sidebar-List">
          { this.isMatchingNode({ id: -2 }) ?
            <li key="sidebarlink-index" className="Sidebar-List-Item">
              <Link to="/docs" activeClassName="is-active">
                Getting Started <Icon glyph="internal-link" />
              </Link>
            </li>
            : null
          }
          { this.isMatchingNode({ id: -3 }) ?
            <li key="sidebarlink-native" className="Sidebar-List-Item">
              <Link to="/docs/native" activeClassName="is-active">
                Native <Icon glyph="internal-link" />
              </Link>
            </li>
            : null
          }
          { this.isMatchingNode({ id: -4 }) ?
            <li key="sidebarlink-contributing" className="Sidebar-List-Item">
              <a href="https://github.com/FormidableLabs/victory/#contributing">
                Contributing <Icon glyph="external-link" />
              </a>
            </li>
            : null
          }
        </ul>
        {content}
      </div>
    );
  }
}

SidebarList.propTypes = {
  isSearching: React.PropTypes.bool.isRequired,
  location: React.PropTypes.object.isRequired,
  content: React.PropTypes.object.isRequired,
  matchingNodes: React.PropTypes.object.isRequired
};

export default SidebarList;

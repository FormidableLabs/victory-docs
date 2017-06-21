import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { times } from "lodash";
import Icon from "../icon";

class SidebarSelectableItem extends React.Component {
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
                  to={`${targetLocation}#${sibling.anchor.replace(/-code-/g, "")}`}
                  dangerouslySetInnerHTML={{__html: sibling.markdown}}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }

  renderToc() {
    if ((!this.isSelected() || this.state.collapsed) && !this.props.alwaysExpand) {
      return null;
    }

    const list = this.props.toc.filter((heading) => heading.level !== 1 && heading.level < 4);

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

SidebarSelectableItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  toc: PropTypes.array.isRequired,
  alwaysExpand: PropTypes.bool
};

SidebarSelectableItem.defaultProps = {
  alwaysExpand: false
};

export default SidebarSelectableItem;

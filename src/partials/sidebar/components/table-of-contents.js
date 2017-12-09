import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { maxBy, minBy, isEmpty } from "lodash";

class TableOfContents extends React.Component {

  getTree(headings) {
    if (!headings || !headings.length) {
      return [];
    }
    const depth = minBy(headings, "depth").depth;
    const maxDepth = maxBy(headings, "depth").depth;
    if (depth === maxDepth) {
      return headings;
    }
    const parentIndices = headings.reduce((memo, curr, index) => {
      if (curr.depth === depth) {
        memo = memo.concat(index);
      }
      return memo;
    }, []);
    return parentIndices.reduce((memo, curr, index) => {
      const lastChild = index === parentIndices.length + 1 ? undefined : parentIndices[index + 1];
      const children = [headings.slice(curr + 1, lastChild)];
      memo = children.length > 0 ? memo.concat(headings[curr], children) : memo.concat(headings[curr]);
      return memo;
    }, []);
  }

  getTOC(link, headings, i = 0) {
    const tree = this.getTree(headings);
    if (!tree.length) {
      return null;
    }

    const toAnchor = (content) => {
      const baseContent = content.toLowerCase();
      const safeString = baseContent.replace(/[^\w]+/g, " ");
      return safeString.trim().replace(/\s/g, "-");
    };
    const depth = minBy(headings, "depth").depth;
    return (
      <ul key={`${i}-${depth}`} className="Sidebar-toc">
        {tree.map((item, index) => {
          if (Array.isArray(item)) {
            return (
              <li key={`${i}-${depth}`} className="Sidebar-toc-item">
                {this.getTOC(link, item, i++)}
              </li>
            );

          }
          return item.depth > 1 ?
            (
              <li key={index} className="Sidebar-toc-item">
                <Link to={`${link.fields.slug}#${toAnchor(item.value)}`}>
                  {item.value}
                </Link>
              </li>
            ) : null;
        })}
      </ul>
    );
  }

  render() {
    const { active, link, headings } = this.props;
    return active && !isEmpty(headings) ?
      this.getTOC(link, headings) : null;
  }
}

TableOfContents.propTypes = {
  active: PropTypes.bool,
  headings: PropTypes.array,
  link: PropTypes.object
};

export default TableOfContents;

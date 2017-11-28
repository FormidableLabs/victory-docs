import React from "react";
import PropTypes from "prop-types";
import { maxBy, minBy } from "lodash";

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
      <ul key={`${i}-${depth}`}>
        {tree.map((item, index) => {
          if (Array.isArray(item)) {
            return this.getTOC(link, item, i++);
          }
          return (
            <li key={index}>
              {
                item.depth > 2 ?
                <a href={`${link.fields.slug}#${toAnchor(item.value)}`}>{item.value}</a> :
                <p><a href={`${link.fields.slug}#${toAnchor(item.value)}`}>{item.value}</a></p>
              }
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const { active, link, headings } = this.props;
    return active && Array.isArray(headings) && headings.length ?
      (
        <div className="Sidebar-toc">
          {this.getTOC(link, headings)}
        </div>
      ) : null;
  }
}

TableOfContents.propTypes = {
  active: PropTypes.bool,
  headings: PropTypes.array,
  link: PropTypes.object
};

export default TableOfContents;

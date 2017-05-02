import React from "react";

export default class PureRender extends React.Component {
  shouldComponentUpdate(nextProps) {
    return Object.keys(nextProps).reduce((changed, key) => {
      if (changed) {
        return true; // if any prop has changed, update the component
      } else {
        const current = this.props[key];
        const next = nextProps[key];
        if (typeof next === "object") {
          return false; // don't attempt to evaluate objects
        } else {
          return (next !== current); // has the value changed?
        }
      }
    }, false);
  }
  render() {
    return this.props.children;
  }
}

PureRender.propTypes = {
  children: React.PropTypes.any
};

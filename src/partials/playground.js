import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Playground from "component-playground";
import * as Victory from "victory";

const scopeMap = {
  "random": require("lodash").random,
  "range": require("lodash").range,
  "round": require("lodash").round,
  "sampleData": [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
  ],
  "sampleDataDates": [
    {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
    {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
    {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
    {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
    {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5}
  ]
};

class WithPlayground extends React.Component {
  static propTypes = {
    content: PropTypes.string,
    scope: PropTypes.array,
    theme: PropTypes.string
  };
  
  findPlayground(className) {
    return ReactDOM.findDOMNode(this.content).getElementsByClassName(className);
  }
  
  mountContainer(source, noRender) {
    const {scope, theme } = this.props;
    
    const scopeObject = scope && scope.reduce((obj, key) =>
      Object.assign(obj, {[key]: scopeMap[key]}),
    {}) || {};
    
    const playgroundScope = Object.assign({}, 
      scopeObject,
      { ...Victory, React, ReactDOM });

    return (
      <div className="Interactive">
        <Playground 
          codeText={source} 
          noRender={noRender}
          theme={theme}
          scope={playgroundScope}
        />
      </div>
    );
  }
  
  renderPlaygrounds() {
    // innerText, innerHTML, outerHTML, outerText, textContent
    const playgrounds = Array.prototype.slice.call(this.findPlayground("language-playground"), 0);
    for (const p in playgrounds) {
      if (playgrounds.hasOwnProperty(p)) {
        const source = playgrounds[p].textContent;
        ReactDOM.render(
          this.mountContainer(source, true),
          playgrounds[p].parentNode
        );
      }
    }
    
    const playgroundsNoRender = Array.prototype.slice.call(this.findPlayground("language-playground_norender"), 0);
    for (const p in playgroundsNoRender) {
      if (playgroundsNoRender.hasOwnProperty(p)) {
        const source = playgroundsNoRender[p].textContent;
        ReactDOM.render(
          this.mountContainer(source, false),
          playgroundsNoRender[p].parentNode
        );
      }
    }
  }
  
  componentDidMount() {
    this.renderPlaygrounds();
  }
  
  render() {
    const { html } = this.props;
  
    return (
      <div
        key="content"
        ref={content => { this.content = content; }} 
        dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}

export default WithPlayground; 
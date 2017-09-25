import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Playground from "component-playground";

const scopeMap = {
  "random": require("lodash").random,
  "range": require("lodash").range,
  "sampleData": [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
  ],
  "VictoryArea": require("victory").VictoryArea,
  "VictoryAxis": require("victory").VictoryAxis,
  "VictoryBar": require("victory").VictoryBar,
  "VictoryChart": require("victory").VictoryChart,
  "VictoryClipContainer": require("victory").VictoryClipContainer,
  "VictoryCursorContainer": require("victory").VictoryCursorContainer,
  "VictoryContainer": require("victory").VictoryContainer,
  "VictoryLabel": require("victory").VictoryLabel,
  "VictoryLine": require("victory").VictoryLine,
  "VictoryPolarAxis": require("victory").VictoryPolarAxis, 
  "VictoryScatter": require("victory").VictoryScatter, 
  "VictoryStack": require("victory").VictoryStack, 
  "VictoryTheme": require("victory").VictoryTheme
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
      { React: React, 
        ReactDOM: ReactDOM 
      });

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
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Playground from "component-playground";

const scopeMap = {
  "VictoryAxis": require("victory").VictoryAxis,
  "VictoryBar": require("victory").VictoryBar,
  "VictoryChart": require("victory").VictoryChart,
  "VictoryContainer": require("victory").VictoryContainer,
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
    
    const scopeObject = scope.reduce((obj, key) =>
      Object.assign(obj, {[key]: scopeMap[key]}),
    {});
    
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
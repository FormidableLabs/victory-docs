import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Playground from "component-playground";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from "react-live";

import {
  VictoryPie, 
  VictoryContainer, 
  VictoryLabel, 
  VictoryChart, 
  VictoryLine, 
  VictoryAxis,
  VictoryBar, 
  VictoryScatter, 
  VictoryStack, 
  VictoryPortal
} from "victory";

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
    return (
      <Playground 
        codeText={source} 
        noRender={noRender}
        scope={{
          React, 
          ReactDOM,
          VictoryPie, 
          VictoryContainer, 
          VictoryLabel, 
          VictoryChart, 
          VictoryLine, 
          VictoryAxis,
          VictoryBar, 
          VictoryScatter, 
          VictoryStack, 
          VictoryPortal
        }}
      />
    );
  }
  
  renderPlaygrounds() {
    // innerText, innerHTML, outerHTML, outerText, textContent
    const playgrounds = Array.prototype.slice.call(this.findPlayground("language-playground"), 0);
    for (const p in playgrounds) {
      console.log('playgrounds.hasOwnProperty(p)', playgrounds.hasOwnProperty(p));
      if (playgrounds.hasOwnProperty(p)) {
        const source = playgrounds[p].textContent;
        // const source = playgrounds[p].getElementsByClassName("js-playground")[0].textContent;
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
    const { html, scope, theme } = this.props;
  
    return (
      <div
        key="content"
        ref={content => { this.content = content; }} 
        dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}

export default WithPlayground; 
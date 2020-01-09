import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ComponentPlayground from "component-playground";
import * as Victory from "victory";
import { withTheme } from "styled-components";
import scopeMap from "./scope-map";
import PlaygroundContainer from "./playground-container";

class Playground extends React.Component {
  componentDidMount() {
    this.renderPlaygrounds();
  }

  // this is an extremely inefficient way of doing things, the #1 way we can
  // improve doc site perf is by optimizing how we render playgrounds
  componentDidUpdate() {
    this.renderPlaygrounds();
  }

  mountContainer(source, noRender) {
    const { playgroundTheme, scope, theme } = this.props;

    const scopeObject =
      (scope &&
        scope.reduce(
          (obj, key) => Object.assign(obj, { [key]: scopeMap[key] }),
          {}
        )) ||
      {};

    const playgroundScope = Object.assign({}, scopeObject, {
      ...Victory,
      React,
      ReactDOM
    });

    return (
      // need to pass in the theme since the playgrounds are mounted as
      // separate react component trees that don't share the context of
      // the original tree
      <PlaygroundContainer theme={theme}>
        <ComponentPlayground
          codeText={source}
          noRender={noRender}
          theme={playgroundTheme}
          scope={playgroundScope}
        />
      </PlaygroundContainer>
    );
  }

  renderPlaygrounds() {
    // innerText, innerHTML, outerHTML, outerText, textContent
    const playgrounds = Array.prototype.slice.call(
      this.findPlayground("language-playground"),
      0
    );
    for (const p in playgrounds) {
      if (playgrounds.hasOwnProperty(p)) {
        const source = playgrounds[p].textContent;
        ReactDOM.render(
          this.mountContainer(source, true),
          playgrounds[p].parentNode
        );
      }
    }

    const playgroundsNoRender = Array.prototype.slice.call(
      this.findPlayground("language-playground_norender"),
      0
    );
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

  findPlayground(className) {
    // eslint-disable-next-line react/no-find-dom-node
    return ReactDOM.findDOMNode(this.content).getElementsByClassName(className);
  }

  render() {
    const { html } = this.props;

    return (
      <div
        key="content"
        ref={content => {
          this.content = content;
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}

Playground.propTypes = {
  content: PropTypes.string,
  html: PropTypes.string,
  playgroundTheme: PropTypes.string,
  scope: PropTypes.array,
  theme: PropTypes.object // styled-components theme
};

export default withTheme(Playground);

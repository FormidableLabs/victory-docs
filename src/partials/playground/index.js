import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ComponentPlayground from "component-playground";
import * as Victory from "victory";
import styled, { withTheme } from "styled-components";
import scopeMap from "./scope-map";
import PlaygroundContainer from "./playground-container";

const Wrapper = styled.div`
  p,
  li {
    padding: 1rem 0;
    line-height: 2.4rem;
  }
`;

const Playground = props => {
  const { playgroundTheme, scope, theme, html } = props;
  let ref = useRef();

  const findPlayground = className => {
    // eslint-disable-next-line react/no-find-dom-node
    return ReactDOM.findDOMNode(ref).getElementsByClassName(className);
  };

  // eslint-disable-next-line react/no-multi-comp
  const mountContainer = (source, noRender) => {
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
  };

  const renderPlaygrounds = () => {
    // innerText, innerHTML, outerHTML, outerText, textContent
    const playgrounds = Array.prototype.slice.call(
      findPlayground("language-playground"),
      0
    );
    for (const p in playgrounds) {
      if (playgrounds.hasOwnProperty(p)) {
        const source = playgrounds[p].textContent;
        ReactDOM.render(
          mountContainer(source, true),
          playgrounds[p].parentNode
        );
      }
    }
    const playgroundsNoRender = Array.prototype.slice.call(
      findPlayground("language-playground_norender"),
      0
    );
    for (const p in playgroundsNoRender) {
      if (playgroundsNoRender.hasOwnProperty(p)) {
        const source = playgroundsNoRender[p].textContent;
        ReactDOM.render(
          mountContainer(source, false),
          playgroundsNoRender[p].parentNode
        );
      }
    }
  };

  useEffect(() => {
    renderPlaygrounds();
  });

  return (
    <Wrapper
      key="content"
      ref={content => {
        ref = content;
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

Playground.propTypes = {
  content: PropTypes.string,
  html: PropTypes.string,
  playgroundTheme: PropTypes.string,
  scope: PropTypes.array,
  theme: PropTypes.object // styled-components theme
};

export default withTheme(Playground);

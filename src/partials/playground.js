import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Playground from "component-playground";
import * as Victory from "victory";

const scopeMap = {
  _: require("lodash"),
  assign: require("lodash").assign,
  random: require("lodash").random,
  range: require("lodash").range,
  round: require("lodash").round,
  sampleData: [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
  ],
  sampleDataDates: [
    { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
    { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
    { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
    { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 }
  ],
  sampleDataPolar: [
    { x: 45, y: 2 },
    { x: 90, y: 3 },
    { x: 135, y: 5 },
    { x: 180, y: 4 },
    { x: 225, y: 7 },
    { x: 270, y: 2 },
    { x: 315, y: 4 },
    { x: 360, y: 7 }
  ]
};

class WithPlayground extends React.Component {
  static propTypes = {
    content: PropTypes.string,
    html: PropTypes.string,
    scope: PropTypes.array,
    theme: PropTypes.string
  };

  componentDidMount() {
    this.renderPlaygrounds();
  }

  mountContainer(source, noRender) {
    const { scope, theme } = this.props;

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
        ref={(content) => {
          this.content = content;
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}

export default WithPlayground;

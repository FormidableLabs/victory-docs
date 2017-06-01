import React, { Component } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import ReactDOMServer from "react-dom/server";
import { transform } from "babel-standalone";

// <Preview> component from component-playground without updating
class Preview extends Component {
  static defaultProps = {
    previewComponent: "div"
  };

  static propTypes = {
    codeText: PropTypes.string.isRequired,
    scope: PropTypes.object.isRequired,
    previewComponent: PropTypes.node,
    noRender: PropTypes.bool,
    context: PropTypes.object,
    theme: PropTypes.string
  };

  compileCode() {
    const { codeText, context, noRender, scope } = this.props;
    const generateContextTypes = (c) => {
      return `{ ${Object.keys(c).map((val) =>
        `${val}: PropTypes.any.isRequired`).join(", ")} }`;
    };

    if (noRender) {
      return transform(`
        ((${Object.keys(scope).join(", ")}, mountNode) => {
          class Comp extends React.Component {
            getChildContext() {
              return ${JSON.stringify(context)};
            }
            render() {
              return (
                ${codeText}
              );
            }
          }
          Comp.childContextTypes = ${generateContextTypes(context)};
          return Comp;
        });
      `, { presets: ["es2015", "react", "stage-1"] }).code;
    } else {
      return transform(`
        ((${Object.keys(scope).join(",")}, mountNode) => {
          ${codeText}
        });
      `, { presets: ["es2015", "react", "stage-1"] }).code;
    }
  }

  executeCode() {
    const mountNode = this.refs.mount;
    const { scope, noRender, previewComponent } = this.props;
    const tempScope = [];

    Object.keys(scope).forEach((s) => tempScope.push(scope[s]));
    tempScope.push(mountNode);
    const compiledCode = this.compileCode();
    if (noRender) {
      /* eslint-disable no-eval, prefer-spread */
      const Comp = React.createElement(
        eval(compiledCode).apply(null, tempScope)
      );
      ReactDOMServer.renderToString(React.createElement(previewComponent, {}, Comp));
      render(
        React.createElement(previewComponent, {}, Comp),
        mountNode
      );
    } else {
      eval(compiledCode).apply(null, tempScope);
    }
  }

  componentDidMount() {
    this.executeCode();
  }

  render() {
    return (
        <div ref="mount" className="Preview"/>
    );
  }

}

export default Preview;

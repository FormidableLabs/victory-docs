import React from "react";
import ReactDOM from "react-dom";
import Playground from "component-playground";
import { assign } from "lodash";
import Link from "gatsby-link";

import PureRender from "../../partials/guides/themes/pure-render";
import DemoComponent from "../../partials/guides/themes/demo-component";

class Themes extends React.Component {
  static toc() {
    return [];
  }

  constructor() {
    super();
    this.state = {
      themeName: "grayscale",
      editted: false
    };
    // just load once
    this.themeTexts = {
      grayscale: this.processCodeText(require("!!raw!../../partials/guides/themes/grayscale.example.js")),
      material: this.processCodeText(require("!!raw!../../partials/guides/themes/material.example.js"))
    };
  }

  processCodeText(text) {
    return text
            .replace(/\/\* [global|eslint|NOTE](.|[\n])*?\*\//g, "") // remove dev comments
            .trim(); // remove left-over whitespace
  }
  resetTheme(themeName) {
    this.setState({ themeName });
    this.setState({ editted: false });
  }
  handleUserEdit() {
    this.setState({ editted: true });
  }
  getCodeText() {
    return this.themeTexts[this.state.themeName];
  }
  renderMenu() {
    return (
      <div className="ThemeParkMenu">
        <div className="ThemeParkMenu-Bar">
          <button className="btn" onClick={this.resetTheme.bind(this, "grayscale")}>
            reset to <b>grayscale</b>
          </button>
          <button className="btn" onClick={this.resetTheme.bind(this, "material")}>
            reset to <b>material</b>
          </button>
        </div>
        <h3 className="ThemeParkMenu-Title">
          Viewing the <strong>{this.state.themeName}
          {this.state.editted ? "*" : ""}</strong> theme
        </h3>
      </div>
    );
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div className="Recipe">
        <h1>Themes</h1>
        <p>
          Try out the Victory themes and make your own.
          Check out
          the <Link to="docs/victory-theme">
            VictoryTheme documentation
          </Link> for more details on themes.
        </p>
        {this.renderMenu()}
        <PureRender themeName={this.state.themeName} editted={this.state.editted}>
          <pre className="u-noMarginTop u-noPadding">
            <div className="Interactive" onKeyPress={this.handleUserEdit.bind(this)}>
              <Playground
                codeText={this.getCodeText()}
                scope={{
                  React,
                  ReactDOM,
                  assign,
                  DemoComponent
                }}
                theme="elegant"
                noRender={false}
              />
            </div>
          </pre>
        </PureRender>
      </div>
    );
  }
}

export default Themes;

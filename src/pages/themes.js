import React from "react";
import ReactDOM from "react-dom";
import Playground from "component-playground";
import { assign } from "lodash";
import { Link } from "react-static";

import PlaygroundContainer from "../partials/playground/playground-container";
import PureRender from "../partials/guides/themes/pure-render";
import DemoComponent from "../partials/guides/themes/demo-component";

class Themes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeName: "grayscale",
      edited: false
    };

    // so we were using the raw file loader (yup, good old !!raw) to bring these in as text,
    // which apparently causes problems using a two-pass render system where the constructor
    // gets called client side, or perhaps it was a webpack loader issue with the raw loader
    // plugin version and our webpack version or I'm dumb and I connected it incorrectly. Seems to
    // be the same as using a template literal, so now we're using a template literal.
    // It just loads once, regardless.
    this.themeTexts = {
      grayscale: this.processCodeText(
        require("../partials/guides/themes/grayscale.example.js").default
      ),
      material: this.processCodeText(
        require("../partials/guides/themes/material.example.js").default
      )
    };
  }

  processCodeText(text) {
    return text
      .replace(/\/\* [global|eslint|NOTE](.|[\n])*?\*\//g, "") // remove dev comments
      .trim(); // remove left-over whitespace
  }
  resetTheme(themeName) {
    this.setState({ themeName });
    this.setState({ edited: false });
  }
  handleUserEdit() {
    this.setState({ edited: true });
  }
  getCodeText() {
    return this.themeTexts[this.state.themeName];
  }
  renderMenu() {
    return (
      <div className="ThemeParkMenu">
        <div className="ThemeParkMenu-Bar">
          <button
            className="btn"
            onClick={this.resetTheme.bind(this, "grayscale")}
          >
            reset to <b>grayscale</b>
          </button>
          <button
            className="btn"
            onClick={this.resetTheme.bind(this, "material")}
          >
            reset to <b>material</b>
          </button>
        </div>
        <h3 className="ThemeParkMenu-Title">
          Viewing the{" "}
          <strong>
            {this.state.themeName}
            {this.state.edited ? "*" : ""}
          </strong>{" "}
          theme
        </h3>
      </div>
    );
  }

  render() {
    return (
      <div className="Recipe">
        <h1>Themes</h1>
        <p>
          Try out the Victory themes and make your own. Check out the{" "}
          <Link to="/docs/victory-theme/">VictoryTheme documentation</Link> for
          more details on themes.
        </p>
        {this.renderMenu()}
        <PureRender themeName={this.state.themeName} edited={this.state.edited}>
          <pre className="u-noMarginTop u-noPadding">
            <div
              className="Interactive"
              onKeyPress={this.handleUserEdit.bind(this)}
            >
              <PlaygroundContainer>
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
              </PlaygroundContainer>
            </div>
          </pre>
        </PureRender>
      </div>
    );
  }
}

export default Themes;

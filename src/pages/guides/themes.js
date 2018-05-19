import React from "react";
import ReactDOM from "react-dom";
import Playground from "component-playground";
import { assign } from "lodash";
import Link from "gatsby-link";

import Footer from "../../partials/footer";
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
      edited: false
    };
    // just load once
    this.themeTexts = {
      grayscale: this.processCodeText(
        require("!!raw!../../partials/guides/themes/grayscale.example.js")
      ),
      material: this.processCodeText(
        require("!!raw!../../partials/guides/themes/material.example.js")
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
      <div className="Page-content">
        <article className="Article">
          <div className="Recipe">
            <h1>Themes</h1>
            <p>
              Try out the Victory themes and make your own. Check out the{" "}
              <Link to="/docs/victory-theme/">VictoryTheme documentation</Link>{" "}
              for more details on themes.
            </p>
            {this.renderMenu()}
            <PureRender
              themeName={this.state.themeName}
              edited={this.state.edited}
            >
              <pre className="u-noMarginTop u-noPadding">
                <div
                  className="Interactive"
                  onKeyPress={this.handleUserEdit.bind(this)}
                >
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
        </article>
        <Footer />
      </div>
    );
  }
}

export default Themes;

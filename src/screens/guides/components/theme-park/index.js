import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Playground from "component-playground";
import { assign } from "lodash";
import { Link } from "react-router";

import Icon from "../../../../components/icon";

import PureRender from "./pure-render";
import DemoComponent from "./demo-component";

const RadiumLink = Radium(Link);

class ThemePark extends React.Component {
  constructor() {
    super();
    this.state = {
      themeName: "grayscale",
      editted: false
    };
    // just load once
    this.themeTexts = {
      grayscale: this.processCodeText(require("!!raw!./grayscale.example.js")),
      material: this.processCodeText(require("!!raw!./material.example.js"))
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

  componentDidMount() {
    this.props.updateTocArray([]);
  }

  render() {
    return (
      <div className="Recipe">
        <h1>Themes</h1>
        <p>
          Try out the Victory themes and make your own.
          Check out
          the <RadiumLink to="docs/victory-theme">
            VictoryTheme documentation<Icon glyph="internal-link" />
          </RadiumLink> for more details on themes.
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

ThemePark.propTypes = {
  updateTocArray: React.PropTypes.func.isRequired
};

export default Radium(ThemePark);

import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style } from "radium";
import Playground from "component-playground";
import { assign } from "lodash";
import { VictorySettings } from "formidable-landers";
import { VictoryTheme } from "victory";
import PureRender from "./pure-render";

import DemoComponent from "./demo-component";

class ThemePark extends React.Component {
  constructor() {
    super();
    this.state = {
      themeName: "default",
      editted: false
    };
    // just load once
    this.themeTexts = {
      default: this.processCodeText(require("!!raw!./default.example.js")),
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
    const menuClass = "ThemeParkMenu";
    const barClass = "ThemeParkMenuBar";
    const themeNameClass = "ThemeParkThemeName";
    const styleRules = {
      [`.${menuClass}`]: {
        backgroundColor: VictorySettings.whiteSand,
        margin: "20px -40px -40px"
      },
      [`.${menuClass} button`]: {
        // remove button styling
        margin: 0,
        padding: 0,
        border: 0,
        background: "transparent",
        fontSize: "inherit",
        fontFamily: "inherit",
        cursor: "pointer",
        outline: "none",
        // make it do the thing
        marginLeft: "25px",
        textAlign: "center"
      },
      [`.${menuClass} button:hover`]: {
        textDecoration: "underline"
      },
      [`.${menuClass} h3.${themeNameClass}`]: { // theme name
        textTransform: "none",
        textAlign: "center",
        padding: 30,
        margin: "0 40px",
        maxWidth: "none"
      },
      [`.${menuClass} .${barClass}`]: { // menu
        padding: "17px 0 17px 40px",
        backgroundColor: "rgba(0,0,0,0)"
      },
      [`.${menuClass} .${barClass}:hover`]: {
        backgroundColor: "rgba(0,0,0,0.05)"
      },
      mediaQueries: {
        [VictorySettings.mediaQueries.large]: {
          [`.${menuClass}`]: {
            margin: "20px -60px -40px"
          }
        }
      }
    };
    return (
      <div className={menuClass}>
        <div className={barClass}>
          <button onClick={this.resetTheme.bind(this, "default")}>
            reset to <b>default</b>
          </button>
          <button onClick={this.resetTheme.bind(this, "material")}>
            reset to <b>material</b>
          </button>
        </div>
        <h3 className={themeNameClass}>
          {this.state.themeName}
          {this.state.editted ? "*" : ""}
        </h3>
        <Style rules={styleRules}/>
      </div>
    );
  }
  render() {
    return (
      <div className="Recipe">
        <div className="Overview">
          <h1>Theme Park</h1>
          <p>
            Try out the Victory themes and make your own.
          </p>
        </div>
        {this.renderMenu()}
        <PureRender themeName={this.state.themeName} editted={this.state.editted}>
          <pre>
            <div className="Interactive" onKeyPress={this.handleUserEdit.bind(this)}>
              <Playground
                codeText={this.getCodeText()}
                scope={{
                  React,
                  ReactDOM,
                  assign,
                  VictoryTheme,
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

export default Radium(ThemePark);

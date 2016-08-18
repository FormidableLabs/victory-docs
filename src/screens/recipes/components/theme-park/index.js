  import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style } from "radium";
import Playground from "component-playground";
import { assign, times } from "lodash";
import {
  VictoryChart, VictoryScatter, VictoryPie, VictoryLine, VictoryStack, VictoryBar, VictoryAxis
} from "victory";

import { VictorySettings } from "formidable-landers";

const scatterData = times(20, (i) => ({
  x: (i - 10) / 3,
  y: i / 2 - 2 * Math.random() - 4
}));

const toInteger = (number) => parseInt(number).toString();

class DemoVictoryComponent extends React.Component {
  render() {
    const { theme } = this.props;
    const positions = [
      {transform: "translate(0, -15)"},
      {transform: "translate(180, -40)"},
      {transform: "translate(-10, 140)"},
      {transform: "translate(180, 140)"}
    ];
    return (
      <svg viewBox="0 0 400 400" role="img" aria-labelledby="title desc"
        style={{height: "auto", width: "100%"}}
      >
        <g transform={positions[0].transform}>
          <VictoryPie theme={theme} standalone={false} height={200}/>
        </g>

        <g transform={positions[1].transform}>
          <VictoryChart theme={theme} standalone={false} height={250} width={250}>
            <VictoryAxis tickCount={3} tickFormat={toInteger}/>
            <VictoryAxis tickCount={4} dependentAxis/>
            <VictoryScatter
              size={2}
              data={scatterData}
            />
          </VictoryChart>
        </g>

        <g transform={positions[2].transform}>
          <VictoryChart theme={theme} standalone={false} height={250} width={200}>
            <VictoryAxis tickCount={4} domain={[0, 3]} tickFormat={toInteger}/>
            <VictoryAxis tickCount={4} dependentAxis domain={[0, 10]}/>
            <VictoryLine
              y={(data) => data.x * data.x}
            />
          </VictoryChart>
        </g>

        <g transform={positions[3].transform}>
          <VictoryChart
            standalone={false}
            theme={theme}
            height={250}
            width={250}
            domainPadding={{x: 50}}
          >
            <VictoryAxis tickValues={["A", "B", "C"]}/>
            <VictoryAxis tickCount={3} dependentAxis/>
            <VictoryStack>
              <VictoryBar
                data={[
                  {x: "apples", y: 1},
                  {x: "bananas", y: 3},
                  {x: "oranges", y: 3}
                ]}
              />
              <VictoryBar
                data={[
                  {x: "apples", y: 2},
                  {x: "bananas", y: 1},
                  {x: "oranges", y: 3}
                ]}
              />
              <VictoryBar
                data={[
                  {x: "apples", y: 3},
                  {x: "bananas", y: 1},
                  {x: "oranges", y: 1}
                ]}
              />
            </VictoryStack>
          </VictoryChart>
        </g>
      </svg>
    );
  }
}

DemoVictoryComponent.propTypes = {
  theme: React.PropTypes.object
};

class PureRender extends React.Component {
  shouldComponentUpdate(nextProps) {
    return Object.keys(nextProps).reduce((changed, key) => {
      if (changed) {
        return true; // if any prop has changed, update the component
      } else {
        const current = this.props[key];
        const next = nextProps[key];
        if (typeof next === "object") {
          return false; // don't attempt to evaluate objects
        } else {
          return (next !== current); // has the value changed?
        }
      }
    }, false);
  }
  render() {
    return this.props.children;
  }
}

PureRender.propTypes = {
  children: React.PropTypes.any
};

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
                  DemoVictoryComponent
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

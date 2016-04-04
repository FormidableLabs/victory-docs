import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";

import { Link } from "react-router";
import Ecology from "ecology";
import { VictoryChart, VictoryLine, VictoryPie } from "victory";

// Settings
import { VictorySettings } from "formidable-landers";

// Child Components
import Hero from "./components/hero";

class Home extends React.Component {
  getStyles() {
    return {
      container: {
        display: "block"
      },
      main: {
        margin: "1rem 0 0 0",
        padding: "1rem 0.5rem",
        "@media (min-width: 70em)": {
          flex: "1",
          margin: 0,
          padding: "60px 1rem"
        }
      },
      demoHeading: {
        marginTop: 0,
        color: VictorySettings.red
      },
      demo: {
        marginTop: `${VictorySettings.gutter}px`,
        padding: `${VictorySettings.gutter*3}px ${VictorySettings.gutter*2}px`,
        backgroundColor: VictorySettings.palestSand
      },
      ecology: {
        marginLeft: `-${VictorySettings.gutter*2}px`,
        marginRight: `-${VictorySettings.gutter*2}px`
      }
    };
  }


  render() {
    const styles = this.getStyles();
    return (
      <section style={styles.container}>
        <Hero />

        <div style={styles.demo}>
          <h2 style={styles.demoHeading}>Try it</h2>
          <p style={{maxWidth: "38em", marginLeft: "auto", marginRight: "auto"}}>
            <span className="Smallcaps">Editor’s note.</span>
            All of the following code examples in Victory Documentation are powered by our very own <a href="https://github.com/FormidableLabs/component-playground">
              Component Playground
            </a>; it renders editable source code and automatically updates the preview of the rendered component.
          </p>
          <div style={styles.ecology}>
            <Ecology
              overview={require("!!raw!./examples.md")}
              scope={{React, ReactDOM, VictoryChart, VictoryLine, VictoryPie}}
              playgroundtheme="elegant"
            />
          </div>
        </div>

        <h2>Benefits</h2>

        <h3>Friendly</h3>
        <p>
          <span className="Smallcaps">1.</span>
          The modular, componentized nature of React has allowed us to write fully-contained, reusable data visualization elements that are responsible for their own styles and behaviors.
        </p>

        <h3>Flexible</h3>
        <p>
          <span className="Smallcaps">2.</span>
          The use of sensible default props makes getting started very easy, without sacrificing flexibility. Victory also leverages React lifecycle methods and DOM diffing to create a lightweight animation wrapper.
        </p>

        <h3>Composable</h3>
        <p>
          <span className="Smallcaps">3.</span>
          When combined, these features result in a set of components that are easy to use, and compose into more complicated visualizations.
        </p>

        <div>
          <Link className="Button Button--spotlight" to="docs">Get Started</Link>
        </div>

        <h2>Quick links:</h2>
        <p>
          GitHub: <a href="https://github.com/FormidableLabs/victory">
            https://github.com/FormidableLabs/victory
          </a>
        </p>
        <p>
          Gitter chatroom: <a href="https://gitter.im/FormidableLabs/victory">
            https://gitter.im/FormidableLabs/victory
          </a>
        </p>
        <p>
          Roadmap: <a href="https://github.com/FormidableLabs/victory/blob/master/ROADMAP.md">
            ROADMAP.md
          </a>
        </p>
        <p className="Copy">Component docs:</p>
      </section>
    );
  }
}

export default Radium(Home);

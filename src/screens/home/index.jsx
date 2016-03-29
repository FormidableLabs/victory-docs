import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";

import { Link } from "react-router";
import Ecology from "ecology";
import { VictoryChart, VictoryLine, VictoryPie } from "victory";

// Child Components
import Hero from "./components/hero";

// Settings
import { VictorySettings } from "formidable-landers";

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
      }
    };
  }


  render() {
    const styles = this.getStyles();
    return (
      <section style={styles.container}>
        <Hero />
        <div className="Row">
          <div className="u-textCenter">
            <code className="Installer">npm install victory</code>
          </div>
        </div>

        <div>
          <Ecology
            overview={require("!!raw!./playgrounds.md")}
            scope={{React, ReactDOM, VictoryChart, VictoryLine, VictoryPie}}
            playgroundtheme="base16-dark"
          />
        </div>

        <div className="Row">
          <h2 className="u-textCenter">Friendly</h2>
          <p className="Copy">
            The modular, componentized nature of React has allowed us to write fully-contained, reusable data visualization elements that are responsible for their own styles and behaviors.
          </p>
        </div>

        <div className="Row">
          <h2 className="u-textCenter">Flexible</h2>
          <p className="Copy">
            The use of sensible default props makes getting started very easy, without sacrificing flexibility. Victory also leverages React lifecycle methods and DOM diffing to create a lightweight animation wrapper.
          </p>
        </div>

        <div className="Row">
          <h2 className="u-textCenter">Composable</h2>
          <p className="Copy">
            When combined, these features result in a set of components that are easy to use, and compose into more complicated visualizations.
          </p>
        </div>

        <div className="Row">
          <div className="Copy u-textCenter">
            <Link className="Button Button--spotlight" to="docs">Get Started</Link>
          </div>
        </div>

        <div className="Row">
          <h3 className="u-textCenter">Quick links:</h3>
          <p className="Copy">
            GitHub: <a href="https://github.com/FormidableLabs/victory">
              https://github.com/FormidableLabs/victory
            </a>
          </p>
          <p className="Copy">
            Gitter chatroom: <a href="https://gitter.im/FormidableLabs/victory">
              https://gitter.im/FormidableLabs/victory
            </a>
          </p>
          <p className="Copy">
            Roadmap: <a href="https://github.com/FormidableLabs/victory/blob/master/ROADMAP.md">
              ROADMAP.md
            </a>
          </p>
          <p className="Copy">Component docs:</p>
        </div>
      </section>
    );
  }
}

export default Radium(Home);

import React from "react";
import Radium from "radium";
import { Link } from "react-router";
const RadiumLink = Radium(Link);

// Common
import { VictorySettings } from "formidable-landers";
import Icon from "../../../components/icon";

import DemoCustomChart from "./demo-custom-chart";
import DemoSharedEvents from "./demo-shared-events";
import DemoCustomComponents from "./demo-custom-components";
import DemoTooltips from "./demo-tooltips";
import DemoZoom from "./demo-zoom";
import DemoAnimation from "./demo-animation";

class Benefits extends React.Component {
  getStyles() {
    return {
      link: {
        borderStyle: "solid",
        borderWidth: "39px 41px",
        borderImageSource: `url("./static/btn-border.svg")`,
        borderImageSlice: "39 41",
        borderImageRepeat: "repeat stretch",
        color: VictorySettings.red,
        display: "inline-block",
        fontFamily: `'freight-sans-pro', 'Work Sans', 'akkurat', 'Consolas', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Monaco', 'Courier', monospace`,
        fontSize: "1em",
        fontWeight: "normal",
        letterSpacing: "0.2em",
        lineHeight: 1,
        textTransform: "uppercase",
        padding: "30px 24px",
        width: "100%",
        transition: "color 300ms ease-out",
        ":hover": {
          color: VictorySettings.mud,
          transition: "color 300ms ease"
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div className="Benefits">

        <div className="Container">
          <div className="Grid Grid--gutters Grid--full medium-Grid--1of3">
            <div className="Grid-cell u-textCenter">
              <h3>
                Robust
              </h3>
              <p style={{display: "inline-block"}}>
                Area charts. Scatter plots. Voronoi polygons. Easy-to-use components for complex charting.
              </p>
            </div>
            <div className="Grid-cell u-textCenter">
              <h3>
                Flexible
              </h3>
              <p style={{display: "inline-block"}}>
                Fully-contained, reusable data visualization elements are responsible for their own styles and behaviors.
              </p>
            </div>
            <div className="Grid-cell u-textCenter">
              <h3>
                Native
              </h3>
              <p style={{display: "inline-block"}}>
                Extend the Victory experience on Android and iOS platforms with an identical&nbsp;API. <br/>
                <code>npm install victory-native</code>
              </p>
            </div>
          </div>

          <div className="Benefits-btn">
            <RadiumLink style={styles.link} to="/docs">
              Get Started <Icon glyph="internal-link" />
            </RadiumLink>
          </div>
        </div>

        <div className="u-padding">
          <h3 className="u-textCenter">
            Gallery
          </h3>
          <div className="Grid Grid--gutters Grid--full medium-Grid--fit">
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoCustomChart />
                <p className="SubHeading">
                  <Link to="/guides/custom-charts">
                    Custom Charts&nbsp;<Icon glyph="internal-link" />
                  </Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoSharedEvents/>
                <p className="SubHeading">
                  <Link to="/guides/events">
                    Events&nbsp;<Icon glyph="internal-link" />
                  </Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoCustomComponents />
                <p className="SubHeading">
                  <Link to="/guides/custom-components">
                    Custom Components&nbsp;<Icon glyph="internal-link" />
                  </Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoTooltips />
                <p className="SubHeading">
                  <Link to="/guides/tooltips">
                    Tooltips&nbsp;<Icon glyph="internal-link" />
                  </Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoZoom/>
                <p className="SubHeading">
                  <Link to="/guides/pan-and-zoom">
                    Pan and Zoom&nbsp;<Icon glyph="internal-link" />
                  </Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoAnimation/>
                <p className="SubHeading">
                  <Link to="/guides/animations">
                    Animations&nbsp;<Icon glyph="internal-link" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Benefits.propTypes = {
  style: React.PropTypes.object
};

Benefits.defaultProps = {
  style: null
};

export default Radium(Benefits);

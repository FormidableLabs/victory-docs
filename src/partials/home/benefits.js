import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Demos
import DemoCustomChart from "./demo-custom-chart";
import DemoSharedEvents from "./demo-shared-events";
import DemoCustomComponents from "./demo-custom-components";
import DemoTooltips from "./demo-tooltips";
import DemoZoom from "./demo-zoom";
import DemoAnimation from "./demo-animation";

class Benefits extends React.Component {
  render() {
    return (
      <div className="Benefits">
        <div className="Container">
          <div className="Grid Grid--gutters Grid--full medium-Grid--1of3">
            <div className="Grid-cell u-textCenter">
              <h3>Robust</h3>
              <p style={{ display: "inline-block" }}>
                Area charts. Scatter plots. Voronoi polygons. Easy-to-use
                components for complex charting.
              </p>
            </div>
            <div className="Grid-cell u-textCenter">
              <h3>Flexible</h3>
              <p style={{ display: "inline-block" }}>
                Fully contained, reusable data visualization elements are
                responsible for their own styles and behaviors.
              </p>
            </div>
            <div className="Grid-cell u-textCenter">
              <h3>Native</h3>
              <p style={{ display: "inline-block" }}>
                Extend the Victory experience on Android and iOS platforms with
                an identical&nbsp;API. <br />
                <code>npm install victory-native</code>
              </p>
            </div>
          </div>

          <div className="Benefits-btn">
            <Link className="Benefits-btn-link" to="/docs">
              Get Started
            </Link>
          </div>
        </div>

        <h2 className="u-textCenter">Guides</h2>
        <div className="u-paddingSm">
          <div className="Grid Grid--gutters Grid--full medium-Grid--fit">
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoCustomChart />
                <p className="SubHeading">
                  <Link to="/guides/custom-charts">Custom Charts</Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoZoom />
                <p className="SubHeading">
                  <Link to="/guides/brush-and-zoom">Brush and Zoom</Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoCustomComponents />
                <p className="SubHeading">
                  <Link to="/guides/custom-components">Custom Components</Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoTooltips />
                <p className="SubHeading">
                  <Link to="/guides/tooltips">Tooltips</Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoSharedEvents />
                <p className="SubHeading">
                  <Link to="/guides/events">Events</Link>
                </p>
              </div>
            </div>
            <div className="Grid-cell u-textCenter">
              <div className="u-paddingSm">
                <DemoAnimation />
                <p className="SubHeading">
                  <Link to="/guides/animations">Animations</Link>
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
  style: PropTypes.object
};

Benefits.defaultProps = {
  style: null
};

export default Benefits;

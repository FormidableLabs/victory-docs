import React from "react";
import ShowcaseApp from "./showcase-app";

// Common
// import { VictorySettings } from "formidable-landers";

class Showcase extends React.Component {
  getShowcaseApps() {
    const showcaseAppData = [
      {
        company: "Cumul8",
        screenshot: {
          src: "./static/cumul8-screenshot.png",
          alt: "Cumul8 screenshot"
        },
        description: "Cumul8 used Victory in Cirrus, its software offering for businesses trying to manage their internal data."
      },
      {
        company: "FiveThirtyEight",
        screenshot: {
          src: "./static/fivethirtyeight-screenshot.png",
          alt: "FiveThirtyEight screenshot"
        },
        description: "FiveThirtyEight has used Victory in some of its online data visualizations, including this one about the history of sumo wrestling."
      },
      {
        company: "Postmark",
        screenshot: {
          src: "./static/postmark-screenshot.png",
          alt: "Postmark screenshot"
        },
        description: "Postmark uses Victory on its status page, to let users know how the service is performing and whether it's up and running."
      },
      {
        company: "Tune",
        screenshot: {
          src: "./static/tune-screenshot.png",
          alt: "Tune screenshot"
        },
        description: "Tune uses Victory in its Marketing Console, a tool for marketers to track all of their mobile marketing data."
      }
    ];

    return showcaseAppData.map((app, index) => (
      <ShowcaseApp
        key={index}
        company={app.company}
        screenshot={app.screenshot}
        description={app.description}
      />
    ));
  }

  render() {
    return (
      <div>
        <h2 id="showcase">
          Showcase
        </h2>
        {this.getShowcaseApps()}
      </div>
    );
  }
}

export default Showcase;

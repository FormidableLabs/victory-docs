import React from "react";
import ShowcaseApp from "./showcase-app";

class Showcase extends React.Component {
  getShowcaseApps() {
    const showcaseAppData = [
      {
        company: "FiveThirtyEight",
        screenshot: {
          src: "/static/showcase-fivethirtyeight.png",
          alt: "FiveThirtyEight screenshot"
        },
        description: "FiveThirtyEight uses Victory for data visualizations, including this one about the history of sumo wrestling."
      },
      {
        company: "Postmark",
        screenshot: {
          src: "/static/showcase-postmark.png",
          alt: "Postmark screenshot"
        },
        description: "Postmark uses Victory on its status page to let users know how their service is performing."
      },
      {
        company: "Tune",
        screenshot: {
          src: "/static/showcase-tune.png",
          alt: "Tune screenshot"
        },
        description: "Tune uses Victory in its Marketing Console, a tool for marketers to track all of their mobile data."
      },
      {
        company: "Cumul8",
        screenshot: {
          src: "/static/showcase-cumul8.png",
          alt: "Cumul8 screenshot"
        },
        description: "Cumul8 uses Victory for Cirrus, a SaaS platform for businesses to manage their internal data."
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
      <div className="Showcases">
        {this.getShowcaseApps()}
      </div>
    );
  }
}

export default Showcase;

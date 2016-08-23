import React from "react";
import ShowcaseApp from "./showcase-app";

class Showcase extends React.Component {
  getShowcaseApps() {
    const showcaseAppData = [
      {
        company: "Cumul8",
        screenshot: {
          src: "./static/cumul8-screenshot1.png",
          alt: "Cumul8 screenshot"
        },
        description: "Lorem ipsum Amet tempor proident dolore Ut anim."
      },
      {
        company: "FiveThirtyEight",
        screenshot: {
          src: "./static/fivethirtyeight-screenshot.png",
          alt: "FiveThirtyEight screenshot"
        },
        description: "Lorem ipsum Amet tempor proident dolore Ut anim."
      },
      {
        company: "Postmark",
        screenshot: {
          src: "./static/postmark-screenshot.png",
          alt: "Postmark screenshot"
        },
        description: "Lorem ipsum Amet tempor proident dolore Ut anim."
      },
      {
        company: "Tune",
        screenshot: {
          src: "./static/tune-screenshot.png",
          alt: "Tune screenshot"
        },
        description: "Lorem ipsum Amet tempor proident dolore Ut anim."
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
        <h2 id="showcase">Showcase</h2>
        {this.getShowcaseApps()}
      </div>
    );
  }
}

export default Showcase;

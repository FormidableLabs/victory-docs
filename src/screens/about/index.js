import React from "react";

// Child components
import Icon from "../../components/icon";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Showcase from "./components/showcase";
import TitleMeta from "../../components/title-meta";

class About extends React.Component {
  render() {
    return (
      <TitleMeta title="Victory | About">
        <Header />
        <article className="Article">
          <h1 className="u-noMargin">
            Victory: Charting for React and React Native
          </h1>
          <p>
            {/*
              * TODO: Customize these buttons
              * https://github.com/FormidableLabs/formidable-landers/issues/175
              */}
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px"></iframe>
          </p>
          <p>
            Victory is a set of modular charting components for React and React Native. Victory makes it easy to get started without sacrificing flexibility. Create one of a kind data visualizations with fully customizable styles and behaviors. Victory uses the same API for web and React Native applications for easy cross-platform charting.
          </p>
          <p>
            Victory is helmed by Formidable’s <a href="https://github.com/boygirl"> Lauren Eastridge <Icon glyph="external-link" /></a>.
          </p>
          <p>
            <a href="https://github.com/FormidableLabs/victory/graphs/contributors">See Victory Contributors <Icon glyph="external-link" /></a>
          </p>

          <h2 id="showcase">
            Victory in Use
          </h2>
          <p>Victory is used for charting across the web, from publicly-consumed informational graphs to internal tracking and reporting.</p>
          <Showcase />

          <h1>
            About Formidable
          </h1>
          <p>
            Formidable is a Seattle-based consultancy and development shop, focused on open-source, full-stack JavaScript
            using React.js and Node.js, and the architecture of large-scale JavaScript applications. We build products for
            some of the world’s biggest companies, while helping their internal teams develop smart, thoughtful, and
            scalable systems.
          </p>
        </article>
        <Footer />
      </TitleMeta>
    );
  }
}

export default About;

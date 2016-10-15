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
        <article className="Container">
          <h1>
            Victory: Powerful React Charting
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
            Victory is a sophisticated React charting library that provides unparalled flexibility and customization.
            Powered by d3, it provides an easy entry for simple charting, though is a powerful option for even the most complex data visualization.
            Use in browser or in React Native apps with the same convenient API.
          </p>
          <p>
            Victory is helmed by Formidable’s <a href="https://github.com/boygirl"> Lauren Eastridge <Icon glyph="external-link" /></a>.
          </p>
          <p>
            <a href="https://github.com/FormidableLabs/victory/graphs/contributors">See Contributors to Victory <Icon glyph="external-link" /></a>
          </p>

          <h2 id="showcase">
            Data Visualization Showcase
          </h2>
          <p>All across the web, Victory is used for publicly-consumed informational graphs to internal tracking and reporting.</p>
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

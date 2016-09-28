import React from "react";
import Radium from "radium";

// Child components
import Icon from "../../components/icon";
import Header from "../../components/header";
import Footer from "../../components/footer";

// import InternalPage from "../../components/page-internal";
import Showcase from "./components/showcase";
import TitleMeta from "../../components/title-meta";

class About extends React.Component {
  getStyles() {
    return {
      container: {
        margin: "0 3vw"
      },
      copy: {
        maxWidth: "38em"
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <TitleMeta title="Victory | About">
        <Header />
        <article style={styles.container}>
          <h1 style={styles.copy}>
            About Victory
          </h1>
          <p style={styles.copy}>
            {/*
              * TODO: Customize these buttons
              * https://github.com/FormidableLabs/formidable-landers/issues/175
              */}
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px"></iframe>
          </p>
          <p style={styles.copy}>
            Victory is a sophisticated charting library powered by d3.js that aims to provide flexibility and customization
            beyond what is offered elsewhere in the realm of React charting. You can use it in your browser or in React Native apps with the same convenient API.
          </p>
          <p style={styles.copy}>
            Victory is helmed and primarily maintained by Formidable’s Lauren Eastridge.
          </p>
          <p style={styles.copy}>
            <a href="https://github.com/FormidableLabs/victory/graphs/contributors">See Contributors to Victory <Icon glyph="external-link" /></a>
          </p>

          <h2 id="showcase">
            Showcase
          </h2>
          <p style={styles.copy}>
            Victory is awesome in production. Steal underpants.
          </p>
          <Showcase />

          <h2 style={styles.copy}>
            About Formidable
          </h2>
          <p style={[styles.copy, {marginBottom: "40px"}]}>
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

export default Radium(About);

import React from "react";
import Radium from "radium";

// Child components
import Header from "../../components/header";
import Footer from "../../components/footer";
import Ecology from "ecology";

// import InternalPage from "../../components/page-internal";
import TitleMeta from "../../components/title-meta";

class Composed extends React.Component {
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
      <TitleMeta title="Victory: React Charting Library from Formidable | Composed">
        <Header />
        <article style={styles.container}>
          <h1 style={styles.copy}>
            Victory Composed: Charts in a Flash
          </h1>
          <img src="http://i.imgur.com/RIoXvJB.gif"/>
          <div className="Markdown">
            <Ecology
              overview={require("!!raw!./components/markdown.md")}
              scope={{
                React
              }}
              playgroundtheme="elegant"
            />
          </div>
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

export default Radium(Composed);

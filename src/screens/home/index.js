import React from "react";
import Radium from "radium";

// Common
import Header from "../../components/header";
import Footer from "../../components/footer";
import TitleMeta from "../../components/title-meta";

// Child Components
import Benefits from "./components/benefits";
import Companies from "./components/companies";
import Hero from "./components/hero";

class Home extends React.Component {
  render() {
    const trademark = <div className="default">Victory is a trademark of Formidable Labs, Inc.</div>;

    return (
      <TitleMeta title="Victory">
        <Header home />
        <section className="Home playgroundsMaxHeight">
          <Hero />

          <Companies />

          <Benefits />

          <div className="u-textCenter u-maxWidthPara u-marginAuto">
            <h2>We are Formidable</h2>
            <p>
              Formidable is a Seattle-based consultancy and open-source shop, with an emphasis on Node.js and React.js. We deploy a mixture of consulting, staff augmentation, and training to level up teams and solve engineering problems. Whether it’s transitioning walmart.com to React, moving speedtest.net off Flash, or helping a startup build and scale an MVP, we’re ready to help teams of any size.
            </p>
            <p>
              Interested in hiring or working for us? <a href="https://formidable.com/contact">Get in touch</a> or view our <a href="https://formidable.com/careers">Careers Page</a>.
            </p>
          </div>
        </section>
        <Footer
          trademark={trademark}
        />
      </TitleMeta>
    );
  }
}

export default Radium(Home);

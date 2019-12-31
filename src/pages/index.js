import React from "react";
import Benefits from "../partials/home/benefits";
import Companies from "../partials/home/companies";
import Hero from "../partials/home/hero";

class Index extends React.Component {
  render() {
    return (
      <div className="Page-content without-content-sidebar">
        <section className="Home playgroundsMaxHeight">
          <Hero />

          <Companies />

          <Benefits />

          <div className="u-textCenter u-maxWidthPara u-marginAuto">
            <h2>We are Formidable</h2>
            <p>
              Formidable is a Seattle-based consultancy and open-source shop,
              with an emphasis on Node.js and React.js. We deploy a mixture of
              consulting, staff augmentation, and training to level up teams and
              solve engineering problems. Whether it’s transitioning walmart.com
              to React, moving speedtest.net off Flash, or helping a startup
              build and scale an MVP, we’re ready to help teams of any size.
            </p>
            <p>
              Interested in hiring or working for us?{" "}
              <a href="https://formidable.com/contact">Get in touch</a> or view
              our <a href="https://formidable.com/careers">Careers Page</a>.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;

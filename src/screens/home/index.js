import React from "react";
import Radium from "radium";
import { Link } from "react-router";

// Common
import Header from "../../components/header";
import TitleMeta from "../../components/title-meta";
import { Footer } from "formidable-landers";

// Child Components
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import Companies from "./components/companies";

class Home extends React.Component {
  render() {
    const trademark = <div className="default">Victory is a trademark of Formidable Labs, Inc.</div>;

    return (
      <TitleMeta title="Victory">
        <Header home />
        <section className="Home playgroundsMaxHeight">
          <Hero />

          <div className="u-textCenter">
            <h2>
              Want a ready-made chart?
            </h2>
            <p>
              Use <Link to="/composed">Victory Composed</Link> instead.
            </p>
          </div>

          <Companies />

          <Benefits />
        </section>
        <Footer
          style={{
            margin: 0
          }}
          styleContainer={{
            margin: "0 3vw"
          }}
          trademark={trademark}
        />
      </TitleMeta>
    );
  }
}

export default Radium(Home);

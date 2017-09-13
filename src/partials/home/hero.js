import React from "react";

// Settings
import HeroDemo from "./hero-demo";

class Hero extends React.Component {
  render() {
    return (
      <div className="Hero">
        <h1 className="Heading u-noMargin">
           React.js components <span className="em">for</span>
           <br/>
          modular charting <span className="em">and</span> data visualization
        </h1>

        <HeroDemo />

        <div className="Installer">
          <code className="Installer-code">npm install victory</code>
        </div>
      </div>
    );
  }
}

export default Hero;

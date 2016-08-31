import React from "react";
import Showcase from "./components/showcase";

class About extends React.Component {
  render() {
    return (
      <div>
        {/* the issues and source links will live in the header*/}
        <h1>About Victory</h1>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px"></iframe>

        <Showcase />

        <h2>Victory's Story</h2>
        <p>
          Victory is a sophisticated charting library powered by d3.js that aims to provide flexibility and customization
           beyond what is offered elsewhere. You can it in your browser or in React Native apps with the same convenient API.
           It is helmed and primarily maintained by Formidable's Lauren Eastridge.
        </p>
        <a href="https://github.com/FormidableLabs/victory/graphs/contributors">See Contributors to Victory.</a>

        <h2>About Formidable</h2>
        <p>
          Formidable is a Seattle-based consultancy and development shop, focused on open-source, full-stack JavaScript
          using React.js and Node.js, and the architecture of large-scale JavaScript applications. We build products for
          some of the world's biggest companies, while helping their internal teams develop smart, thoughtful, and
          scalable systems.
        </p>

      </div>
    );
  }
}

export default About;

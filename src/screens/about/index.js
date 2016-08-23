import React from "react";
import Showcase from "./components/showcase";

class About extends React.Component {
  render() {
    return (
      <div>
        {/* the issues and source links will live in the header*/}
        <a href="https://github.com/FormidableLabs/victory">Source Code on GitHub</a>
        <br/>
        <a href="https://github.com/FormidableLabs/victory/issues">Report an Issue</a>

        <h1>About Victory</h1>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=victory&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&type=follow&count=true&size=large" frameBorder="0" scrolling="0" width="220px" height="30px"></iframe>

        <Showcase />

        <h2>Origin of Victory</h2>
        <p>
          Victory is a lorem ipsum Dolor minim Excepteur eu eu sed commodo dolore nostrud in aute eu fugiat ea cillum
          incididunt nulla sint nulla velit ea quis sunt tempor ut in culpa dolore esse deserunt sunt ullamco do Ut
          veniam consectetur pariatur amet anim.
        </p>

        <a href="https://github.com/FormidableLabs/victory/graphs/contributors">See Contributors</a>
        {/*add top 5 contributors if we can figure out a good way with the github API*/}

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

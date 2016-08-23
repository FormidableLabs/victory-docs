import React from "react";

const ShowcaseApp = (props) => (
  <div>
    <h3>{props.company}</h3>
    <img src={props.screenshot.src} alt={props.screenshot.alt} />
    <p>{props.description}</p>
  </div>
);

ShowcaseApp.propTypes = {
  screenshot: React.PropTypes.shape({
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired
  }),
  company: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};

export default ShowcaseApp;

import React from "react";

class ShowcaseApp extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.company}</h3>
        <img src={this.props.screenshot.src} alt={this.props.screenshot.alt} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

ShowcaseApp.propTypes = {
  screenshot: React.PropTypes.shape({
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired
  }),
  company: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};

export default ShowcaseApp;

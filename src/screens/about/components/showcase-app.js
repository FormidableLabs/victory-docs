import React from "react";

class ShowcaseApp extends React.Component {
  render() {
    return (
      <div className="Showcase">
        <div className="Showcase-Col Showcase-Col--img">
          <img
            alt={this.props.screenshot.alt}
            className="Showcase-img fancyBorder"
            src={this.props.screenshot.src}
          />
        </div>
        <div className="Showcase-Col">
          <h3 className="u-noMargin">
            {this.props.company}
          </h3>
          <p>
            {this.props.description}
          </p>
        </div>
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
  description: React.PropTypes.string.isRequired,
  even: React.PropTypes.bool
};

export default ShowcaseApp;

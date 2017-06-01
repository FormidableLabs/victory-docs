import React from "react";
import PropTypes from "prop-types";

class ShowcaseApp extends React.Component {
  render() {
    return (
      <div className="Grid Grid--guttersSm Grid--center Grid--full medium-Grid--fit u-textLarge">
        <div className="Grid-cell Grid-cell--autoSize u-maxWidth">
          <img
            alt={this.props.screenshot.alt}
            className="Showcase-img fancyBorder"
            src={this.props.screenshot.src}
          />
        </div>
        <div className="Grid-cell">
          <h3 className="SubHeading u-textLeft u-noMargin">
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
  screenshot: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  even: PropTypes.bool
};

export default ShowcaseApp;

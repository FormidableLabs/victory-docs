import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import * as Victory from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

const sampleData = [
  { x: 45, y: 2 },
  { x: 90, y: 3 },
  { x: 135, y: 5 },
  { x: 180, y: 4 },
  { x: 225, y: 7 },
  { x: 270, y: 2 },
  { x: 315, y: 4 },
  { x: 360, y: 7 }
];


class PolarChartsGuide extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{ React, ReactDOM, ...Victory, sampleData }}
      />
    );
  }
}

PolarChartsGuide.propTypes = {
  location: PropTypes.object.isRequired
};

export default PolarChartsGuide;

import React from "react";
import PropTypes from "prop-types";
import * as Victory from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

const sampleData = [
  {x: 15, y: 35, errorX: 1, errorY: 3},
  {x: 20, y: 42, errorX: 3, errorY: 2},
  {x: 25, y: 30, errorX: 5, errorY: 2},
  {x: 30, y: 35, errorX: 4, errorY: 2},
  {x: 35, y: 22, errorX: 8, errorY: 2}
];

class VictoryErrorbar extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{ ...Victory, React, sampleData }}
      />
    );
  }
}

VictoryErrorbar.propTypes = {
  location: PropTypes.object.isRequired
};

export default VictoryErrorbar;

import React from "react";
import PropTypes from "prop-types";
import { round } from "lodash";
import * as Victory from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";

const overview = require("!!raw!./ecology.md");

class VictoryBrushContainer extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{ ...Victory, React, round }}
      />
    );
  }
}

VictoryBrushContainer.propTypes = {
  location: PropTypes.object.isRequired
};

export default VictoryBrushContainer;

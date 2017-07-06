import React from "react";
import PropTypes from "prop-types";
import * as Victory from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class VictoryPolarAxis extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{ ...Victory, React }}
      />
    );
  }
}

VictoryPolarAxis.propTypes = {
  location: PropTypes.object.isRequired
};

export default VictoryPolarAxis;

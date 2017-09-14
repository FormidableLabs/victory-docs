import React from "react";
import PropTypes from "prop-types";
import { round } from "lodash";
import * as Victory from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const docs = require("!!raw!./ecology.md");
const genericContainerDocs = require("!!raw!../shared/containers.md");

const overview = markdown.append(docs, "## Standard Container Props", genericContainerDocs);

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

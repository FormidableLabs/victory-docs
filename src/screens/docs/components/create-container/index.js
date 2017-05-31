import React from "react";
import ReactDOM from "react-dom";
import { range, round, random } from "lodash";
import * as Victory from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class CreateContainer extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{ ...Victory, React, ReactDOM, range, round, random }}
      />
    );
  }
}

CreateContainer.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default CreateContainer;

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { VictoryAxis, VictoryLine } from "victory-chart";
import { VictoryLabel } from "victory-core";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class CustomStylesTutorial extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{
          React,
          ReactDOM,
          VictoryAxis,
          VictoryLine,
          VictoryLabel
        }}
      />
    );
  }
}

CustomStylesTutorial.propTypes = {
  location: PropTypes.object.isRequired
};

export default CustomStylesTutorial;

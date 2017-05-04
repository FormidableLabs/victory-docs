import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryAxis, VictoryChart, VictoryLine, VictoryScatter,
  VictoryBrushContainer, VictoryZoomContainer
} from "victory";
import { random, range } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class BrushAndZoomGuide extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{
          random, range, React, ReactDOM, VictoryChart, VictoryAxis, VictoryLine, VictoryScatter,
          VictoryBrushContainer, VictoryZoomContainer
        }}
      />
    );
  }
}

BrushAndZoomGuide.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default BrushAndZoomGuide;

import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryLine, VictoryAxis,
  VictoryBar, VictoryScatter, VictoryStack, VictoryPortal
} from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class LayoutGuide extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{
          React, ReactDOM, VictoryPie, VictoryContainer, VictoryLabel, VictoryChart,
          VictoryLine, VictoryAxis, VictoryBar, VictoryScatter, VictoryStack, VictoryPortal
        }}
      />
    );
  }
}

LayoutGuide.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default LayoutGuide;

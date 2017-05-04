import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryBar, VictoryScatter, VictoryAxis, VictoryLabel, VictoryGroup,
  VictoryChart, VictoryLine, VictoryPie, VictoryArea, Area
} from "victory";
import { random, range } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class CustomComponentGuide extends React.Component {
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
          random, range, React, ReactDOM, VictoryBar, VictoryScatter, VictoryLine,
          VictoryPie, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryArea, Area
        }}
      />
    );
  }
}

CustomComponentGuide.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default CustomComponentGuide;

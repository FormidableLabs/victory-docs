import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryBar, VictoryArea, VictoryChart, VictoryPie, VictoryStack,
  VictorySharedEvents, Bar, VictoryLabel
} from "victory";
import { assign } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class EventsGuide extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{
          assign, React, ReactDOM, VictoryBar, Bar, VictoryArea, VictoryLabel,
          VictoryPie, VictoryChart, VictoryStack, VictorySharedEvents
        }}
      />
    );
  }
}

EventsGuide.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default EventsGuide;

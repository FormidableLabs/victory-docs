import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryBar, VictoryArea, VictoryChart, VictoryPie, VictoryStack,
  VictorySharedEvents, Bar, VictoryLabel
} from "victory";
import { assign } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";

class EventsGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{
          assign, React, ReactDOM, VictoryBar, Bar, VictoryArea, VictoryLabel,
          VictoryPie, VictoryChart, VictoryStack, VictorySharedEvents
        }}
      />
    );
  }
}

EventsGuide.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default EventsGuide;

import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictorySharedEvents extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        scope={{}}
      />
    );
  }
}

VictorySharedEvents.propTypes = {
  location: React.PropTypes.object
};

export default VictorySharedEvents;

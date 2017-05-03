import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryZoomContainer extends React.Component {
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

VictoryZoomContainer.propTypes = {
  location: React.PropTypes.object
};

export default VictoryZoomContainer;

import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictorySelectionContainer extends React.Component {
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

VictorySelectionContainer.propTypes = {
  location: React.PropTypes.object
};

export default VictorySelectionContainer;

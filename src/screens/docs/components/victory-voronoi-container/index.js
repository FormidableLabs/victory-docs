import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryVoronoiContainer extends React.Component {
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

VictoryVoronoiContainer.propTypes = {
  location: React.PropTypes.object
};

export default VictoryVoronoiContainer;

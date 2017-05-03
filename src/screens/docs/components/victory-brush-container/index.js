import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryBrushContainer extends React.Component {
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

VictoryBrushContainer.propTypes = {
  location: React.PropTypes.object
};

export default VictoryBrushContainer;

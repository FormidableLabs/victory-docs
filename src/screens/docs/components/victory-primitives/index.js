import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryPrimitives extends React.Component {
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

VictoryPrimitives.propTypes = {
  location: React.PropTypes.object
};

export default VictoryPrimitives;

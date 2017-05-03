import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryTransition extends React.Component {
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

VictoryTransition.propTypes = {
  location: React.PropTypes.object
};

export default VictoryTransition;

import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryStack extends React.Component {
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

VictoryStack.propTypes = {
  location: React.PropTypes.object
};

export default VictoryStack;

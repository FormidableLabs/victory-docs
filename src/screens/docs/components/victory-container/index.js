import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryContainer extends React.Component {
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

VictoryContainer.propTypes = {
  location: React.PropTypes.object
};

export default VictoryContainer;

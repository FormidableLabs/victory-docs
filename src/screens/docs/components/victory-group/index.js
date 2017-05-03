import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryGroup extends React.Component {
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

VictoryGroup.propTypes = {
  location: React.PropTypes.object
};

export default VictoryGroup;

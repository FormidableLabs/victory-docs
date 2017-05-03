import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryLabel extends React.Component {
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

VictoryLabel.propTypes = {
  location: React.PropTypes.object
};

export default VictoryLabel;

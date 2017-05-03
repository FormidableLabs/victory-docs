import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryAxis extends React.Component {
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

VictoryAxis.propTypes = {
  location: React.PropTypes.object
};

export default VictoryAxis;

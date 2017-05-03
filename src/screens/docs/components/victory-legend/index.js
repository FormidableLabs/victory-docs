import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryLegend extends React.Component {
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

VictoryLegend.propTypes = {
  location: React.PropTypes.object
};

export default VictoryLegend;

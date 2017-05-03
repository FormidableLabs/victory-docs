import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryTooltip extends React.Component {
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

VictoryTooltip.propTypes = {
  location: React.PropTypes.object
};

export default VictoryTooltip;

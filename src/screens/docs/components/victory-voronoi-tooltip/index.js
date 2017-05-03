import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryVoronoiTooltip extends React.Component {
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

VictoryVoronoiTooltip.propTypes = {
  location: React.PropTypes.object
};

export default VictoryVoronoiTooltip;

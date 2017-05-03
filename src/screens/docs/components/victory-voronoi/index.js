import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryVoronoi extends React.Component {
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

VictoryVoronoi.propTypes = {
  location: React.PropTypes.object
};

export default VictoryVoronoi;

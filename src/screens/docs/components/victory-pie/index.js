import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryPie extends React.Component {
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

VictoryPie.propTypes = {
  location: React.PropTypes.object
};

export default VictoryPie;

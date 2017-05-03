import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryAnimation extends React.Component {
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

VictoryAnimation.propTypes = {
  location: React.PropTypes.object
};

export default VictoryAnimation;

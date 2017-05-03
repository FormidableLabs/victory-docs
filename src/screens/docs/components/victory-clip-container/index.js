import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryClipContainer extends React.Component {
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

VictoryClipContainer.propTypes = {
  location: React.PropTypes.object
};

export default VictoryClipContainer;

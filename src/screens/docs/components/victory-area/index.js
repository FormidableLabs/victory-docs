import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryArea extends React.Component {
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

VictoryArea.propTypes = {
  location: React.PropTypes.object
};

export default VictoryArea;

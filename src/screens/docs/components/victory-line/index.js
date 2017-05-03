import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryLine extends React.Component {
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

VictoryLine.propTypes = {
  location: React.PropTypes.object
};

export default VictoryLine;

import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryScatter extends React.Component {
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

VictoryScatter.propTypes = {
  location: React.PropTypes.object
};

export default VictoryScatter;

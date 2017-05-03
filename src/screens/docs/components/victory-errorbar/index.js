import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryErrorbar extends React.Component {
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

VictoryErrorbar.propTypes = {
  location: React.PropTypes.object
};

export default VictoryErrorbar;

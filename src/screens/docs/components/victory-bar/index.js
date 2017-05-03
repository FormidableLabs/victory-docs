import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryBar extends React.Component {
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

VictoryBar.propTypes = {
  location: React.PropTypes.object
};

export default VictoryBar;

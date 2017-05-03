import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryTheme extends React.Component {
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

VictoryTheme.propTypes = {
  location: React.PropTypes.object
};

export default VictoryTheme;

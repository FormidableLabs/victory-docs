import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryZoom extends React.Component {
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

VictoryZoom.propTypes = {
  location: React.PropTypes.object
};

export default VictoryZoom;

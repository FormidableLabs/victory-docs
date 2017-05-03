import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryCandlestick extends React.Component {
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

VictoryCandlestick.propTypes = {
  location: React.PropTypes.object
};

export default VictoryCandlestick;

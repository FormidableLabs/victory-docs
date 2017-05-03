import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryChart extends React.Component {
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

VictoryChart.propTypes = {
  location: React.PropTypes.object
};

export default VictoryChart;

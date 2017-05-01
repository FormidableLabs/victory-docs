import React from "react";
import ReactDOM from "react-dom";
import { VictoryBar, VictoryLine, VictoryChart, VictoryAxis} from "victory";
import { assign, range } from "lodash";
import EcologyRecipe from "../ecology-recipe";

class DataAccessorsGuide extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        scope={{ assign, range, React, ReactDOM, VictoryBar, VictoryLine, VictoryChart, VictoryAxis}}
      />
    );
  }
}

DataAccessorsGuide.propTypes = {
  location: React.PropTypes.object
};

export default DataAccessorsGuide;

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { VictoryBar, VictoryLine, VictoryChart, VictoryAxis} from "victory";
import { assign, range } from "lodash";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class DataAccessorsGuide extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{ assign, range, React, ReactDOM, VictoryBar, VictoryLine, VictoryChart, VictoryAxis}}
      />
    );
  }
}

DataAccessorsGuide.propTypes = {
  location: PropTypes.object.isRequired
};

export default DataAccessorsGuide;

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { VictoryScatter, VictoryChart, VictoryZoomContainer} from "victory";
import _ from "lodash";
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
        scope={{ _, React, ReactDOM, VictoryScatter, VictoryChart, VictoryZoomContainer}}
      />
    );
  }
}

DataAccessorsGuide.propTypes = {
  location: PropTypes.object.isRequired
};

export default DataAccessorsGuide;

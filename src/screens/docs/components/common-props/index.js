import React from "react";
import ReactDOM from "react-dom";
import * as Victory from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
import { range } from "lodash";
const overview = require("!!raw!./ecology.md");

const sampleData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 }
];

class CommonProps extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{...Victory, React, ReactDOM, range, sampleData}}
      />
    );
  }
}

CommonProps.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default CommonProps;

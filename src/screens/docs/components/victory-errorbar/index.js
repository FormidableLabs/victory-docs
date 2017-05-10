import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class VictoryErrorbar extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{}}
      />
    );
  }
}

VictoryErrorbar.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default VictoryErrorbar;

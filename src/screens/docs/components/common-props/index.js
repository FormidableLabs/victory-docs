import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class CommonProps extends React.Component {
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

CommonProps.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default CommonProps;

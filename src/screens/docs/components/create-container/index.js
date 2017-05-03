import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class CreateContainer extends React.Component {
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

CreateContainer.propTypes = {
  location: React.PropTypes.object
};

export default CreateContainer;

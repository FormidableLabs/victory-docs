import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class Native extends React.Component {
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

Native.propTypes = {
  location: React.PropTypes.object
};

export default Native;

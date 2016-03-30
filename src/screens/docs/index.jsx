import React from "react";
import Radium from "radium";

// Child components
import Markdown from "./components/markdown";
import Sidebar from "./components/sidebar";

class Docs extends React.Component {
  getStyles() {
    return {
      display: "flex",
      flex: "1 0 auto",
      flexDirection: "column",
      margin: "0 auto",
      padding: "1rem",
      "@media (min-width: 70em)": {
        "flexDirection": "row",
        margin: "0 2.5rem"
      }
    };
  }

  render() {
    const active = this.props.params.component ?
      this.props.params.component :
      "index";
    return (
      <div style={this.getStyles()}>
        <Sidebar active={active} />
        <Markdown active={active} />
      </div>
    );
  }
}

Docs.propTypes = {
  params: React.PropTypes.object
};

Docs.defaultProps = {
  params: null
};


export default Radium(Docs);

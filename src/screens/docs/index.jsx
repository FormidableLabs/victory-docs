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
    console.log(this.props);
    return (
      <div style={this.getStyles()}>
        <Sidebar />
        <Markdown />
      </div>
    );
  }
}

export default Radium(Docs);

import React from "react";

// Variables and Stylesheet
import "../styles/styles.css";

class App extends React.Component {
  render() {
    return (this.props.children);
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;

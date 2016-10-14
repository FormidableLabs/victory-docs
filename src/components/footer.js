import React from "react";
import Radium from "radium";

// Common
import { Footer } from "formidable-landers";

class VictoryFooter extends React.Component {
  render() {
    const trademark = <div className="default">Victory is a trademark of Formidable Labs, Inc.</div>;

    return (
      <Footer
        style={{
          margin: 0
        }}
        styleContainer={{
          margin: "0 3vw"
        }}
        trademark={trademark}
        theme="dark"
      />
    );
  }
}

VictoryFooter.propTypes = {
  home: React.PropTypes.bool
};

VictoryFooter.defaultProps = {
  home: false
};


export default Radium(VictoryFooter);

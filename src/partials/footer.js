import React from "react";
import PropTypes from "prop-types";
// Common
import { Footer } from "formidable-landers";

class VictoryFooter extends React.Component {
  render() {
    const trademark = (
      <div className="default">
        Victory is a trademark of Formidable Labs, Inc.
      </div>
    );

    return <Footer className="victory" trademark={trademark} theme="dark" />;
  }
}

VictoryFooter.propTypes = {
  home: PropTypes.bool
};

VictoryFooter.defaultProps = {
  home: false
};

export default VictoryFooter;

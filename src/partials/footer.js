import React from "react";
import PropTypes from "prop-types";

class VictoryFooter extends React.Component {
  render() {
    const trademark = (
      <div className="default">
        Victory is a trademark of Formidable Labs, Inc.
      </div>
    );

    return <div className="victory" trademark={trademark} theme="light" />;
  }
}

VictoryFooter.propTypes = {
  home: PropTypes.bool
};

VictoryFooter.defaultProps = {
  home: false
};

export default VictoryFooter;

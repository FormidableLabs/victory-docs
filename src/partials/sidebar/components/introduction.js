import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import { NavSectionHeading, NavSectionSubheading } from "../styles";

class Introduction extends React.Component {
  render() {
    return !isEmpty(this.props.content) ? (
      <Fragment>
        <NavSectionHeading>Introduction</NavSectionHeading>
        <NavSectionSubheading>{this.props.content}</NavSectionSubheading>
      </Fragment>
    ) : null;
  }
}

Introduction.propTypes = {
  content: PropTypes.array
};

export default Introduction;

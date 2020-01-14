import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import { NavSectionHeading, NavSectionList } from "../styles";

class Introduction extends React.Component {
  render() {
    return !isEmpty(this.props.content) ? (
      <Fragment>
        <NavSectionHeading>Introduction</NavSectionHeading>
        <NavSectionList>{this.props.content}</NavSectionList>
      </Fragment>
    ) : null;
  }
}

Introduction.propTypes = {
  content: PropTypes.array
};

export default Introduction;

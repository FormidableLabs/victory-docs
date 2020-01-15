import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import { SidebarSectionHeading, SidebarSectionList } from "../styles";

const Introduction = ({ content }) => {
  return !isEmpty(content) ? (
    <>
      <SidebarSectionHeading>Introduction</SidebarSectionHeading>
      <SidebarSectionList>{content}</SidebarSectionList>
    </>
  ) : null;
};

Introduction.propTypes = {
  content: PropTypes.array
};

export default Introduction;

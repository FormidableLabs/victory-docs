import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import styled from "styled-components";

const SidebarSectionHeading = styled.p`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sidebarHeading};
  color: ${({ theme }) => theme.color.red};
  margin: ${({ theme }) => `${theme.spacing.sm} 0 0 0}`};
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing.sm};
`;

const SidebarSectionContent = styled.ul`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sidebarHeading};
  color: ${({ theme }) => theme.color.brown};
  margin-top: 0;
`;

class Introduction extends React.Component {
  render() {
    return !isEmpty(this.props.content) ? (
      <Fragment>
        <SidebarSectionHeading>Introduction</SidebarSectionHeading>
        <SidebarSectionContent>{this.props.content}</SidebarSectionContent>
      </Fragment>
    ) : null;
  }
}

Introduction.propTypes = {
  content: PropTypes.array
};

export default Introduction;

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { isEmpty } from "lodash";

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
  color: ${({ theme }) => theme.color.brown};
  margin-top: 0;
`;

const SidebarSectionSubHeading = styled(SidebarSectionHeading)``;

const SidebarSectionSubContent = styled.ul`
  margin-top: 0;
`;

class Category extends React.Component {
  renderSubCategories(subCategories) {
    if (isEmpty(subCategories)) {
      return;
    }
    const categories = subCategories.map((category, index) =>
      !isEmpty(category.content) ? (
        <div key={index}>
          <SidebarSectionSubHeading>{category.title}</SidebarSectionSubHeading>
          <SidebarSectionSubContent>
            {category.content}
          </SidebarSectionSubContent>
        </div>
      ) : null
    );
    return categories.filter(Boolean);
  }

  render() {
    const subCategories = this.renderSubCategories(this.props.subCategories);

    const { content, title } = this.props;

    if (isEmpty(subCategories) && isEmpty(content)) {
      return null;
    }

    return (
      <Fragment>
        <SidebarSectionHeading>{title}</SidebarSectionHeading>
        <SidebarSectionContent>{content}</SidebarSectionContent>
        {subCategories}
      </Fragment>
    );
  }
}

Category.propTypes = {
  content: PropTypes.array,
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.array
    })
  ),
  title: PropTypes.string
};

export default Category;

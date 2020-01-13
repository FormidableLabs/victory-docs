import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { isEmpty } from "lodash";

const SidebarSectionContainer = styled.div`
  margin: 0;
  padding: 0;
`;
const SidebarSectionHeading = styled.p`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sidebarHeading};
  color: ${({ theme }) => theme.color.red};
  margin: ${({ theme }) => `${theme.spacing.sm} 0 0 0}`};
  padding: 0;
`;

const SidebarSectionContent = styled.ul`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sidebarHeading};
  color: ${({ theme }) => theme.color.brown};
  margin: ${({ theme }) => `0 0 0 ${theme.spacing.sm}`};
`;

const SidebarSectionSubHeading = styled(SidebarSectionHeading)``;

const SidebarSectionSubContent = styled.ul`
  margin: 0;
  padding: 0;
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
      <SidebarSectionContainer>
        <SidebarSectionHeading>{title}</SidebarSectionHeading>
        <SidebarSectionContent>{content}</SidebarSectionContent>
        {subCategories}
      </SidebarSectionContainer>
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

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import {
  NavSectionHeading,
  NavSectionSubheading,
  SidebarSectionSublist
} from "../styles";

class Category extends React.Component {
  renderSubCategories(subCategories) {
    if (isEmpty(subCategories)) {
      return;
    }
    const categories = subCategories.map((category, index) =>
      !isEmpty(category.content) ? (
        <div key={index}>
          <NavSectionHeading>{category.title}</NavSectionHeading>
          <SidebarSectionSublist>{category.content}</SidebarSectionSublist>
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
        <NavSectionHeading>{title}</NavSectionHeading>
        <NavSectionSubheading>{content}</NavSectionSubheading>
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

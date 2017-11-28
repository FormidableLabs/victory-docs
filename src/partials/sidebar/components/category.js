import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

class Category extends React.Component {

  renderSubCategories(subCategories) {
    if (isEmpty(subCategories)) {
      return null;
    }
    const categories = subCategories.map((category, index) => {
      return !isEmpty(category.content) ?
        (
          <div key={index}>
            <p className="Sidebar-SubHeading SubHeading">{category.title}</p>
            <ul className="Sidebar-List">
              {category.content}
            </ul>
          </div>
        ) : null;
    });
    return categories.filter(Boolean);
  }

  render() {
    const subCategories = this.renderSubCategories(this.props.subCategories);
    const { content, title } = this.props;
    if (isEmpty(subCategories) && isEmpty(content)) {
      return null;
    }
    return (
      <div className="Sidebar-Grid-block">
        <p className="Sidebar-Heading">{title}</p>
        <ul className="Sidebar-List">
          {content}
        </ul>
        {subCategories}
      </div>
    );
  }
}

Category.propTypes = {
  content: PropTypes.array,
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, content: PropTypes.array })
  ),
  title: PropTypes.string
};

export default Category;

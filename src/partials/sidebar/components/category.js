import React from "react";
import PropTypes from "prop-types";

class Category extends React.Component {

  renderSubCategories(subCategories) {
    if (!Array.isArray(subCategories) || !subCategories.length) {
      return null;
    }
    return subCategories.map((category, index) => {
      return Array.isArray(category.content) && category.content.length ?
        (
          <div key={index}>
            <p className="Sidebar-SubHeading SubHeading">{category.title}</p>
            <ul className="Sidebar-List">
              {category.content}
            </ul>
          </div>
        ) : null;
    });
  }

  render() {
    const subCategories = this.renderSubCategories(this.props.subCategories);
    const { content, title } = this.props;
    if (!subCategories && (!Array.isArray(content) || !content.length)) {
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

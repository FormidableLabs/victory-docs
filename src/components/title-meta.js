import React from "react";
import PropTypes from "prop-types";
import DocumentMeta from "react-document-meta";

class TitleMeta extends React.Component {
  render() {
    const titleMeta = {
      title: this.props.title,
      meta: {
        property: {
          "og:title": this.props.title
        }
      }
    };

    return (
      <DocumentMeta {...titleMeta}>
        {this.props.children}
      </DocumentMeta>
    );
  }
}

TitleMeta.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default TitleMeta;

export const renderAsHTML = function () {
  DocumentMeta.canUseDOM = false;
  return DocumentMeta.renderAsHTML();
};

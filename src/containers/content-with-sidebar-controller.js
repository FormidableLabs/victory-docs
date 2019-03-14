import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link, PrefetchWhenSeen } from "react-static";
import Footer from "../partials/footer";
import Fuse from "fuse.js";
import { maxBy, minBy, findIndex, includes, last, isEmpty } from "lodash";
import Introduction from "../partials/sidebar/components/introduction";
import Category from "../partials/sidebar/components/category";
import SidebarSearchInput from "../partials/sidebar/components/search-input";
import Sidebar from "../partials/sidebar/sidebar";
import styled from "styled-components";

// ContentWithSidebarPage aka .new-docs-page
const ContentWithSidebarPage = styled.main`
  display: grid;
  position: absolute;
  top: 161px;
  box-sizing: border-box;
  column-gap: 0rem;
  grid-template-rows: 0 calc(100vh - 161px);
  grid-template-columns: auto auto;
  grid-template-areas:
    "header header" /* conceptually desirable but doesn't work great with how our landers are built */
    "nav content"
    "footer footer";
  }

  body {
    margin: 0 !important;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .new-docs-header {
    grid-area: header;
  }

  .new-docs-footer {
    grid-area: footer;
  }

  .new-docs-content {
    grid-area: content;
    overflow-x: hidden;
    overflow-y: auto; /* overflow condition on parent */
  }

  .new-docs-article {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;

// eslint-disable-next-line react/no-multi-comp
class ContentWithSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content
    };
  }
  render() {
    const { children, sidebarContent } = this.props;
    return (
      <React.Fragment>
        <ContentWithSidebarPage className="new-docs-page">
          <Sidebar {...this.props} content={sidebarContent} />
          <div className="new-docs-content">
            <div className="new-docs-article">
              {children}
              <Footer />
            </div>
          </div>
        </ContentWithSidebarPage>
      </React.Fragment>
    );
  }
}

ContentWithSidebar.propTypes = {
  children: PropTypes.array,
  content: PropTypes.array,
  sidebarContent: PropTypes.array
};

export default withRouter(ContentWithSidebar);

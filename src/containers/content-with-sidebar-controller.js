import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-static";
import Footer from "../partials/footer";
import Sidebar from "../partials/sidebar/sidebar";
import styled from "styled-components";
import menuButton from "../../static/burger.svg";

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

    @media (max-width: 768px) {
      grid-template-columns: ${props => (props.openSidebar ? "45px auto" : "auto auto")}
    }
  }

  body {
    margin: 0 !important;
    box-sizing: border-box;
  }

  .new-docs-header {
    grid-area: header;
  }

  .new-docs-footer {
    grid-area: footer;
  }

  .new-docs-content {
    grid-area: content;
    overflow-y: auto; /* overflow condition on parent */
  }

  .new-docs-article {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;

const SidebarWrapper = styled.div`
  z-index: 99;
  width: 280px;
  background-color: #ebe7e4;
  grid-area: nav;
  overflow-y: auto;
  padding: 1.375rem 1.375rem 3.75rem;

  @media (max-width: 768px) {
    width: ${props => (props.openSidebar ? "280px" : "20px")};
  }
`;

const SidebarContentWrapper = styled.div`
  height: 100vh;
  @media (max-width: 768px) {
    display: ${props => (props.openSidebar ? "" : "none")};
  }
`;

const MenuButton = styled.img`
  cursor: pointer;
  display: none;
  margin: -9px -11px;

  @media (max-width: 768px) {
    display: ${props => (props.openSidebar ? "none" : "block")};
  }
`;

const ArticleWrapper = styled.div`
  grid-area: content;
  overflow-x: auto;
  overflow-y: auto; /* overflow condition on parent */
  min-width: 700px;
`;

// eslint-disable-next-line react/no-multi-comp
class ContentWithSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      openSidebar: false
    };
    this.closeSidebar = this.closeSidebar.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
  }

  openSidebar() {
    this.setState({ openSidebar: true });
  }

  closeSidebar() {
    this.setState({ openSidebar: false });
  }

  render() {
    const { children, sidebarContent } = this.props;
    return (
      <React.Fragment>
        <ContentWithSidebarPage
          className="new-docs-page"
          openSidebar={this.state.openSidebar}
        >
          <SidebarWrapper
            openSidebar={this.state.openSidebar}
            onClick={this.openSidebar}
          >
            <MenuButton
              src={menuButton}
              alt=">"
              openSidebar={this.state.openSidebar}
              onClick={this.openSidebar}
            />
            <SidebarContentWrapper openSidebar={this.state.openSidebar}>
              <Sidebar {...this.props} content={sidebarContent} />
            </SidebarContentWrapper>
          </SidebarWrapper>
          <ArticleWrapper
            openSidebar={this.state.openSidebar}
            onClick={this.closeSidebar}
          >
            <div className="new-docs-article">
              {children}
              <Footer />
            </div>
          </ArticleWrapper>
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

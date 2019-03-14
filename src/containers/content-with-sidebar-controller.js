import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-static";
import Footer from "../partials/footer";
import Sidebar from "../partials/sidebar/sidebar";
import styled from "styled-components";
import closeButton from "../../static/x.svg";
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

const ContentWrapper = styled.div`
  width: 280px;
  background-color: #ebe7e4;
  grid-area: nav;
  overflow-y: auto;
  padding: 1.375rem 1.375rem 3.75rem;

  @media (max-width: 768px) {
    width: ${props => (props.openSidebar ? "280px" : "20px")};
  }
`;

const SubContentWrapper = styled.div`
  height: 100vh;
  @media (max-width: 768px) {
    display: ${props => (props.openSidebar ? "" : "none")};
  }
`;

const CloseButton = styled.img`
  cursor: pointer;
  display: none;
  padding: 0 0 20px 220px;

  @media (max-width: 768px) {
    display: ${props => (props.openSidebar ? "block" : "none")};
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
        <ContentWithSidebarPage className="new-docs-page">
          <ContentWrapper openSidebar={this.state.openSidebar}>
            <CloseButton
              src={closeButton}
              alt="X"
              openSidebar={this.state.openSidebar}
              onClick={this.closeSidebar}
            />
            <MenuButton
              src={menuButton}
              alt=">"
              openSidebar={this.state.openSidebar}
              onClick={this.openSidebar}
            />
            <SubContentWrapper openSidebar={this.state.openSidebar}>
              <Sidebar {...this.props} content={sidebarContent} />
            </SubContentWrapper>
          </ContentWrapper>
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

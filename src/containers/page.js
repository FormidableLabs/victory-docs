import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import _Header from "../partials/header";
import _Sidebar from "../partials/sidebar";
import Footer from "../partials/footer";

const PageContainer = styled.main`
  position: relative;
  padding-left: ${({ spaceForSidebar, theme }) =>
    `calc(${theme.layout.stripesWidth} + ${
      spaceForSidebar ? theme.layout.sidebarWidth : "0px"
    })`};
  padding-top: ${({ theme }) => theme.layout.headerHeight};
`;

const Header = styled(_Header)`
  left: ${({ spaceForSidebar, theme }) =>
    `calc(${theme.layout.stripesWidth} + ${
      spaceForSidebar ? theme.layout.sidebarWidth : "0px"
    })`};
  position: fixed;
  top: 0;
  width: ${({ spaceForSidebar, theme }) =>
    `calc(100% - ${theme.layout.stripesWidth} - ${
      spaceForSidebar ? theme.layout.sidebarWidth : "0px"
    })`};
  z-index: 1;
`;

const SidebarContainer = styled.aside`
  display: flex;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`;

const stripeStyle = css`
  height: 100%;
  width: ${({ theme }) => `calc(${theme.layout.stripesWidth} / 2)`};
`;

const RedStripe = styled.div`
  ${stripeStyle}
  background-color: ${({ theme }) => theme.color.red};
`;

const PaleRedStripe = styled.div`
  ${stripeStyle}
  background-color: ${({ theme }) => theme.color.paleRed};
`;

const Sidebar = styled(_Sidebar)`
  height: 100%;
  position: fixed;
  left: ${({ theme }) => theme.layout.stripesWidth};
  top: 0;
  z-index: 1;
`;

const ContentContainer = styled.article`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) =>
    `${theme.layout.pageGutterTop} ${theme.layout.pageGutterRight} ${theme.layout.pageGutterBottom} ${theme.layout.pageGutterLeft}`};

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: ${({ theme }) =>
      `${theme.layout.md.pageGutterTop} ${theme.layout.md.pageGutterRight} ${theme.layout.md.pageGutterBottom} ${theme.layout.md.pageGutterLeft}`};
  }
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  width: 100%;
`;

const Page = ({ children, withSidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PageContainer spaceForSidebar={withSidebar}>
      <Header
        spaceForSidebar={withSidebar}
        onMenuClick={() => setSidebarOpen(true)}
      />

      <SidebarContainer>
        <RedStripe />
        <PaleRedStripe />
        {(withSidebar || sidebarOpen) && (
          <Sidebar onCloseClick={() => setSidebarOpen(false)} />
        )}
      </SidebarContainer>

      <ContentContainer>
        <Content>{children}</Content>
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  withSidebar: PropTypes.bool
};

export default Page;

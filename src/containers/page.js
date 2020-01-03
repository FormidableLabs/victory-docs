import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import _Header from "../partials/header";
import _Footer from "../partials/footer";
import Sidebar from "../partials/sidebar";

const PageContainer = styled.main`
  position: relative;
`;

const Header = styled(_Header)`
  left: ${({ theme }) => theme.layout.stripesWidth};
  position: fixed;
  top: 0;
  width: ${({ theme }) => `calc(100% - ${theme.layout.stripesWidth})`};
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

const ContentContainer = styled.article`
  display: flex;
  justify-content: center;
  left: ${({ theme }) => theme.layout.stripesWidth};
  padding-bottom: ${({ theme }) => theme.layout.pageGutterBottom};
  padding-left: ${({ theme }) => theme.layout.pageGutterLeft};
  padding-right: ${({ theme }) => theme.layout.pageGutterRight};
  padding-top: ${({ theme }) =>
    `calc(${theme.layout.headerHeight} + ${theme.layout.pageGutterTop})`};
  position: relative;
  width: ${({ theme }) => `calc(100% - ${theme.layout.stripesWidth})`};

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding-bottom: ${({ theme }) => theme.layout.md.pageGutterBottom};
    padding-left: ${({ theme }) => theme.layout.md.pageGutterLeft};
    padding-right: ${({ theme }) => theme.layout.md.pageGutterRight};
    padding-top: ${({ theme }) =>
      `calc(${theme.layout.headerHeight} + ${theme.layout.md.pageGutterTop})`};
  }
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  width: 100%;
`;

const Footer = styled(_Footer)`
  position: relative;
  z-index: 1;
`;

const Page = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PageContainer>
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <SidebarContainer>
        <RedStripe />
        <PaleRedStripe />
        {sidebarOpen && <Sidebar onCloseClick={() => setSidebarOpen(false)} />}
      </SidebarContainer>

      <ContentContainer>
        <Content>{children}</Content>
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
};

Page.propTypes = {
  children: PropTypes.node
};

export default Page;

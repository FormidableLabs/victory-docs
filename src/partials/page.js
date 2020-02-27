import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import _Header from "./header";
import _Sidebar from "../partials/sidebar";
import _Footer from "./footer";

// sidebar logic is as follows:
// if on large devices, sidebar is only shown if the `withSidebar` prop is
// `true`
// if on small devices, sidebar is always hidden until toggled open, regardless
// of the value of `withSidebar`

const PageContainer = styled.main`
  display: flex;
`;

const Header = styled(_Header)`
  left: ${({ theme }) => theme.layout.stripesWidth};
  position: fixed;
  top: 0;
  width: ${({ theme }) => `calc(100% - ${theme.layout.stripesWidth})`};
  width; 100%;
  z-index: ${({ showSidebar }) => (showSidebar ? 4 : 7)};

  @media ${({ theme }) => theme.mediaQuery.md} {
    left: ${({ spaceForSidebar, theme }) =>
      `calc(${spaceForSidebar ? theme.layout.sidebarWidth : "0rem"})`};
    width: 100%;
  }
`;

const SidebarContainer = styled.aside`
  display: flex;
  z-index: 5;
  height: 100vh;
  @media ${({ theme }) => theme.mediaQuery.md} {
    width: ${({ theme, showMd }) => (showMd ? theme.layout.sidebarWidth : 0)};
  }
`;

const stripeStyle = css`
  height: 100vh;
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
  display: ${({ show }) => (show ? "block" : "none")};
  @media ${({ theme }) => theme.mediaQuery.md} {
    display: ${({ showMd }) => (showMd ? "block" : "none")};
  }
`;

const ContentContainer = styled.article`
  display: flex;
  height: 100vh;
  overflow: scroll;
  justify-content: center;
  padding: ${({ theme }) =>
    `${theme.layout.pageGutterTop} ${theme.layout.pageGutterRight} ${theme.layout.pageGutterBottom} ${theme.layout.pageGutterLeft}`};
  width: 100vw;
  position: absolute;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: ${({ theme }) =>
      `${theme.layout.md.pageGutterTop} ${theme.layout.md.pageGutterRight} ${theme.layout.md.pageGutterBottom} ${theme.layout.md.pageGutterLeft}`};
    position: inherit;
  }
`;

const Content = styled.div`
  margin-top: ${({ theme }) => theme.layout.headerHeight};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  width: 100%;
  & > div:first-of-type {
    margin-bottom: 6rem;
    @media ${({ theme }) => theme.mediaQuery.md} {
      margin-bottom: 12.1rem;
    }
  }
`;

const Footer = styled(_Footer)`
  width: 100vw;
`;

const Page = props => {
  const { children, sidebarContent, withSidebar, location } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ref = useRef();

  const handleOutsideClick = e => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      sidebarOpen === true
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <>
      <Header
        location={location}
        showSidebar={sidebarOpen}
        spaceForSidebar={withSidebar}
        onMenuClick={() => setSidebarOpen(true)}
      />
      <PageContainer spaceForSidebar={withSidebar} className="Page-content">
        <SidebarContainer ref={ref} showMd={withSidebar}>
          <RedStripe />
          <PaleRedStripe />
          <Sidebar
            location={location}
            show={sidebarOpen}
            showMd={withSidebar}
            content={sidebarContent}
            onCloseClick={() => setSidebarOpen(false)}
          />
        </SidebarContainer>

        <ContentContainer showMd={withSidebar}>
          <Content>{children}</Content>
        </ContentContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  sidebarContent: PropTypes.array,
  withSidebar: PropTypes.bool
};

export default Page;

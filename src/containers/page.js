import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Header from "../partials/header";
import Footer from "../partials/footer";

const FixedHeader = styled(Header)`
  left: ${({ theme }) => theme.layout.stripesWidth};
  position: fixed;
  top: 0;
  width: ${({ theme }) => `calc(100% - ${theme.layout.stripesWidth})`};
  z-index: 1;
`;

const StripesContainer = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
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

const Page = ({ children }) => {
  return (
    <Fragment>
      <FixedHeader />

      <StripesContainer>
        <RedStripe />
        <PaleRedStripe />
      </StripesContainer>

      <ContentContainer>
        <Content>{children}</Content>
      </ContentContainer>

      <Footer />
    </Fragment>
  );
};

Page.propTypes = {
  children: PropTypes.node
};

export default Page;

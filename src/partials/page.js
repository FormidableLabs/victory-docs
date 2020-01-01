import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header, { HEADER_HEIGHT } from "./header";
import Footer from "./footer";

const FixedHeader = styled(Header)`
  position: fixed;
  top: 0;
`;

const Content = styled.article`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  padding: ${({ theme }) =>
    `calc(${HEADER_HEIGHT} + ${theme.layout.pageGutterTop}) ${theme.layout.pageGutterSide} ${theme.layout.pageGutterBottom} ${theme.layout.pageGutterSide}`};
`;

const Page = ({ children }) => {
  return (
    <Fragment>
      <FixedHeader />
      <Content>{children}</Content>
      <Footer />
    </Fragment>
  );
};

Page.propTypes = {
  children: PropTypes.node
};

export default Page;

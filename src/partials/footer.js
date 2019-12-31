import React from "react";
import SVG from "react-inlinesvg";
import styled from "styled-components";
import formidableLogo from "../../static/logos/logo-formidable.svg";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.xlg} ${theme.spacing.md}`};
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1072px;
    padding-bottom: ${({ theme }) => theme.spacing.lg};
    padding-top: ${({ theme }) => theme.spacing.lg};
  }
`;

const LogoAndContact = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  margin-right: ${({ theme }) => theme.spacing.lg};
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    color: ${({ theme }) => theme.color.white};
  }
`;

const Logo = styled(SVG)`
  margin-right: ${({ theme }) => theme.spacing.sm};

  > svg {
    color: ${({ theme }) => theme.color.white};
    height: 6rem;
  }
`;

const Blurb = styled.div`
  max-width: 536px;
`;

const Footer = () => (
  <FooterContainer>
    <InnerContainer>
      <LogoAndContact>
        <a href="https://formidable.com">
          <Logo src={formidableLogo} />
        </a>
        <Contact>
          <a href="https://formidable.com/contact/">CONTACT</a>
          <a href="https://formidable.com/careers/">CAREERS</a>
        </Contact>
      </LogoAndContact>
      <Blurb>
        A little blurb about Formidable. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </Blurb>
    </InnerContainer>
  </FooterContainer>
);

export default Footer;

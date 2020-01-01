import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Prefetch, withRouteData } from "react-static";
import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

import config from "../../static-config-parts/site-data";
import formidableIcon from "../../static/logos/logo-formidable-icon.svg";
import formidableLogo from "../../static/logos/logo-formidable.svg";
import burgerIcon from "../../static/burger.svg";

const HeaderContainer = styled.header`
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.14);
  display: flex;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.layout.pageGutter};
`;

const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  width: 100%;
`;

const LeftContainer = styled.div`
  align-items: center;
  display: flex;
`;

const BurgerIcon = styled(SVG)`
  display: flex;
  margin-right: ${({ theme }) => theme.spacing.sm};

  @media ${({ theme }) => theme.mediaQuery.sm} {
    display: none;
  }
`;

const VictoryLogo = styled.span`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 4px;
  margin-right: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
`;

const NavLinksList = styled.ul`
  margin: 0;
  display: none;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    display: block;
  }
`;

const NavItemStyle = css`
  color: ${({ active, theme }) =>
    active ? theme.color.red : theme.color.gray};
  font-weight: bold;
  letter-spacing: 1px;
  margin-right: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
`;

const NavLink = styled(Link)`
  ${NavItemStyle}
`;

const NavAnchor = styled.a`
  ${NavItemStyle}
`;

const FormidableIcon = styled(SVG)`
  color: ${({ theme }) => theme.color.red};
  display: flex;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    display: none;
  }

  > svg {
    height: 24px;
    width: 18px;
  }
`;

const FormidableLogo = styled(SVG)`
  display: none;
  height: 28px;
  position: relative;
  top: -1px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    display: block;
  }
`;

const Header = ({ history }) => {
  const { location } = history;
  const { pathname } = location;

  return (
    <HeaderContainer>
      <InnerContainer>
        <LeftContainer>
          <BurgerIcon src={burgerIcon} />
          <VictoryLogo>Victory</VictoryLogo>

          <NavLinksList>
            <Prefetch path="/about">
              <NavLink active={pathname.includes("about")} to="/about/">
                About
              </NavLink>
            </Prefetch>
            <Prefetch path="/docs">
              <NavLink active={pathname.includes("docs")} to="/docs/">
                Docs
              </NavLink>
            </Prefetch>
            <Prefetch path="/guides">
              <NavLink active={pathname.includes("guides")} to="/guides/">
                Guides
              </NavLink>
            </Prefetch>
            <Prefetch path="/gallery">
              <NavLink active={pathname.includes("gallery")} to="/gallery/">
                Gallery
              </NavLink>
            </Prefetch>

            {config.projectLinks.map(link => (
              <NavAnchor key={link.url} href={link.url}>
                {link.label}
              </NavAnchor>
            ))}

            <Prefetch path="/faq">
              <NavLink active={pathname.includes("faq")} to="/faq/">
                FAQs
              </NavLink>
            </Prefetch>
          </NavLinksList>
        </LeftContainer>

        <FormidableIcon src={formidableIcon} />
        <FormidableLogo src={formidableLogo} />
      </InnerContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({ pathname: PropTypes.string })
  })
};

export default withRouteData(Header);

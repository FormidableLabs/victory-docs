import React from "react";
import PropTypes from "prop-types";
import { Link, Prefetch, withRouter } from "react-static";
import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

import config from "../../static-config-parts/site-data";
import formidableIcon from "../../static/logos/logo-formidable-icon.svg";
import formidableLogo from "../../static/logos/logo-formidable.svg";
import burgerIcon from "../../static/burger.svg";

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.14);
  display: flex;
  height: ${({ theme }) => theme.layout.headerHeight};
  justify-content: center;
  padding-left: ${({ theme }) => theme.layout.pageGutterLeft};
  padding-right: ${({ theme }) => theme.layout.pageGutterRight};

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding-left: ${({ theme }) => theme.layout.md.pageGutterLeft};
    padding-right: ${({ theme }) => theme.layout.md.pageGutterRight};
  }
`;

const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  width: 100%;
`;

const LeftContainer = styled.div`
  align-items: center;
  display: flex;
`;

const MenuButton = styled.button`
  margin-right: ${({ theme }) => theme.spacing.sm};

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: none;
  }
`;

const BurgerIcon = styled(SVG)`
  display: flex;
`;

const VictoryLogoLink = styled(Link)`
  color: ${({ theme }) => theme.color.nearBlack};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 4px;
  margin-right: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
`;

const NavLinksList = styled.ul`
  margin: 0;
  display: none;

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: block;
  }
`;

const navItemStyle = css`
  color: ${({ active, theme }) =>
    active ? theme.color.red : theme.color.gray};
  font-weight: bold;
  letter-spacing: 1px;
  margin-right: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
`;

const NavLink = styled(Link)`
  ${navItemStyle}
`;

const NavAnchor = styled.a`
  ${navItemStyle}
`;

const FormidableIcon = styled(SVG)`
  color: ${({ theme }) => theme.color.red};
  display: flex;

  @media ${({ theme }) => theme.mediaQuery.md} {
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

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: block;
  }
`;

const Header = ({ className = "", location, onMenuClick }) => {
  const { pathname } = location;

  return (
    <HeaderContainer className={className}>
      <InnerContainer>
        <LeftContainer>
          <MenuButton onClick={onMenuClick}>
            <BurgerIcon src={burgerIcon} />
          </MenuButton>
          <VictoryLogoLink to="/">Victory</VictoryLogoLink>

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
  className: PropTypes.string,
  location: PropTypes.shape({ pathname: PropTypes.string }),
  onMenuClick: PropTypes.func
};

export default withRouter(Header);

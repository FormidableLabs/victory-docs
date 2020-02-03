import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import { SidebarSectionHeading, SidebarSectionList } from "../styles";

// Refactor these into shared styles
const SidebarListItem = styled.li`
  padding: 0;
  margin: 0;
  width: 100%;
`;

const SidebarListItemLinkStyle = css`
  color: ${({ theme }) => theme.color.brown};
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sidebarHeading};
  display: block;
  padding: 0.4rem 0.7rem 0.3rem 3.4rem;
  hyphens: auto;
  &.is-active {
    background-color: ${({ theme }) => theme.color.darkGray};
  }
`;

const SidebarListItemLink = styled(NavLink)`
  ${SidebarListItemLinkStyle}
`;
const SidebarListItemAnchorLink = styled.a`
  ${SidebarListItemLinkStyle}
`;

const MobileSidebarLinks = styled.div`
  @media ${({ theme }) => theme.mediaQuery.md} {
    display: none;
  }
`;

const renderMobileSidebarLinks = mobileLinks => {
  return mobileLinks.map(link => {
    const isExternal = link.slug.charAt(0) !== "/";
    return (
      <SidebarListItem key={link.slug}>
        {isExternal ? (
          <SidebarListItemAnchorLink href={link.slug} target="_blank">
            {link.title}
          </SidebarListItemAnchorLink>
        ) : (
          <SidebarListItemLink
            to={`${link.slug}`}
            activeClassName={"is-active"}
            prefetch={"data"}
          >
            {link.title}
          </SidebarListItemLink>
        )}
      </SidebarListItem>
    );
  });
};

const Introduction = ({ content }) => {
  const mobileLinks = [
    { slug: "/about", title: "About" },
    { slug: "/docs/faqs", title: "Gallery" },
    { slug: "https://spectrum.chat/victory", title: "Support" },
    { slug: "https://github.com/FormidableLabs/victory", title: "Github" },
    { slug: "/docs/faqs", title: "FAQs" }
  ];
  return !isEmpty(content) ? (
    <>
      <SidebarSectionHeading>Introduction</SidebarSectionHeading>
      <SidebarSectionList>
        {content}
        <MobileSidebarLinks>
          {renderMobileSidebarLinks(mobileLinks)}
        </MobileSidebarLinks>
      </SidebarSectionList>
    </>
  ) : null;
};

Introduction.propTypes = {
  content: PropTypes.array
};

export default Introduction;

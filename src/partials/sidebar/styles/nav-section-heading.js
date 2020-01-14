import styled from "styled-components";

//top level heading for side nav
// todo fix hierarchy headings

const NavSectionHeading = styled.p`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sidebarHeading};
  color: ${({ theme }) => theme.color.red};
  margin: ${({ theme }) => `${theme.spacing.sm} 0 0 0}`};
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing.sm};
  color: salmon;
`;

export default NavSectionHeading;

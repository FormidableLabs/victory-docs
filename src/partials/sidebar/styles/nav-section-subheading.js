import styled from "styled-components";

const NavSectionList = styled.ul`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sidebarHeading};
  color: #bc5240;
  margin-top: 0;
`;

export default NavSectionList;

import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import prism from "./prism";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${prism}

  body {
    font-family: ${({ theme }) => theme.font.primary};
  }

  pre, code {
    font-family: ${({ theme }) => theme.font.monospace};
  }
`;

export default GlobalStyle;

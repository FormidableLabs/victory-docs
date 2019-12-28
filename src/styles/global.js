import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: ${({ theme }) => theme.font.primary};
  }

  pre, code {
    font-family: ${({ theme }) => theme.font.monospace};
  }
`;

export default GlobalStyle;

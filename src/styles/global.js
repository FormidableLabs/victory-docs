import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import prism from "./prism";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${prism}

  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.primary};
    line-height: 1.9;
    overflow: hidden;
    position: relative;
  }

  /**
   * Reset default spacing and border for appropriate elements.
   * (suitcss-base)
   */

  blockquote,
  dl,
  dd,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p,
  pre,
  ol,
  ul,
  table {
    margin: 1.375em 0 0 0;
  }

  button {
    background: transparent;
    border: 0;
    padding: 0;
  }

  /**
   * Work around a Firefox/IE bug where the transparent button background
   * results in a loss of the default button focus styles.
   * (suitcss-base)
   */

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  /**
   * Suppress the focus outline on elements that cannot be accessed via keyboard.
   * This prevents an unwanted focus outline from appearing around elements that
   * might still respond to pointer events.
   * (suitcss-base)
   */

  [tabindex='-1']:focus {
    outline: none !important;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  iframe {
    border: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ol ol,
  ul ul {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2.75rem;
    font-weight: bold;
    line-height: 1.2;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 1.5;
  }

  h2 {
    font-size: 1.75rem;
  }
  @media (${({ theme }) => theme.mediaQuery.medium}) {
    h2 {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.125rem;
    font-weight: normal;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  h6 {
    font-size: 1.25rem;
  }

  h1 code,
  h2 code,
  h3 code,
  h4 code,
  h5 code,
  h6 code {
    border: 0;
    font-size: 0.85em;
    padding: 0.25em 0.333em 0.2em;
  }

  strong {
    font-style: normal;
    font-weight: 500;
  }

  pre, code {
    font-family: ${({ theme }) => theme.font.monospace};
  }

  li > pre {
    margin-left: 0;
  }

  pre[class*='language-'] code,
  pre[class*='lang-'] code {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  pre code {
    border: 0;
  }

  code {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1px;
    font-variant-ligatures: none;
    padding: 0.33em 0.333em 0.28em;
    word-break: break-word;
  }
  @media (${({ theme }) => theme.mediaQuery.medium}) {
    code {
      font-size: 0.875rem;
    }
  }

  svg {
    fill: currentColor;
  }

  table {
    border-collapse: collapse;
    display: block;
    overflow: auto;
    width: 100%;
  }

  thead,
  tbody {
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  thead {
    font: inherit;
    vertical-align: baseline;
  }

  tbody {
    vertical-align: middle;
  }

  th,
  td {
    border: 1px solid ${({ theme }) => theme.color.gray};
    padding: 0.425em 0.75em;
    vertical-align: top;
  }

  th code,
  td code {
    background: none;
  }

  a:link {
    color: ${({ theme }) => theme.color.red};
    text-decoration: none;
    transition: color 250ms ease-in;
  }

  a:visited {
    color: ${({ theme }) => theme.color.paleRed};
  }

  a:focus,
  a:hover {
    color: ${({ theme }) => theme.color.black};
    transition: color 300ms ease-out;
  }

  a:active {
    transition: color 300ms ease-out;
  }
`;

export default GlobalStyle;

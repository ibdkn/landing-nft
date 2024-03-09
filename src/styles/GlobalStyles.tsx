import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul li {
    list-style: none;
  }
  
  button {
    cursor: pointer;
    border: none;
  }
  
  img {
    width: 100%;
  }

  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    color: ${theme.colors.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  section {
    padding: 92px 0;
    background-color: ${theme.colors.primaryBg};
  }
`
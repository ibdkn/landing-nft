import {createGlobalStyle} from "styled-components";

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

  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
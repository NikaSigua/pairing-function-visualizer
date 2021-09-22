import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    font-family: "Georgia";
  }

  body {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  summary {
    cursor: pointer;
  }
`;

export default GlobalStyle;
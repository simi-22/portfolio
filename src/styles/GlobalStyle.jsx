import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

  * {
    box-sizing: border-box;
    text-decoration: none;
    font-size: 0.625rem;
    margin: 0px;
    padding: 0px;
    list-style: none;
    color: inherit;
  }
  a{
    cursor: pointer;
  }
  body {
    background-size: 100%;
    height: 100%;
    width: 100%;
    font-family: 'SUITE-Regular';
    background-image: linear-gradient(90deg, pink 20%, #ebebeb 80%);
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  body {
    font: 14px 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
    font-family: "Roboto", sans-serif;
  }
  h1 {
    text-align: center
  }
`;
export default GlobalStyle;

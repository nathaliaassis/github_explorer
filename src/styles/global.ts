import { createGlobalStyle } from 'styled-components';
import bg from '../assets/bg_image.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #F0F0F5 url(${bg}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }
  body, button, input {
    font: 16px Roboto, sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 18px;
  }

  button,a {
    cursor: pointer;
  }
`;
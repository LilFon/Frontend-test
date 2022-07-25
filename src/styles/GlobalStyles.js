import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root {
    
    --white: #ffffff;
    --black: #000000;
    --cream: #f4f5f7;
    --green: #31d364;
    --blue:  #2bb9da;
    --gray:  #9495a4;
    --light-gray: #fafafa;
    --dark-blue:  #2D314E;
    --dark-green: #2f8968;
    --lime-green: hsl(136, 65%, 51%);
    --active-green: hsl(143, 61%, 70%);
    --active-blue: hsl(183, 56%, 68%);
    
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Public Sans', sans-serif;
  } 
  `
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

  *{
    margin: 0;
    border: 0;
    outline: 0;
    padding: 0;
    
    list-style: none;
    vertical-align: baseline;
    list-style: none;
    
    font: inherit;
    font-size: ${props => props.theme.typography.size.default};
    font-family: ${props => props.theme.typography.primary};
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  body{
    background-color: ${props => props.theme.colors.background};
  }
`
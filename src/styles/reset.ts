import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

  @media (max-width: ${props => props.theme.breakpoints.large_cellphone}){
    *{
      font-size: ${props => props.theme.typography.size.small};
    }
  }

  body{
    background-color: ${props => props.theme.colors.background};
  }

  html{
    scroll-behavior: smooth;
  }
`
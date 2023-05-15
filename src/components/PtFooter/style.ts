import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background_contrast};
  box-sizing: border-box;
  min-height: 50px;
  height: 5vh;

  a{
    font-size: ${props => props.theme.typography.size.small};
    color: ${props => props.theme.colors.text};
  }
`
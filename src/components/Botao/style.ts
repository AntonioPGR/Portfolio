import styled from "styled-components"

export const StyledBotao = styled.button`
  padding: ${props => `${props.theme.spacing.small} ${props.theme.spacing.large}`};
  background-color: ${props => props.theme.colors.action};
  border-radius: ${props => props.theme.spacing.defaultBorderRadius};
  color: ${props => props.theme.colors.text};
  width: 200px;
  cursor: pointer;

  &:hover{
    filter: brightness(0.9)
  }
`
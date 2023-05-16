import styled from "styled-components"

export const StyledInputContainer = styled.div<{icon:string | undefined, largeHeight?:boolean}>`
  display: grid;
  grid-template-columns: ${props => props.icon? 'auto 1fr' : '1fr'};
  align-items: center;
  justify-content: center;
  gap: ${props=>props.theme.spacing.small};
  width: 100%;

  height: ${props => props.largeHeight? '224px' : '56px'};
  padding: 0 ${props=>props.theme.spacing.medium};
  box-sizing: border-box;

  background-color: ${props=>props.theme.colors.text};
  border-radius: ${props=>props.theme.spacing.defaultBorderRadius};

  img{
    height: 24px;
    width: auto;
  }

  input{
    width: 100%;
    font-size: ${props=>props.theme.typography.size.default};
    color: ${props => props.theme.colors.background};
    background-color: transparent;
    line-height: ${props=>props.theme.typography.size.default};
  }
`

export const StyledLabel = styled.label`
  font-size: ${props=>props.theme.typography.size.small};
  color: ${props=>props.theme.colors.text};
  margin-bottom: ${props=>props.theme.spacing.small};
  display: block;
`


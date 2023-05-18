import { styled } from "styled-components";


export const StyledLabel = styled.label`
  font-size: ${props=>props.theme.typography.size.small};
  color: ${props=>props.theme.colors.text};
  margin-bottom: ${props=>props.theme.spacing.small};
  display: block;
`

export const StyledCaption = styled(StyledLabel).attrs(() => ({
  as: 'p',
}))`
  margin-top: ${props=>props.theme.spacing.small};
  color: ${props=>props.theme.colors.text_contrast};

`

export const StyledBaseInputContainer = styled.div`
  width: 100%;
  padding: ${props=>props.theme.spacing.small} ${props=>props.theme.spacing.medium};
  box-sizing: border-box;
  background-color: ${props=>props.theme.colors.text};
  border-radius: ${props=>props.theme.spacing.defaultBorderRadius};

  input, textarea{
    width: 100%;
    height: 100%;
    font-size: ${props=>props.theme.typography.size.default};
    color: ${props => props.theme.colors.background};
    background-color: transparent;
  }
`
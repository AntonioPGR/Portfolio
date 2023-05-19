import styled from "styled-components"
import { StyledBaseInputContainer, StyledLabel } from "../Contact/style/styledFormField"

export const StyledInputContainer = styled(StyledBaseInputContainer)<{icon?:string}>`
  display: grid;
  grid-template-columns: ${props => props.icon? 'auto 1fr' : '1fr'};
  align-items: center;
  justify-content: center;
  gap: ${props=>props.theme.spacing.small};
  min-height: 56px;

  i{
    display: flex;
    align-items: center;

    img{
      height: 24px;
      width: auto;
    }
  }
`

export { StyledLabel }
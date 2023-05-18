import styled from "styled-components"
import { StyledBaseInputContainer, StyledLabel } from "../style/styledFormField"

export const StyledInputContainer = styled(StyledBaseInputContainer)<{icon?:string}>`
  display: grid;
  grid-template-columns: ${props => props.icon? 'auto 1fr' : '1fr'};
  align-items: center;
  justify-content: center;
  gap: ${props=>props.theme.spacing.small};
  min-height: 56px;

  img{
    height: 24px;
    width: auto;
  }
`

export { StyledLabel }
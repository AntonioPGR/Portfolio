import styled from "styled-components"
import { StyledBaseInputContainer, StyledLabel } from "../style/styledFormField"

export const StyledTextAreaContainer = styled(StyledBaseInputContainer)`
  height: 224px;

  textarea{
    resize: none;
  }
`

export { StyledLabel }
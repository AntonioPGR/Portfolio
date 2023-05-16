import { styled } from "styled-components";

export const StyledMain = styled.main`
  max-width: 1366px;
  padding: 24px;
  min-height: 90vh;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  gap: ${props => props.theme.spacing.large};
`
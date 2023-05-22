import { styled } from "styled-components";


export const StyledSkillsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.large};
  width: 100%;
`
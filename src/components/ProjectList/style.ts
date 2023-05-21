import styled from "styled-components";


export const StyledProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${props => props.theme.spacing.large};
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

`
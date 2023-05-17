import { styled } from "styled-components";


export const StyledSkills = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: ${props => props.theme.spacing.large};

  .content{
    display: grid;
    grid-template-columns: 4fr 3fr;
    align-items: flex-start;
    justify-content: center;
    gap: 48px;
  }
`
import { styled } from "styled-components";


export const StyledSkills = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: ${props => props.theme.spacing.large};

  .content{
    max-width: 100%;
    max-height: 100%;
    display: grid;
    grid-template-columns: 4fr 3fr;
    align-items: flex-start;
    justify-content: center;
    gap: 48px;
  }

  @media (max-width: 1300px){
    .content{
      grid-template-columns: 2fr 1fr;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.laptop}){
    .content{
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      gap: ${props => props.theme.spacing.large};
    }
  }
`
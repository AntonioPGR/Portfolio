import { styled } from "styled-components";


export const StyledAboutMe = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: ${props => props.theme.spacing.large};
  
  .content{
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: flex-start;
    justify-content: center;
    gap: ${props => props.theme.spacing.large};
  
    .paragraphs{
      display: flex;
      flex-flow: column wrap;
      gap: ${props => props.theme.spacing.medium};
    }

  }

`
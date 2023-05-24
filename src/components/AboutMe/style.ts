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

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: 370px;
      object-position: 0 5%;
      border-radius: ${props => props.theme.spacing.largeBorderRadius};
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.laptop}){
      grid-template-columns: 1fr;
      grid-template-rows: 200px 1fr;

      .image__container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img{
          width: 200px;
          height: 200px;
          object-fit: cover;
          object-position: 0 5%;
          border-radius: ${props => props.theme.spacing.largeBorderRadius};
        }
      }
    }

  }

`
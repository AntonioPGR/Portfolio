import styled from "styled-components"

export const StyledSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: ${props=>props.theme.spacing.small};
  padding: ${props=>props.theme.spacing.large} 0;

  border-top: 3px solid ${props=>props.theme.colors.background_contrast};

  a{
    display: block;
    width: 50px;
    height: auto;

    img{
      width: 100%;
      height: auto;

      &:hover{
        filter: brightness(.8);
      }
    }
  }

  
`
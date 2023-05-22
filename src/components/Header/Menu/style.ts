import styled from "styled-components";

export const StyledMenu = styled.div`

  nav{
    display: flex;
    flex-flow: row nowrap;
    gap: ${props => props.theme.spacing.medium};
  }

  .icon{
    display: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}){

    .icon{
      display: block;
    }

    nav{
      display: none;
    }

    &:hover nav{
      display: flex;
      flex-flow: column nowrap;
      position: absolute;
      right: 24px;
      top: 72px;
      gap: 0;
      text-align: right;
      a{
        padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
        cursor: pointer;
        background-color: ${props => props.theme.colors.background_contrast};
      }
    }
  }
`
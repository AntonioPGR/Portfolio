import { styled } from "styled-components";


export const StyledHeroTitle = styled.div`

  width: 100%;
  max-width: 550px;
  
  .sobtitle{
    font-size: 80px;
    line-height: 80px;
  }
  
  .title{
    margin-bottom: ${props => props.theme.spacing.medium};

    span {
      font-size: 120px;
      display: block;
      line-height: 120px;
    }
  }
  
  .colorized{
    color: ${props => props.theme.colors.action};
  }

  @media (max-width:${props => props.theme.breakpoints.tablet}){
    .sobtitle{
      font-size: 40px;
      line-height: 40px;
    }
    
    .title{
      span {
        font-size: 80px;
        line-height: 80px;
      }
    }
  }

  @media (max-width:${props => props.theme.breakpoints.small_cellphohe}){
    .sobtitle{
      font-size: 35px;
      line-height: 35px;
    }
    
    .title{
      span {
        font-size: 70px;
        line-height: 70px;
      }
    }
  }
`
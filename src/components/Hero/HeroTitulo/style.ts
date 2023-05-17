import { styled } from "styled-components";


export const StyledHeroTitle = styled.div`
  
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
`
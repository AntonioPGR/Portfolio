import { styled } from "styled-components";


export const StyledContact = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: ${props => props.theme.spacing.large};

  form{
    max-width: 700px;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    gap: ${props => props.theme.spacing.medium};
  }

  .botao__container{
    display: flex;
    justify-content: center;
  }

  .form__line{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${props => props.theme.spacing.medium};
  }

  .success{
    color: green;
  }

  .warning{
    color: #C21010;
  }

`
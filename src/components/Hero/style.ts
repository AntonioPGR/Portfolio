import { styled } from "styled-components";


export const StyledHero = styled.section`

  margin: auto;
  max-width: 1134px;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  justify-content: space-between;
  height: 80vh;

  div{
    max-width: 500px;
  }

  .hero__imagem > img{
    max-width: 100%;
    max-height: 100%;
  }
`
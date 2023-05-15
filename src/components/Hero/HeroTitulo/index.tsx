import { StyledHeroTitle } from './style'

export const HeroTitulo = () => {
  return (
    <StyledHeroTitle>
      <p className='sobtitle'> Prazer, </p>
      <h1 className='title'> 
        <span> Antonio </span>
        <span className='colorized'> Pacheco </span> 
      </h1>
      <p className='subtitle'> Artista, ou como preferem chamar: Desenvolvedor front-end e UI designer. </p>
    </StyledHeroTitle>
  )
}
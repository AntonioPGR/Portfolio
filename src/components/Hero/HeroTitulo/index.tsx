import { StyledHeroTitle } from './style'

export const HeroTitulo = () => {
  return (
    <StyledHeroTitle>
      <p className='sobtitle'> Prazer, </p>
      <h1 className='title'> 
        <span> Antonio </span>
        <span className='colorized'> Pacheco </span> 
      </h1>
      <p className='subtitle'> <span className="colorized">Artista</span>, ou como preferem chamar: Desenvolvedor <span className="colorized">front-end</span> e <span className="colorized">UI</span> designer. </p>
    </StyledHeroTitle>
  )
}
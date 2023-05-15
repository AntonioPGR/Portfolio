// COMPONENTS
import { HeroTitulo } from "./HeroTitulo"
import { StyledHero } from "./style"


export const Hero = () => {
  return (
    <StyledHero>
      <HeroTitulo />
      {/* <div className="hero__imagem">
        <img src="https://img.freepik.com/fotos-gratis/perfil-de-um-homem-barbudo-estiloso-que-fez-um-novo-penteado-na-barbearia_176420-18800.jpg?w=2000" alt="" />
      </div> */}
    </StyledHero>
  )
}
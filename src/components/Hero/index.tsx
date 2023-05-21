// COMPONENTS
import { HeroTitulo } from "./HeroTitulo"
// IMAGES
// import DefaultImage from "images/default.svg"
// STYLES
import { StyledHero } from "./style"


export const Hero = () => {
  return (
    <StyledHero>
      <HeroTitulo />
      {/* <div className="hero__imagem">
        <img src={DefaultImage} alt="default just for tests" />
      </div> */}
    </StyledHero>
  )
}
import { TituloSessao } from "components/TituloSessao"
import { StyledAboutMe } from "./style"
import DefaultImage from "images/default.svg"
import { useState } from "react"



export const AboutMe = () => {

  const [windowWidth, ] = useState(window.innerWidth)


  return (
    <StyledAboutMe id="aboutMe">
      <TituloSessao position={windowWidth <= 768? 'Center' : 'Right'}>
        Quem sou eu?
      </TituloSessao>
      <div className="content">
        <img src={DefaultImage} alt="default just for tests" />
        <div className="paragraphs">
          <p>
            Estudante de programação apaixonado por tecnologia e desenvolvimento web, em resumo, esse sou eu.
          </p>
          <p>
            Olá! Me chamo Antonio Pacheco, e desde os 14 anos estudo programação e desejo trabalhar nessa área pelo resto da minha vida. Sou mineiro, nascido em Poços de Caldas e tenho o objetivo de mostrar ao mundo meus projetos e habilidades em programação, buscando sempre me superar, sendo melhor a cada dia e tendo a esperança de fazer a diferença através da tecnologia. 
          </p>
          <p>
            Seja bem vindo ao meu portfólio, espero que sirva como uma vitrine para demonstrar tudo o que aprendi até agora, todo meu conhecimento disponível e que possa lhe mostrar toda minha paixão e carinho pela área de tecnologia!
          </p>
        </div>
      </div>
    </StyledAboutMe>
  )
}
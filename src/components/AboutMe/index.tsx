import { TituloSessao } from "components/TituloSessao"
import { StyledAboutMe } from "./style"
import DefaultImage from "images/default.svg"



export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <TituloSessao position="Right">
        Quem sou eu?
      </TituloSessao>
      <div className="content">
        <img src={DefaultImage} alt="default just for tests" />
        <div>
          <p>
            Um estudante de programação apaixonado por tecnologia e principalmente desenvolvimento web, em resumo, esse sou eu. Olá! Me chamo Antonio Pacheco, e desde os 14 anos estudo programação e tenho certeza de que desejo trabalhar nessa área pelo resto da minha vida. Sou mineiro, nascido em Poços de Caldas, e atualmente estou cursando menor aprendiz na empresa Curimbaba. Meu objetivo é mostrar ao mundo meus projetos e habilidades em programação, com responsabilidade, competência e coragem para aprender novas tecnologias.
          </p>
          <p>
            Busco sempre me superar, sendo melhor a cada dia, e trago comigo a esperança de fazer a diferença através da tecnologia. Quero que meu portfólio seja uma vitrine de tudo o que aprendi até agora, destacando minha paixão pela programação e minha dedicação em criar projetos inovadores e de qualidade. Seja bem-vindo ao meu portfólio, onde você poderá conhecer um pouco mais sobre mim e meus projetos na área de desenvolvimento web!
          </p>
        </div>
      </div>
    </StyledAboutMe>
  )
}
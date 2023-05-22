import { TituloSessao } from "components/TituloSessao"
import { SkillsList } from "./skillsList"
import { StyledSkills } from "./style"
import { Details } from "./details"
import { useState } from 'react'


export const Skills = () => {

  const [windowWidth, ] = useState(window.innerWidth)

  return (
    <StyledSkills id="skills">
      <TituloSessao position={windowWidth <= 768? 'Center' : 'Right'}>
        Conhecimentos
      </TituloSessao>
      <div className="content">
        <SkillsList />
        <Details />
      </div>
    </StyledSkills>
  )

}
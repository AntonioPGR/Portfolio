import { TituloSessao } from "components/TituloSessao"
import { SkillsList } from "./skillsList"
import { StyledSkills } from "./style"
import { Details } from "./details"


export const Skills = () => {

  return (
    <StyledSkills>
      <TituloSessao position="Left">
        Conhecimentos
      </TituloSessao>
      <div className="content">
        <SkillsList />
        <Details />
      </div>
    </StyledSkills>
  )

}
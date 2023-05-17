import { StyledSkill } from "./styles"

interface PropsSkill{
  language: ISkill,
  onClick: () => void
}

export const Skill = ({language, onClick}:PropsSkill) => {

  return (
    <StyledSkill onClick={onClick}>
      <img src={language.icone} alt={language.nome} />
    </StyledSkill>
  )

}
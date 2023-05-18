import { StyledSkill } from "./styles"

interface PropsSkill{
  language: ISkill,
  onClick: () => void,
  selected?: boolean
}

export const Skill = ({language, onClick, selected}:PropsSkill) => {

  return (
    <StyledSkill onClick={onClick} selected={selected}>
      <img src={language.icone} alt={language.nome} />
    </StyledSkill>
  )

}
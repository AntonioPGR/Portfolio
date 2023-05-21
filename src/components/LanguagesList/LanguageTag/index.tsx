import { useSetRecoilState } from "recoil"
import { StyledLanguageTag } from "./style"
import { StateSelectedLanguages } from "states/selectedLanguages"

export interface PropsLanguageTag {
  selectable: boolean,
  selected: boolean,
  language: ILanguageTag
}
export const LanguageTag = ({language, selectable, selected}:PropsLanguageTag) => {

  const setSelectedLanguages = useSetRecoilState(StateSelectedLanguages)

  const handleClick = () => {
    if(selectable){
      changeSelectState()
    }
  }

  const changeSelectState = () => {
    if(selected){
      setSelectedLanguages(prev => prev.filter((value) => {
        return value.id !== language.id
      }))
    } else {
      setSelectedLanguages((prev) => [...prev, language])
    }

  }

  return (
    <StyledLanguageTag onClick={handleClick} $selectable={selectable} selected={selected}>
      {language.label}
    </StyledLanguageTag>
  )
}


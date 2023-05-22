import { useRecoilValue } from "recoil"
import { LanguageTag } from "./LanguageTag"
import { StateSelectedLanguages } from "states/selectedLanguages"
import { StateLanguagesList } from "states/languages"
import { StyledLanguagesList } from "./style"


export interface PropsLanguageTag {
  selectable: boolean,
  languages?: ILanguageTag[]
}


export const LanguageList = ({languages, selectable}:PropsLanguageTag) => {

  const selectedLanguages = useRecoilValue(StateSelectedLanguages)
  const languageList = useRecoilValue(StateLanguagesList)

  if(!languages){
    languages = languageList;
  }

  return (
    <StyledLanguagesList>
      {
        languages.map((language) => {
          const selected = selectedLanguages.includes(language)
          return (
            <LanguageTag key={language.id} selected={selected} selectable={selectable} language={language} />
          );
        })
      }
    </StyledLanguagesList>
  )
}


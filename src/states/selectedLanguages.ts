import { atom } from "recoil";


export const StateSelectedLanguages = atom<ILanguageTag[]>({
  key: "SelectedLanguages",
  default: []
})
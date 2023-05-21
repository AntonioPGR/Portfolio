import { atom } from "recoil";
import {  data_languages } from "data/languages";


export const StateLanguagesList = atom<ILanguageTag[]>({
  key: "LanguagesList",
  default: data_languages
})
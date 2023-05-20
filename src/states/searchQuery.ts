import { atom } from "recoil";


export const StateSearchQuery = atom<string>({
  key: "SearchQuery",
  default: ''
})
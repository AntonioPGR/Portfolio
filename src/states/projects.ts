import { atom } from "recoil";
import { data_projects } from "data/projects"


export const StateProjectsList = atom<IProject[]>({
  key: "ProjectsList",
  default: data_projects
})
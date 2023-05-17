import { atom } from "recoil";
import { data_skills } from "data/skills";


export const StateCurrentSkill = atom({
  key: "CurrentSkill",
  default: data_skills[0]
})
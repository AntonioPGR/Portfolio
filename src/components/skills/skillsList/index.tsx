import { useSetRecoilState } from "recoil"
import { Skill } from "./skill"
import { StyledSkillsList } from "./styles"
import { data_skills } from "data/skills"
import { StateCurrentSkill } from "../states/currentSkill"


export const SkillsList = () => {
  const skillSetter = useSetRecoilState(StateCurrentSkill)

  return (
    <StyledSkillsList>
      {
        data_skills.map((skill) => {
          return (
            <Skill key={skill.id} language={skill} onClick={() => skillSetter(skill)} />
          )
        })
      }
    </StyledSkillsList>
  )

}
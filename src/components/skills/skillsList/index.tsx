import { useRecoilState } from "recoil"
import { Skill } from "./skill"
import { StyledSkillsList } from "./styles"
import { data_skills } from "data/skills"
import { StateCurrentSkill } from "states/currentSkill"


export const SkillsList = () => {
  const [currentSkill, setCurrentSkill] = useRecoilState(StateCurrentSkill)

  return (
    <StyledSkillsList>
      {
        data_skills.map((skill) => {
          if(skill.id === currentSkill.id){
            return ( <Skill key={skill.id} language={skill} onClick={() => setCurrentSkill(skill)} selected /> )
          }
          return ( <Skill key={skill.id} language={skill} onClick={() => setCurrentSkill(skill)} /> )
        })
      }
    </StyledSkillsList>
  )

}
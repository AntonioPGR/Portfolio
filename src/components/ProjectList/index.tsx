import { Project } from "./project"
import { StyledProjectList } from "./style"
import { data_projects } from "data/projects"


export const ProjectList = () => {
  return (
    <StyledProjectList>
      {
        data_projects.map((project) => {
          return <Project project={project} key={project.id} />
        })
      }
    </StyledProjectList>
  )
}
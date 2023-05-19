import { Project } from "./project"
import { StyledProjectsContainer } from "./style"
import { data_projects } from "data/projects"


export const ProjectsList = () => {
  return (
    <StyledProjectsContainer>
      {
        data_projects.map((project) => {
          return <Project project={project} key={project.id} />
        })
      }
    </StyledProjectsContainer>
  )
}
import { useRecoilValue } from "recoil"
import { Project } from "./project"
import { StyledProjectsContainer } from "./style"
import { StateFilteredProjectsList } from "states/filteredProjects"


export const ProjectsList = () => {

  const filteredProjects = useRecoilValue(StateFilteredProjectsList)

  return (
    <StyledProjectsContainer>
      {
        filteredProjects.map((project) => {
          return <Project project={project} key={project.id} />
        })
      }
    </StyledProjectsContainer>
  )
}
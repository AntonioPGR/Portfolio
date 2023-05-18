import { Botao } from "components/Botao"
import { StyledProjetoContainer } from "./style"

interface PropsProject {
  project: IProject
}

export const Project = ({project}:PropsProject) => {
  return (
    <StyledProjetoContainer>
      <img alt={`Print da página do projeto ${project.name}`} src={project.image} />
      <h2>{project.name}</h2>
      <p>
        {project.description}
      </p>
      <a href={project.link} target="_Blank" rel="noreferrer">
        <Botao > Ver projeto </Botao>
      </a>
    </StyledProjetoContainer>
  )
}
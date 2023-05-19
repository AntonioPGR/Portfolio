import { Botao } from "components/Botao"
import { StyledProject } from "./style"
import { FiltroTags } from "components/FiltroTags"

interface PropsProject {
  project: IProject
}

export const Project = ({project}:PropsProject) => {
  return (
    <StyledProject>
      <img alt={`Print da página do projeto ${project.name}`} src={project.image} />
      <FiltroTags />
      <h2>{project.name}</h2>
      <p>
        {project.description}
      </p>
      <a href={project.link} target="_Blank" rel="noreferrer">
        <Botao > Ver projeto </Botao>
      </a>
    </StyledProject>
  )
}
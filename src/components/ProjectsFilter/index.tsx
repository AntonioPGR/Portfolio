import { FiltroTags } from "components/FiltroTags"
import { Search } from "./Search"
import { StyledProjectsFilters } from "./style"


export const ProjectsFilters = () => {

  return(
    <StyledProjectsFilters>
      <Search />
      <FiltroTags />
    </StyledProjectsFilters>
  )

}
import { LanguageList } from "components/LanguagesList"
import { Search } from "./Search"
import { StyledProjectsFilters } from "./style"


export const ProjectsFilters = () => {

  return(
    <StyledProjectsFilters>
      <Search />
      <LanguageList selectable={true} />
    </StyledProjectsFilters>
  )

}
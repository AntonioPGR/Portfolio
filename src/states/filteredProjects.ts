import { selector } from "recoil";
import { StateProjectsList } from "./projects";
import { StateSearchQuery } from "./searchQuery";


export const StateFilteredProjectsList = selector<IProject[]>({
  key: "FiteredProjectsList",
  get: ({get}) => {
    const projects = get(StateProjectsList);
    let filteredProjetcs = [...projects];

    // const filters = get(StateLanguageFilters);
    const SearchQuery = get(StateSearchQuery);

    if(SearchQuery){
      filteredProjetcs = filteredProjetcs.filter((project) => {
        return project.name.toLowerCase().includes(SearchQuery.toLowerCase());
      })
    }

    return filteredProjetcs
  }
})
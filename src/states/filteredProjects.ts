import { selector } from "recoil";
import { StateProjectsList } from "./projects";
import { StateSearchQuery } from "./searchQuery";
import { StateSelectedLanguages } from "./selectedLanguages";


const filterProjectsByName = (projects:IProject[], query:string) => {
  return projects.filter((project) => {
    return project.name.toLowerCase().includes(query.toLowerCase());
  })
}

const filterProjectsByLanguages = (projects:IProject[], filter_languages:ILanguageTag[]) => {
  return projects.filter((project) => {
    return filter_languages.every((filter_language) => {
      return project.languages.some((projectLanguage) => {
        return projectLanguage.id === filter_language.id;
      })
    })
  })
}

export const StateFilteredProjectsList = selector<IProject[]>({
  key: "FiteredProjectsList",
  get: ({get}) => {
    const projects = get(StateProjectsList);
    let filteredProjetcs = [...projects];

    const SearchQuery = get(StateSearchQuery);
    const languages = get(StateSelectedLanguages);

    if(SearchQuery){
      filteredProjetcs = filterProjectsByName(filteredProjetcs, SearchQuery)
    }
    if(languages.length !== 0){
      filteredProjetcs = filterProjectsByLanguages(filteredProjetcs, languages)
    }

    return filteredProjetcs
  }
})
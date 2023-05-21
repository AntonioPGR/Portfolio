declare interface ILink{
  id: number,
  href: string,
  label: string,
  target?: '_Blank' | '_Self',
  rel?: string,
}

declare interface ISkill {
  id: number,
  nome: string,
  descricao: string,
  icone: string,
  inicio_estudo
}

declare interface ILanguageTag {
  id: number,
  label: string
}

declare interface ISocialMedia {
  id: number,
  nome: string,
  icone: string,
  link: string
}

declare interface IProject {
  id: number,
  name: string,
  description: string,
  link: string,
  image: string,
  languages: ILanguageTag[]
}

declare type TPosition =  'Left' | 'Center' | 'Right'
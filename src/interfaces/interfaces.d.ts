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

declare interface ISocialMedia {
  id: number,
  nome: string,
  icone: string,
  link: string
}

declare type TPosition =  'Left' | 'Center' | 'Right'
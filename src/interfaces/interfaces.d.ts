declare interface ILink{
  id: number,
  href: string,
  label: string,
  target?: '_Blank' | '_Self',
  rel?: string,
}


declare type TPosition =  'Left' | 'Center' | 'Right'
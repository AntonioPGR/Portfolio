declare interface ILink{
  id: number,
  href: string,
  children: string,
  target?: '_Blank' | '_Self',
  rel?: string,
}

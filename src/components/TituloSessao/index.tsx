import { StyledTituloSessao } from "./style"

export interface PropsTituloSessao {
  children: string,
  position?: TPosition
}
export const TituloSessao = ({children, position='Center'}:PropsTituloSessao) => {

  return (
    <StyledTituloSessao position={position}>
      <h2>{children}</h2>
    </StyledTituloSessao>
  )
}
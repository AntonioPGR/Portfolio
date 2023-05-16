import { StyledTituloSessao } from "./src/components/TituloSessao/style"

export interface PropsPtTitulo {
  children: string,
}
export const PtTituloSessao = ({children}:PropsPtTitulo) => {

  return (
    <StyledTituloSessao>
      {children}
    </StyledTituloSessao>
  )
}
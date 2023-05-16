import { ReactNode } from "react"
import { StyledBotao } from "./style"

export interface PropsBotao {
  children: ReactNode,
  onClick?: () => void
}

export const Botao = ({children, onClick}:PropsBotao) => {
  return (
    <StyledBotao onClick={() => onClick}>
      {children}
    </StyledBotao>
  )
}
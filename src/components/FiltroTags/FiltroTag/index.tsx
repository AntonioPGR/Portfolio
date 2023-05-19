import { StyledFiltroTag } from "./style"

export interface PropsFiltroTag {
  children: string
}
export const FiltroTag = ({children}:PropsFiltroTag) => {
  return (
    <StyledFiltroTag>
      {children}
    </StyledFiltroTag>
  )
}


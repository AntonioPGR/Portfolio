import { StyledMain } from './style'

interface PropsMain{
  children: JSX.Element
}

export const Main= ({children}:PropsMain) => {
  
  return(
    <StyledMain>
      {children}
    </StyledMain>
  )

}
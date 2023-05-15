import { StyledPtLogo } from "./style"
import ImageLogo from 'images/logo.svg'

export const Logo = () => {

  return (
    <StyledPtLogo>  
      <img src={ImageLogo} alt={"Logo Antonio Pacheco"} />
    </StyledPtLogo>
  )
}
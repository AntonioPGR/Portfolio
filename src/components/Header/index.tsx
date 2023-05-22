import { Menu } from "./Menu"
import { Logo } from "./Logo"
import { StyledHeader } from "./style"


export const Header = () => {

  return (
    <StyledHeader>
      <div className="content">
        <Logo />
        <Menu />
      </div>
    </StyledHeader>
  )
}
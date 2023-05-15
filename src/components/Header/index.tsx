import { Logo } from "./Logo"
import { LinkNav } from "./LinkNav"
import { StyledHeader } from "./style"

export interface PropsHeader {
  links: ILink[]
}
export const Header = ({ links }:PropsHeader) => {

  return (
    <StyledHeader>
      <Logo />
      <nav>
        {
          links.map((link) => {
            return (
              <LinkNav 
                id={link.id}
                key={link.id} 
                href={link.href} 
                target={link.target} 
                rel={link.rel}
              > 
                { link.children } 
              </LinkNav>
            )
          })
        }
      </nav>
    </StyledHeader>
  )
}
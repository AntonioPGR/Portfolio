import { StyledLinkNav } from "./style"

export const LinkNav = ({children, href, rel, target}:ILink) => {

  return (
    <StyledLinkNav href={href} target={target} rel={rel} >
      {children}
    </StyledLinkNav>
  )

}
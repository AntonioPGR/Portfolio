import { StyledLinkNav } from "./style"

export const LinkNav = ({label, href, rel, target='_Blank'}:ILink) => {

  return (
    <StyledLinkNav href={href} target={target} rel={rel} >
      {label}
    </StyledLinkNav>
  )

}
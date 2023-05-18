import { Logo } from "./Logo"
import { StyledHeader } from "./style"
import { Link, useLocation } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'


export const Header = () => {
  const location = useLocation()

  const getLinks = () => {
    if (location.pathname === '/') {
      return(
        <>
          <Link to="/projetos">Projetos</Link>
          <HashLink to="#aboutMe">Sobre</HashLink>
          <HashLink to="#skills">Habilidades</HashLink>
          <HashLink to="#contact">Contato</HashLink>
        </>
      )
    }
    return(
      <Link to="/">Home</Link>
    )
  }

  return (
    <StyledHeader>
      <div className="content">
        <Logo />
        <nav>
          {getLinks()}
        </nav>
      </div>
    </StyledHeader>
  )
}
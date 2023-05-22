import { useLocation, Link } from "react-router-dom"
import { StyledMenu } from "./style"
import { HashLink } from "react-router-hash-link"
import MenuIcon from 'images/menu.svg'

export const Menu = () => {
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
    <StyledMenu> 
      <div>
        <div className="icon">
          <img src={MenuIcon} alt="icone do menu de navegação" />
        </div>
        <nav>
          {getLinks()}
        </nav>
      </div> 
    </StyledMenu>
  )
}
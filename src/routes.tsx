// COMPOENTS
import { Header } from 'components/Header'
import { Main } from 'components/Main'
import { Footer } from 'components/Footer'
// ROUTER
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// PAGES
import { LandingPage } from 'pages/landingPage'
import { Projects } from 'pages/projects'

export const AppRoutes = () => {
  return (
    <Router>
      
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/projetos' element={<Projects />} />
        </Routes>
      </Main>

      <Footer />

    </Router>
  )
}
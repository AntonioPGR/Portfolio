// COMPOENTS
import { Header } from 'components/Header'
import { Main } from 'components/Main'
import { Footer } from 'components/Footer'
// ROUTER
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// PAGES
import { LandingPage } from 'pages/landingPage'

export const AppRoutes = () => {
  return (
    <Router>
      
      <Header links={[{label: "Github", href:"https://www.github.com", id:1}]} />

      <Main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Main>

      <Footer />

    </Router>
  )
}
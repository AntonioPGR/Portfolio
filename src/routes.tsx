import { Header } from 'components/Header'
import { Main } from 'components/Main'
import { Footer } from 'components/PtFooter'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Router>
      
      <Header links={[]} />

      <Main>
        <Routes>
          <Route path="/" element={<h1> Opa </h1>} />
        </Routes>
      </Main>

      <Footer />

    </Router>
  )
}
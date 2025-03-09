import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import HomeLayout from './components/HomeLayout/HomeLayout'
import About from './components/About/About'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="user-dashboard" element={<HomeLayout />} >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

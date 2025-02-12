import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutReact from './pages/AboutReact'
import AboutVite from './pages/AboutVite'
import Navbar from "./layaout/Header"
import Footer from "./layaout/Footer"


function App() {

  return (
    <>
      <BrowserRouter>
        
          <Navbar />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutreact" element={<AboutReact />} />
              <Route path="/aboutvite" element={<AboutVite />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

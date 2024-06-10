import './App.css'
import NavBar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Beranda from './pages/Beranda'
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element = {<Beranda/>} />
            <Route path="/profile" element = {<Beranda/>} />
            <Route path="/wisata" element = {<Beranda/>} />
            <Route path="/budaya" element = {<Beranda/>} />
          </Routes>
          <Footer></Footer>
          
    </>
  )
}

export default App

import './App.css'
import NavBar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Beranda from './pages/Beranda'
import IsiBudaya from './pages/isiBudaya'
import { Route, Routes } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element = {<Beranda/>} />
            <Route path="/profile" element = {<Beranda/>} />
            <Route path="/wisata" element = {<Beranda/>} />
            <Route path="/budaya" element = {<IsiBudaya/>} />
          </Routes>
          <Footer></Footer>
          
    </>
  )
}

export default App

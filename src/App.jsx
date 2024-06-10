import './App.css'
import NavBar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ProfileWeb from './pages/ProfileWeb'
// import Beranda from './pages/Beranda'
function App() {
  return (
    <>
          <NavBar></NavBar>
          {/* <Beranda></Beranda> */}
          <ProfileWeb></ProfileWeb>
          <Footer></Footer>
          
    </>
  )
}

export default App

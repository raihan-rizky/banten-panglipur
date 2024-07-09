import './App.css'
import NavBar from './components/common/Navbar'
import Footer from './components/common/Footer'
import AppRoutes from './routes/AppRoutes'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);

  return (
    <>
      <NavBar></NavBar>
      <AppRoutes></AppRoutes>
      <Footer></Footer>


    </>
  )
}

export default App

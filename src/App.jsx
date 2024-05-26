import './App.css'
import NavBar from './components/common/Navbar'
import Hero from './components/specific/Hero'
import AboutUs from './components/specific/AboutUs'
import DestinasiPilihan from './components/specific/DestinasiPilihan'
import EventBudaya from './components/specific/EventBudaya'
import ReviewWebsite from './components/specific/ReviewWebsite'
import Footer from './components/common/Footer'

function App() {
  return (
    <>
          <NavBar></NavBar>
          <Hero></Hero>
        <AboutUs></AboutUs>
        <DestinasiPilihan></DestinasiPilihan>
        <EventBudaya></EventBudaya>
        <ReviewWebsite></ReviewWebsite>
        <Footer></Footer>
    </>
  )
}

export default App

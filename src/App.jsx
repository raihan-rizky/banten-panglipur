import './App.css'
import NavBar from './components/specific/Navbar'
import Hero from './components/specific/Hero'

function App() {

  return (
    <>
        <div className="max-w-full bg-[url('./public/images/banten-hero-bg.png')]">
          <NavBar></NavBar>
          <Hero></Hero>
        </div>
    </>
  )
}

export default App

import './App.css'
import NavBar from './components/common/Navbar'
import Footer from './components/common/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  const the_animation = document.querySelectorAll('.animation-left-right')

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
          if (entry.isIntersecting) {
              entry.target.classList.add('scroll-animation-left-right')
          }
              else {
                  entry.target.classList.remove('scroll-animation-left-right')
              }
          
      })
  },
    { threshold: 0.5
    });
  //
    for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

      observer.observe(elements);
      console.log(elements);
    } 
  return (
    <>
      <NavBar></NavBar>
      <AppRoutes></AppRoutes>
      <Footer></Footer>


    </>
  )
}

export default App

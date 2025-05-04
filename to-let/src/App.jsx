import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, [])
  
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App


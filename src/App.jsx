import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Mission from './Components/Mission/Mission.jsx';
import Flow from './Components/Flow/Flow.jsx'
import Join from './Components/Join/Join.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Mission />
      {/* <Flow/> */}
      {/* <Join/> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App

import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Mission from './Components/Mission/Mission.jsx';
import About from './Components/About/About.jsx';
import Join from './Components/Join/Join.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Flow from './Components/Flow/Flow.jsx'
import i18next from "i18next";
import './App.css';

function App() {
  const [lang, setLang] = useState(i18next.language);

  return (
    <>
      {/* <div className="overlay"></div> */}
      <Navbar lang={lang} setLang={setLang} />
      <Home lang={lang} />
      <About lang={lang}/>
      <Mission />
      <Flow/>
      <Join/>
      <Contact />
      <Footer />
    </>
  )
}

export default App

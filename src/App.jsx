import React from "react";
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <main id="main">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
